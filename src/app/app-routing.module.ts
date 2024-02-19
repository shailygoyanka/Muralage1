import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './navbar/projects/projects.component';
import { AboutComponent } from './navbar/about/about.component';
import { PeopleComponent } from './navbar/people/people.component';
import { AwardsComponent } from './navbar/awards/awards.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { ByLocationComponent } from './navbar/projects/by-location/by-location.component';
import { ByCategoriesComponent } from './navbar/projects/by-categories/by-categories.component';
import { HealthcareComponent } from './navbar/projects/by-categories/healthcare/healthcare.component';
import { AzamgarhUp1Component } from './navbar/projects/by-categories/healthcare/azamgarh-up1/azamgarh-up1.component';
import { ArrowbackComponent } from './navbar/projects/by-categories/healthcare/azamgarh-up1/arrowback/arrowback.component';
import { Awardaugust2023Component } from './navbar/awards/awardaugust2023/awardaugust2023.component';

const routes: Routes = [

{path:'home', component:HomeComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'projects',component:ProjectsComponent},
{path:'about',component:AboutComponent},
{path:'people',component:PeopleComponent},
{path:'awards',component:AwardsComponent},
{path:'contact',component:ContactComponent} ,
{path:'by-location',component:ByLocationComponent},
{path:'by-categories',component:ByCategoriesComponent},
{path:'healthcare',component:HealthcareComponent},
{path:'azamgarh-up1',component:AzamgarhUp1Component},
{path:'arrowback',component:ArrowbackComponent},
{path:'awardaugust2023',component:Awardaugust2023Component},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
