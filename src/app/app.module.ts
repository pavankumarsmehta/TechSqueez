import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';*/
import { FooterComponent } from "./navigation/footer/footer.component";
import { HeaderComponent } from "./navigation/header/header.component";
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './pages/home/banner/banner.component';
import { WhoWeAreComponent } from './pages/home/who-we-are/who-we-are.component';
import { OurServiceComponent } from './pages/home/our-service/our-service.component';
import { OtherPlateformComponent } from './pages/home/other-plateform/other-plateform.component';
import { IndustriesComponent } from './pages/home/industries/industries.component';
import { PlateformComponent } from './pages/home/plateform/plateform.component';
import { TalkToExpertsComponent } from './pages/home/talk-to-experts/talk-to-experts.component';
import { TechnologyComponent } from './pages/home/technology/technology.component';
import { HiringComponent } from './pages/home/hiring/hiring.component';
import { SolutionsComponent } from "./pages/solutions/solutions.component";
import {TechSqueezHelperService} from "./services/tech-squeez-helper.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    WhoWeAreComponent,
    OurServiceComponent,
    OtherPlateformComponent,
    IndustriesComponent,
    PlateformComponent,
    TalkToExpertsComponent,
    TechnologyComponent,
    HiringComponent,
    SolutionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [TechSqueezHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
