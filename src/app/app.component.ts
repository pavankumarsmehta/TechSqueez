import {Component, ElementRef, Input, SimpleChanges, ViewChild} from '@angular/core';
import {TechSqueezHelperService} from "./services/tech-squeez-helper.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMobileOpen: any;
  isDark: boolean = false;
  isLight: boolean = true;



  constructor(private techSqueezHelperService: TechSqueezHelperService) {
    this.changeTheme()
  }

  changeTheme() {
    this.isDark ? this.isDark = false : this.isDark = true;
    this.isLight ? this.isLight = false : this.isLight = true;
    /*this.isLight = themeColor === 'light';*/
  }

  title = 'TechSqueez';
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit()
  }


/*
  slides = [
    {img: "assets/img/demo-slide-1.png"},
    {img: "assets/img/demo-slide-2.png"},
    {img: "assets/img/demo-slide-3.png"},
    {img: "assets/img/demo-slide-4.png"},
    {img: "assets/img/demo-slide-5.png"}
  ];
  slideConfig = {
    /!*slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    *!/
    dots: false,
    centerMode: true,
    centerPadding: '100px',
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    lazyLoad: 'ondemand',
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      }
    ]


  };

  addSlide() {
    this.slides.push({img: "assets/img/demo-slide-1.png"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
*/


  ngOnInit() {
    this.techSqueezHelperService.stringSubject.subscribe(
      data => {
        this.isMobileOpen = data;


      }
    );
  }
}

/*
<!--<html>
  <body [ngClass]="isMobileOpen ? 'mobile-open': ''" >
<div id="__next">
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  </div>
  </body>
//</html>-->*/


