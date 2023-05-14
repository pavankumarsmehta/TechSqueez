import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerContent: any = {
    title: `A Superior <br> Experiance From <br> <span>DESIGN TO <br>DEVELOPMENT</span> <br> With Us.`,
  };
  blogContent: any;
  hiringContent: any = {
    title: `HIRE DEDICATED <br> <span>DEVELOPERS</span>`,
    description: `We’re the web/app development and design team that walks the talk. We take your <b>VISION,
                        SOLVE</b> the<!-- --> <b>CHALLENGES.</b> From <b> TECHNOLOGY</b> query to<!-- --> <b>SOLUTION,</b>
                        delivering you <b>VALUE </b> for your<!-- --> <b>MONEY </b> with a <b>QUALITY PRODUCT</b> that is
                        worthy of your <b> REPUTATION.</b>`
  };
  industriesContent: any;
  ourPlatformContent: any;
  serviceContent: any;
  platformContent: any;
  portfolioContent: any;
  talkToExpertContent: any;
  technologyContent: any;
  whoWeAreContent: any = ``;

  slides = [
    {img: "assets/img/demo-slide-1.png"},
    {img: "assets/img/demo-slide-2.png"},
    {img: "assets/img/demo-slide-3.png"},
    {img: "assets/img/demo-slide-4.png"},
    {img: "assets/img/demo-slide-5.png"}
  ];
  slideConfig1 = {
    dots: false,
    centerMode: true,
    centerPadding: '100px',
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 333,
    slidesToShow: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
}
  slideConfig = {
    /*slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    */
    dots: false,
    centerMode: true,
    centerPadding: '100px',
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
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
    console.log('slick initialized', e);
  }
  slickInitOne(e: any) {
    console.log('slick initialized one');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }
breakpointOne(e: any) {
    console.log('breakpoint');
  }

  /*afterChange(e: any) {
    console.log('afterChange');
  }*/
  afterChange (e: any) {
    /*console.log('eeeeeeeeeeeeeeeeee', e)
    // console.log('eeeeeeeeeeeeeeeeee', e.currentSlide)
    console.log('e.slick.$slides', e.slick.$slides[e.currentSlide])
    var nestedSlider = $(e.slick.$slides[e.currentSlide]).find('.nested-slider');
    console.log('nestedSlider', nestedSlider)
    debugger*/
    /*var nestedSlider = $(e.slick.$slides).find('.nested-slider');*/
    /*var nestedSlider = $(slick.$slides[currentSlide]).find('.nested-slider');
    nestedSlider.slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000
    });*/
  }
  afterChangeOne (e: any) {
    /*console.log('eeeeeeeeeeeeeeeeee', e)
    // console.log('eeeeeeeeeeeeeeeeee', e.currentSlide)
    console.log('e.slick.$slides', e.slick.$slides[e.currentSlide])
    var nestedSlider = $(e.slick.$slides[e.currentSlide]).find('.nested-slider');
    console.log('nestedSlider', nestedSlider)
    debugger*/
    /*var nestedSlider = $(e.slick.$slides).find('.nested-slider');*/
    /*var nestedSlider = $(slick.$slides[currentSlide]).find('.nested-slider');
    nestedSlider.slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000
    });*/
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
  beforeChangeOne(e: any) {
    console.log('beforeChange');
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
