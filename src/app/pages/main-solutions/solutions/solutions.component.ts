import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {
  groceryApp: boolean = false;
  foodDeliveryApp: boolean = false;
  onDemandApp: boolean = false;
  datingApp: boolean = false;
  fashionECommerceApp: boolean = false;
  digitalWalletApp: boolean = false;
  eLearningApp: boolean = false;
  beautyApp: boolean = false;
  marketplaceApp: boolean = false;
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

  //new added routing is pending


  hotelApp: boolean = false;
  taxiBookingApp: boolean = false;
  restaurantApp: boolean = false;
  eventBookingApp: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (this.router.url === '/grocery-delivery-app-development') {
      this.groceryApp = true;
    }
    if (this.router.url === '/food-delivery-app-development') {
      this.foodDeliveryApp = true
    }
    if (this.router.url === '/on-demand-app-development') {
      this.onDemandApp = true;
    }
    if (this.router.url === '/fashion-ecommerce-app-development') {
      this.fashionECommerceApp = true;
    }
    if (this.router.url === '/digital-wallet-development') {
      this.digitalWalletApp = true;
    }
    if (this.router.url === '/elearning-app-development') {
      this.eLearningApp = true;
    }
    if (this.router.url === '/marketplace-app-development') {
      this.marketplaceApp = true;
    }
    if (this.router.url === '/dating-app-development') {
      this.datingApp = true;
    }
    if (this.router.url === '/salon-and-beauty-app-development') {
      this.beautyApp = true;
    }
    if (this.router.url === '/hotel-booking-app-development') {
      this.hotelApp = true;
    }
    if (this.router.url === '/taxi-booking-app-development') {
      this.taxiBookingApp = true;
    }
    if (this.router.url === '/event-and-ticket-booking-solutions') {
      this.eventBookingApp = true;
    }
    if (this.router.url === '/restaurant-app-development') {
      this.restaurantApp = true;
    }

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
