import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {CareerComponent} from "./pages/career/career.component";
import {SolutionsComponent} from "./pages/solutions/solutions.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'careers', component: CareerComponent },
  { path: 'hotel-booking-app-development', component: SolutionsComponent },

  { path: 'solutions', component: SolutionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
