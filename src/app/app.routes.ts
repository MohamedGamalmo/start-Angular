import { PortfolioComponent } from './../portfolio/portfolio.component';
import { ContactComponent } from './../contact/contact.component';
import { AboutComponent } from './../about/about.component';
import { HomeComponent } from './../home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'' ,redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent, title:'Home'},
    {path:'about',component:AboutComponent, title:'About'},
    {path:'contact',component:ContactComponent, title:'Contact'},
    {path:'portfolio',component:PortfolioComponent, title:'Portfolio'},
];
