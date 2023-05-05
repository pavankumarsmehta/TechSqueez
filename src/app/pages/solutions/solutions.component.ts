import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {
  isMainSolution: boolean = false;
  isHotelBooking: boolean = false;

  constructor(private router: Router) {
    this.isMainSolution = this.router.url === '/solutions';
    this.isHotelBooking = this.router.url === '/hotel-booking-app-development';

    this.isHotelBooking = this.router.url === '/hotel-booking-app-development';
    this.isHotelBooking = this.router.url === '/hotel-booking-app-development';
    this.isHotelBooking = this.router.url === '/hotel-booking-app-development';
    this.isHotelBooking = this.router.url === '/hotel-booking-app-development';
    this.isHotelBooking = this.router.url === '/hotel-booking-app-development';
  }

  ngOnInit(): void {
  }

}
