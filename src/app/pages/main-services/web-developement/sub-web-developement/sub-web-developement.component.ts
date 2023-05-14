import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sub-web-developement',
  templateUrl: './sub-web-developement.component.html',
  styleUrls: ['./sub-web-developement.component.scss']
})
export class SubWebDevelopementComponent implements OnInit {
  isAngular: boolean = false;
  isReactjs: boolean = false;
  isVuejs: boolean = false;
  isFlutter: boolean = false;
  isNodejs: boolean = false;
  isGolang: boolean = false;
  isLaravel: boolean = false;
  isPhp: boolean = false;

  isWordpress: boolean = false;
  isDrupal: boolean = false;
  isJoomla: boolean = false;
  isDotnetnuke: boolean = false;
  isMagento: boolean = false;
  isShopify: boolean = false;
  isWoocommerce: boolean = false;
  isNopcommerce: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.isAngular = this.router.url === '/angular-development';
    this.isReactjs = this.router.url === '/reactjs-development';
    this.isVuejs = this.router.url === '/vuejs-development';
    this.isFlutter = this.router.url === '/flutter-web-development';
    this.isNodejs = this.router.url === '/nodejs-development';
    this.isGolang = this.router.url === '/golang-development';
    this.isLaravel = this.router.url === '/laravel-development';
    this.isPhp = this.router.url === '/php-development';


    this.isWordpress = this.router.url === '/wordpress-development';
    this.isDrupal = this.router.url === '/drupal-development';
    this.isJoomla = this.router.url === '/joomla-development';
    this.isDotnetnuke = this.router.url === '/dotnetnuke-development';
    this.isMagento = this.router.url === '/magento-development';
    this.isShopify = this.router.url === '/shopify-development';
    this.isWoocommerce = this.router.url === '/woocommerce-development';
    this.isNopcommerce = this.router.url === '/nopcommerce-development';


  }

}
