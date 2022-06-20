import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Villian } from './Villian';





@Injectable({
  providedIn: 'root'
})
export class VillianService {

  private villiansURL = 'api/villians';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) {
    //this.getVillians();
   }

  getVillians(): Observable<Villian[]>{
    let response = this.http.get<Villian[]>(this.villiansURL);
    return response; 
  }


  getVillian(id:Number): Observable<Villian>{
   let response = this.http.get<Villian>(`${this.villiansURL}/${id}`);
    return response;
  }

  addVillian(villian:Villian):Observable<Villian>{
    // debugger;
    // console.log(JSON.stringify(villian));

    let response = this.http.post<Villian>(this.villiansURL,villian,this.httpOptions);
    return response;
  }

  update(villian:Villian):Observable<Villian>{
    console.log('villian'+JSON.stringify(villian));
    let response = this.http.put<Villian>(this.villiansURL,villian,this.httpOptions);
    return response;
  }

  deleteVillian(id: number): Observable<Villian> {
    const url = `${this.villiansURL}/${id}`;
  
    return this.http.delete<Villian>(url, this.httpOptions).pipe(
      tap(_ => ((this.log(`deleted villian id=${id}`)))),
      catchError(this.handleError<Villian>('deletevillian'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    
  }
}
