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
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {ToolsAndTechComponent} from "./common/tools-and-tech/tools-and-tech.component";
import { MainAboutUsComponent } from "./pages/main-about-us/main-about-us.component";
import { MainCareerComponent } from "./pages/main-career/main-career.component";
import { MainContactUsComponent } from "./pages/main-contact-us/main-contact-us.component";
import { MainDevelopersComponent } from "./pages/main-developers/main-developers.component";
import { MainIndustriesComponent } from "./pages/main-industries/main-industries.component";
import { MainServicesComponent} from "./pages/main-services/main-services.component";
import {HireDeveloperComponent} from "./pages/main-developers/hire-developer/hire-developer.component";
import {SubWebDevelopementComponent} from "./pages/main-services/web-developement/sub-web-developement/sub-web-developement.component";
import {SubMobileDevelopementComponent} from "./pages/main-services/mobile-app-development/sub-mobile-developement/sub-mobile-developement.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


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
    SolutionsComponent,
    ToolsAndTechComponent,
    MainAboutUsComponent,
    MainCareerComponent,
    MainContactUsComponent,
    MainDevelopersComponent,
    MainIndustriesComponent,
    MainServicesComponent,
    HireDeveloperComponent,
    SubWebDevelopementComponent,
    SubMobileDevelopementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [TechSqueezHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
