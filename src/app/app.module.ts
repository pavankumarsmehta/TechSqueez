import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import {TechSqueezHelperService} from "./services/tech-squeez-helper.service";
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CareerComponent } from './pages/career/career.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    CareerComponent,
    SolutionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TechSqueezHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
