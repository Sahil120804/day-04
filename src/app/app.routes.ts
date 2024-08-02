import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"contactus",component:ContactusComponent},
    {path:"departments",component:DepartmentsComponent},
    {path:"aboutus",component:AboutusComponent},
]
