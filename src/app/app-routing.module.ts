import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {MainDevelopersComponent} from "./pages/main-developers/main-developers.component";
import {MainIndustriesComponent} from "./pages/main-industries/main-industries.component";
import {MainAboutUsComponent} from "./pages/main-about-us/main-about-us.component";
import {MainCareerComponent} from "./pages/main-career/main-career.component";
import {MainContactUsComponent} from "./pages/main-contact-us/main-contact-us.component";
import {WebDevelopementComponent} from "./pages/main-services/web-developement/web-developement.component";
import {MobileAppDevelopmentComponent} from "./pages/main-services/mobile-app-development/mobile-app-development.component";
import {UiUxDesignComponent} from "./pages/main-services/ui-ux-design/ui-ux-design.component";
import {MainServicesComponent} from "./pages/main-services/main-services.component";
import {HireDeveloperComponent} from "./pages/main-developers/hire-developer/hire-developer.component";
import {CMSServicesComponent} from "./pages/main-services/cms-services/cms-services.component";
import {FrontendServicesComponent} from "./pages/main-services/frontend-services/frontend-services.component";
import {BackendServicesComponent} from "./pages/main-services/backend-services/backend-services.component";
import { SolutionsComponent } from "./pages/solutions/solutions.component";
import {SubWebDevelopementComponent} from "./pages/main-services/web-developement/sub-web-developement/sub-web-developement.component";
import {SubMobileDevelopementComponent} from "./pages/main-services/mobile-app-development/sub-mobile-developement/sub-mobile-developement.component";


const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'hire-dedicated-developers', component: MainDevelopersComponent },
  { path: 'our-services', component: MainServicesComponent },
  { path: 'mobile-app-development', component: MainServicesComponent },
  { path: 'ios-app-development', component: MainServicesComponent },
  { path: 'android-app-development', component: MainServicesComponent },
  { path: 'flutter-app-development', component: MainServicesComponent },
  { path: 'react-native-development', component: MainServicesComponent },
  { path: 'web-development', component: MainServicesComponent },
  { path: 'angular-development', component: MainServicesComponent },
  { path: 'reactjs-development', component: MainServicesComponent },
  { path: 'vuejs-development', component: MainServicesComponent },
  { path: 'nodejs-development', component: MainServicesComponent },
  { path: 'golang-development', component: MainServicesComponent },
  { path: 'laravel-development', component: MainServicesComponent },
  { path: 'php-development', component: MainServicesComponent },
  { path: 'wordpress-development', component: MainServicesComponent },


  { path: 'cloud-development-services', component: MainServicesComponent },


  { path: 'frontend-development', component: FrontendServicesComponent },
  { path: 'backend-development', component: BackendServicesComponent },
  { path: 'cms-development', component: CMSServicesComponent },
  { path: 'ui-ux-design', component: UiUxDesignComponent },


  { path: 'industries', component: MainIndustriesComponent },
  { path: 'about-us', component: MainAboutUsComponent },
  { path: 'careers', component: MainCareerComponent },
  { path: 'contact-us', component: MainContactUsComponent },


  { path: 'hire-flutter-app-developers', component: HireDeveloperComponent },
  { path: 'hire-ios-app-developers', component: HireDeveloperComponent },
  { path: 'hire-android-app-developers', component: HireDeveloperComponent },
  { path: 'hire-full-stack-developer', component: HireDeveloperComponent },
  { path: 'hire-front-end-developer', component: HireDeveloperComponent },
  { path: 'hire-back-end-developer', component: HireDeveloperComponent },

  { path: 'solutions', component: SolutionsComponent },
  { path: 'grocery-delivery-app-development', component: SolutionsComponent },
  { path: 'food-delivery-app-development', component: SolutionsComponent },
  { path: 'on-demand-app-development', component: SolutionsComponent },
  { path: 'fashion-ecommerce-app-development', component: SolutionsComponent },
  { path: 'digital-wallet-development', component: SolutionsComponent },
  { path: 'elearning-app-development', component: SolutionsComponent },
  { path: 'marketplace-app-development', component: SolutionsComponent },
  { path: 'dating-app-development', component: SolutionsComponent },
  { path: 'salon-and-beauty-app-development', component: SolutionsComponent },
  { path: 'hotel-booking-app-development', component: SolutionsComponent },
  { path: 'taxi-booking-app-development', component: SolutionsComponent },
  { path: 'event-and-ticket-booking-solutions', component: SolutionsComponent },
  { path: 'taxi-booking-app-development', component: SolutionsComponent },
  { path: 'restaurant-app-development', component: SolutionsComponent },
  { path: 'angular-development', component: SubWebDevelopementComponent },
  { path: 'reactjs-development', component: SubWebDevelopementComponent },
  { path: 'vuejs-development', component: SubWebDevelopementComponent },
  { path: 'flutter-web-development', component: SubWebDevelopementComponent },
  { path: 'nodejs-development', component: SubWebDevelopementComponent },
  { path: 'golang-development', component: SubWebDevelopementComponent },
  { path: 'laravel-development', component: SubWebDevelopementComponent },
  { path: 'php-development', component: SubWebDevelopementComponent },



  { path: 'drupal-development', component: SubWebDevelopementComponent },
  { path: 'joomla-development', component: SubWebDevelopementComponent },
  { path: 'dotnetnuke-development', component: SubWebDevelopementComponent },
  { path: 'magento-development', component: SubWebDevelopementComponent },
  { path: 'shopify-development', component: SubWebDevelopementComponent },
  { path: 'woocommerce-development', component: SubWebDevelopementComponent },
  { path: 'nopcommerce-development', component: SubWebDevelopementComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
