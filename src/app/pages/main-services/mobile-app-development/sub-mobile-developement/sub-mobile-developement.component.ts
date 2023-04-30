import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sub-mobile-developement',
  templateUrl: './sub-mobile-developement.component.html',
  styleUrls: ['./sub-mobile-developement.component.scss']
})
export class SubMobileDevelopementComponent implements OnInit {
  isIOS: boolean = false;
  isAndroid: boolean = false;
  isFlutter: boolean = false;
  isReactNative: boolean = false;


  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.isIOS = this.router.url === '/ios-app-development';
    this.isAndroid = this.router.url === '/android-app-development';
    this.isFlutter = this.router.url === '/flutter-app-development';
    this.isReactNative = this.router.url === '/react-native-development';



  }

}
