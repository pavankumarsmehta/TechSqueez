import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-services',
  templateUrl: './main-services.component.html',
  styleUrls: ['./main-services.component.scss']
})
export class MainServicesComponent implements OnInit {
  isMainService: boolean = false;
  isMobileAppDevelopment: boolean = false;
  isIOS: boolean = false;
  isAndroid: boolean = false;
  isFlutter: boolean = false;
  isReactNative: boolean = false;
  isWebAppDevelopment: boolean = false;
  isWebAngular: boolean = false;
  isWebReactjs: boolean = false;
  isWebVuejs: boolean = false;
  isWebNodejs: boolean = false;
  isWebGolang: boolean = false;
  isWebLaravel: boolean = false;
  isWebPhp: boolean = false;
  isWebWordpress: boolean = false;
  isWebDrupal: boolean = false;
  isWebJoomla: boolean = false;
  isWebDotnetnuke: boolean = false;
  isWebMagento: boolean = false;
  isWebShopify: boolean = false;
  isWebWoocommerce: boolean = false;
  isWebNopcommerce: boolean = false;


  isCloudComputing: boolean = false;
  constructor(private router: Router) {
    this.isMainService = this.router.url === '/our-services';
    this.isMobileAppDevelopment = this.router.url === '/mobile-app-development';
    this.isIOS = this.router.url === '/ios-app-development';
    this.isAndroid = this.router.url === '/android-app-development';
    this.isFlutter = this.router.url === '/flutter-app-development';
    this.isReactNative = this.router.url === '/react-native-development';

    this.isWebAppDevelopment = this.router.url === '/web-development';
    this.isWebAngular = this.router.url === '/angular-development';
    this.isWebReactjs = this.router.url === '/reactjs-development';
    this.isWebVuejs = this.router.url === '/vuejs-development';
    this.isWebNodejs = this.router.url === '/nodejs-development';
    this.isWebGolang = this.router.url === '/golang-development';
    this.isWebLaravel = this.router.url === '/laravel-development';
    this.isWebPhp = this.router.url === '/php-development';
    this.isWebWordpress = this.router.url === '/wordpress-development';


    this.isCloudComputing = this.router.url === '/cloud-development-services';
    this.isWebDrupal = this.router.url === '/drupal-development';
    this.isWebJoomla = this.router.url === '/joomla-development';
    this.isWebDotnetnuke = this.router.url === '/dotnetnuke-development';
    this.isWebMagento = this.router.url === '/magento-development';
    this.isWebShopify = this.router.url === '/shopify-development';
    this.isWebWoocommerce = this.router.url === '/woocommerce-development';
    this.isWebNopcommerce = this.router.url === '/nopcommerce-development';
  }

  ngOnInit(): void {
  }

}
