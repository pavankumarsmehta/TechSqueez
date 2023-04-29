import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {
  /*groceryApp: any = {
    mainSection: {
      title: `Grocery Delivery App Development Solutions`,
      description: `Gravel the opportunity of on-demand grocery delivery worldwide with the most
                viable application development solutions! As a leading grocery delivery app development company,
                MultiQoS offers on-demand grocery app development solutions to businesses looking to expand their
                grocery business. With our professional grocery app developer, you can expand your business and increase
                sales.`,
      image: `assets/image/services/images%20(1).png`
    },
    solutionInfoSection: {
      title: `Give Your Grocery Business Digital Advancement with Our Robust Grocery App Solutions!`,
      description: `MultiQoS is a team of experienced Mobile App Developers, delivering complete
            solutions in the field of quality-assured grocery app development. With a skilled Grocery App Development
            Company like us, you can now create a full-fledged grocery app that meets all of the requirements of persons
            involved in this sector. You may get into the profitable online grocery delivery market with our on-demand
            grocery delivery development solutions. With our on-demand grocery app development services, you may expand
            your business's reach. We provide custom and readymade grocery delivery app clones that are tailored to our
            clients' needs. With our world-class online grocery application development solution, we have created
            successful grocery apps for various clients in the world and have a remarkable track record of 100% service
            quality. `,
    },
    clientRequirementSection: {
      title: `Most Common Client
            Requirements`,
      description: `MultiQoS serves a diverse group of client base with a global
              reputation. Online grocery shopping has become a way of life, with each customer having a basic grocery
              product application installed on their mobile device, pressed for time and value convenience. `,
      columns: [
        {
          image: `assets/image/services/images%20(1).png`,
          title: `Interactive UI/UX`,
          description: `Our online grocery delivery app development eases up the operational segment, allowing acceleration
                  of transactions with engaging and user friendly UI/UX.`
        },
        {
          image: `assets/image/services/images%20(1).png`,
          title: `Experienced Professionals`,
          description: `Our Grocery Delivery App Development team strives to provide cutting-edge grocery app solutions to
                  meet the specialized demands of the industry.`
        },
        {
          image: `assets/image/services/images%20(1).png`,
          title: `Pocket-fitting Charges`,
          description: `Our agency charges a nominal grocery app development cost and targets consumers looking for exciting
                  and diverse fundamental grocery items online.`
        },
        {
          image: `assets/image/services/images%20(1).png`,
          title: `On-time Delivery`,
          description: `We understand the importance of delivering the given project in stipulated time with all the
                  necessary functionalities and ensuring zero bugs in the application.`
        }
      ]
    },
    letDiscuss: {
      image: `assets/image/general/general-1.jpg`,
      title: `Kickstart Your Business with Our Tech Experts.`,
      description: `We deliver end-to-end grocery app development solutions. Get a free quote on
                grocery app development. `

    },
    ourOnlineLearning: {
      title: `Our Grocery Delivery App Solutions for Different Business Models`,
      description: `We strive to provide cutting-edge grocery app solutions to meet the
                specialized demands of the food and grocery industries. Our e-Commerce marketplace developers can help
                you make your business idea a success. If you are looking to develop an app for any grocery sellers,
                grocery items, or deliver on-demand grocery delivery solutions, you must certainly connect with the best
                Grocery Delivery App Development Company.`,
      ourOnlineLearningCard: [
        {
          image: `assets/image/general/general-1.jpg`,
          title: `Grocery Business Chains`,
          description: `Artificial intelligence has been integrated into grocery
              retail, allowing it to use that data to make faster, more accurate assessments.`,
        },
        {
          image: `assets/image/general/general-1.jpg`,
          title: `Grocery Markets`,
          description: `This software allows users to keep track of shopping lists from several shops as well as an activity linked to a given chore.`,
        },
        {
          image: `assets/image/general/general-1.jpg`,
          title: `Single Grocery Stores`,
          description: `Enabling grocery shopping anytime, anywhere, along with the
              hassle-free delivery system to the user's doorstep at their preferred time.`,

        }
      ]
    },
    groceryAppSection: {
      title: ``,
      description: ``,
      groceryList: [
        {
          image: `assets/image/general/general-1.jpg`,
          title: `eCommerce Grocery Shopping`
        },
        {
          image: `assets/image/general/general-1.jpg`,
          title: `Online Inventory Management`
        },
        {
          image: `assets/image/general/general-1.jpg`,
          title: `Online Order Management`
        },
        {
          image: `assets/image/general/general-1.jpg`,
          title: `Direct to Home Delivery`
        },
        {
          image: `assets/image/general/general-1.jpg`,
          title: `Vegetable &amp; Fruit Delivery App`
        },
        {
          image: `assets/image/general/general-1.jpg`,
          title: `Warehouse Management`
        },
        {
          image: `assets/image/general/general-1.jpg`,
          title: `Online Grocery Store Software`
        },
        {
          image: `assets/image/general/general-1.jpg`,
          title: `Grocery Marketplace App`
        },
        {
          image: `assets/image/general/general-1.jpg`,
          title: `Supermarket Grocery Delivery App`
        },

      ]
    },
    keyFeatures: {
      title: ``,
      description: ``,
      adminApp: [
        {
          image: `assets/image/general/general-1.jpg`,
          title: ``,
          description: ``
        },
        {
          image: `assets/image/general/general-1.jpg`,
          title: ``,
          description: ``
        },
        {
          image: `assets/image/general/general-1.jpg`,
          title: ``,
          description: ``
        },
        {
          image: `assets/image/general/general-1.jpg`,
          title: ``,
          description: ``
        },
        {
          image: `assets/image/general/general-1.jpg`,
          title: ``,
          description: ``
        },
        {
          image: `assets/image/general/general-1.jpg`,
          title: ``,
          description: ``
        },
      ]




    }
  }*/
  /*foodDeliveryApp: any = {}
  onDemandApp: any = {}
  fashionECommerceApp: any = {}
  digitalWalletApp: any = {}
  eLearningApp: any = {}
  marketplaceApp: any = {}*/
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
