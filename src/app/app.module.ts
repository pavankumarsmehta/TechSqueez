import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
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
import { MainDevelopersComponent } from './pages/main-developers/main-developers.component';
import { MainIndustriesComponent } from './pages/main-industries/main-industries.component';
import { MainServicesComponent } from './pages/main-services/main-services.component';
import { MainSolutionsComponent } from './pages/main-solutions/main-solutions.component';
import { MainAboutUsComponent } from './pages/main-about-us/main-about-us.component';
import { MainCareerComponent } from './pages/main-career/main-career.component';
import { MainContactUsComponent } from './pages/main-contact-us/main-contact-us.component';
import { UiUxDesignComponent } from './pages/main-services/ui-ux-design/ui-ux-design.component';
import { WebDevelopementComponent } from './pages/main-services/web-developement/web-developement.component';
import { MobileAppDevelopmentComponent } from './pages/main-services/mobile-app-development/mobile-app-development.component';
import { FrontendServicesComponent } from './pages/main-services/frontend-services/frontend-services.component';
import { BackendServicesComponent } from './pages/main-services/backend-services/backend-services.component';
import { CMSServicesComponent } from './pages/main-services/cms-services/cms-services.component';
import { ToolsAndTechComponent } from './common/tools-and-tech/tools-and-tech.component';
import { HireDeveloperComponent } from './pages/main-developers/hire-developer/hire-developer.component';
import { SolutionsComponent } from './pages/main-solutions/solutions/solutions.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
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
    MainDevelopersComponent,
    MainIndustriesComponent,
    MainServicesComponent,
    MainSolutionsComponent,
    MainAboutUsComponent,
    MainCareerComponent,
    MainContactUsComponent,
    UiUxDesignComponent,
    WebDevelopementComponent,
    MobileAppDevelopmentComponent,
    FrontendServicesComponent,
    BackendServicesComponent,
    CMSServicesComponent,
    ToolsAndTechComponent,
    HireDeveloperComponent,
    SolutionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
