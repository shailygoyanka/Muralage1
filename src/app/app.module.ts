import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './navbar/projects/projects.component';
import { AboutComponent } from './navbar/about/about.component';
import { PeopleComponent } from './navbar/people/people.component';
import { AwardsComponent } from './navbar/awards/awards.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ByCategoriesComponent } from './navbar/projects/by-categories/by-categories.component';
import { ByLocationComponent } from './navbar/projects/by-location/by-location.component';
import { HealthcareComponent } from './navbar/projects/by-categories/healthcare/healthcare.component';
import { AzamgarhUp1Component } from './navbar/projects/by-categories/healthcare/azamgarh-up1/azamgarh-up1.component';
import { ArrowbackComponent } from './navbar/projects/by-categories/healthcare/azamgarh-up1/arrowback/arrowback.component';
import { Awardaugust2023Component } from './navbar/awards/awardaugust2023/awardaugust2023.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    AboutComponent,
    PeopleComponent,
    AwardsComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    ByCategoriesComponent,
    ByLocationComponent,
    HealthcareComponent,
    AzamgarhUp1Component,
    ArrowbackComponent,
    Awardaugust2023Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
