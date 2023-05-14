import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-developers',
  templateUrl: './main-developers.component.html',
  styleUrls: ['./main-developers.component.scss']
})
export class MainDevelopersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isMobile: boolean = true;
  isFrontend: boolean = false;
  isBackend: boolean = false;
  isCMSEcommerce: boolean = false;
  isDesign: boolean = false;
  sports: boolean = true;
  fintech: boolean = false;
  logistic: boolean = false;
  eCommerce: boolean = false;
  education: boolean = false;
  healthCare: boolean = false;
  realEstate: boolean = false;
  businessApp: boolean = false;
  travelAndTourism: boolean = false;
  fitnessAndWellNess: boolean = false;
  mediaAndEntertainment: boolean = false;
  status: boolean = false;
  mouseEnterEvent(data: string){
    this.sports = false;
    this.fintech = false;
    this.logistic = false;
    this.eCommerce = false;
    this.education = false;
    this.healthCare = false;
    this.realEstate = false;
    this.businessApp = false;
    this.travelAndTourism = false;
    this.fitnessAndWellNess = false;
    this.mediaAndEntertainment = false;
    if (data === 'sports') {
      this.sports = true;
    } else if (data === 'fintech') {
      this.fintech = true;
    } else if (data === 'logistic') {
      this.logistic = true;
    } else if (data === 'eCommerce') {
      this.eCommerce = true;
    } else if (data === 'education') {
      this.education = true;
    } else if (data === 'healthCare') {
      this.healthCare = true;
    } else if (data === 'realEstate') {
      this.realEstate = true;
    } else if (data === 'businessApp') {
      this.businessApp = true;
    } else if (data === 'travelAndTourism') {
      this.travelAndTourism = true;
    } else if (data === 'fitnessAndWellNess') {
      this.fitnessAndWellNess = true;
    } else if (data === 'mediaAndEntertainment') {
      this.mediaAndEntertainment = true;
    } else {
      this.sports = true;
    }
  }
  openTab(event: any){
    if (event === 'mobile') {
      this.isMobile =  true;
      this.isFrontend =  false;
      this.isBackend =  false;
      this.isCMSEcommerce =  false;
      this.isDesign =  false;
    }
    else if (event === 'frontEnd') {
      this.isMobile =  false;
      this.isFrontend =  true;
      this.isBackend =  false;
      this.isCMSEcommerce =  false;
      this.isDesign =  false;
    }
    else if (event === 'backend') {
      this.isMobile =  false;
      this.isFrontend =  false;
      this.isBackend =  true;
      this.isCMSEcommerce =  false;
      this.isDesign =  false;
    }
    else if (event === 'eCommerce') {
      this.isMobile =  false;
      this.isFrontend =  false;
      this.isBackend =  false;
      this.isCMSEcommerce =  true;
      this.isDesign =  false;
    }
    else if (event === 'design') {
      this.isMobile =  false;
      this.isFrontend =  false;
      this.isBackend =  false;
      this.isCMSEcommerce =  false;
      this.isDesign =  true;
    }

  }
  mouseOutEvent(data: string) {
    this.sports = true;
    this.fintech = false;
    this.logistic = false;
    this.eCommerce = false;
    this.education = false;
    this.healthCare = false;
    this.realEstate = false;
    this.businessApp = false;
    this.travelAndTourism = false;
    this.fitnessAndWellNess = false;
    this.mediaAndEntertainment = false;
    /*if (data === 'sports') {
      this.sports = false;
    } else if (data === 'fintech') {
      this.fintech = false;
    } else if (data === 'logistic') {
      this.logistic = false;
    } else if (data === 'eCommerce') {
      this.eCommerce = false;
    } else if (data === 'education') {
      this.education = false;
    } else if (data === 'healthCare') {
      this.healthCare = false;
    } else if (data === 'realEstate') {
      this.realEstate = false;
    } else if (data === 'businessApp') {
      this.businessApp = false;
    } else if (data === 'travelAndTourism') {
      this.travelAndTourism = false;
    } else if (data === 'fitnessAndWellNess') {
      this.fitnessAndWellNess = false;
    } else if (data === 'mediaAndEntertainment') {
      this.mediaAndEntertainment = false;
    } else {
      this.sports = true;
    }*/
  }
}
