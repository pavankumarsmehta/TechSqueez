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
  groceryApp: boolean = false;
  foodDeliveryApp : boolean = false;
  onDemandApp : boolean = false;
  fashionECommerceApp : boolean = false;
  digitalWalletApp : boolean = false;
  eLearningApp : boolean = false;
  marketplaceApp : boolean = false;
  datingApp : boolean = false;
  beautyApp : boolean = false;
  hotelApp : boolean = false;
  taxiBookingApp : boolean = false;
  eventBookingApp : boolean = false;
  restaurantApp : boolean = false;
  isAdvanceFeatures: boolean = false;
  isCustomer: boolean = true;
  isUser: boolean = true;
  isEventManager: boolean = false;
  isAdmin: boolean = false;
  isRestaurant: boolean = false;
  isProvider: boolean = false;
  isAgent: boolean = false;
  isDeliveryPartner: boolean = false;
  isVendor: boolean = false;
  isTeacher: boolean = false;
  isLearner: boolean = true;
  isBank: boolean = false;
  isDriver: boolean = false;

  constructor(private router: Router) {
    this.isMainSolution = this.router.url === '/solutions';
    this.groceryApp = this.router.url === '/grocery-delivery-app-development';
    this.foodDeliveryApp = this.router.url === '/food-delivery-app-development';
    this.onDemandApp = this.router.url === '/on-demand-app-development'
    this.fashionECommerceApp = this.router.url === '/fashion-ecommerce-app-development'
    this.digitalWalletApp = this.router.url === '/digital-wallet-development'
    this.eLearningApp = this.router.url === '/elearning-app-development'
    this.marketplaceApp = this.router.url === '/marketplace-app-development'
    this.datingApp = this.router.url === '/dating-app-development'
    this.beautyApp = this.router.url === '/salon-and-beauty-app-development'
    this.isHotelBooking = this.router.url === '/hotel-booking-app-development'
    this.taxiBookingApp = this.router.url === '/taxi-booking-app-development'
    this.eventBookingApp = this.router.url === '/event-and-ticket-booking-solutions'
    this.restaurantApp = this.router.url === '/restaurant-app-development'
     }

  ngOnInit(): void {

  }

  getAppContent(name: string) {
    this.isAdvanceFeatures = name === 'advanceFeatures';
    this.isCustomer = name === 'customer';
    this.isAdmin = name === 'admin';
    this.isBank = name === 'bank';
    this.isVendor = name === 'vendor';
    this.isTeacher = name === 'teacher';
    this.isLearner = name === 'learner';
    this.isDeliveryPartner = name === 'deliveryPartner';
    this.isAgent = name === 'agent';
    this.isProvider = name === 'provider';
    this.isDriver = name === 'driver';
    this.isRestaurant = name === 'restaurant';
    this.isUser = name === 'user';
    this.isEventManager = name === 'eventManager';
  }

}
