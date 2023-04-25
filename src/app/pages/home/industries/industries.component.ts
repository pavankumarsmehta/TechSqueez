import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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










    /*this.status = !this.status;
    console.log('status', this.status)*/
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
