import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessageComponent } from './message/message.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { VilliansComponent } from './villians/villians.component';
import { VillianDetailComponent } from './villian-detail/villian-detail.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
     HttpClientInMemoryWebApiModule.forRoot(
       InMemoryDataService, { dataEncapsulation: false }
)],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    HeroSearchComponent,
    VilliansComponent,
    VillianDetailComponent,
    TestComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }