import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-hire-developer',
  templateUrl: './hire-developer.component.html',
  styleUrls: ['./hire-developer.component.scss']
})
export class HireDeveloperComponent implements OnInit {
  hireFlutterDev = {
    name: 'fullstack-developer',
    serviceHead: {
      title: 'Hire Flutter App Developers',
      description: `Dedicated flutter app developers for hire that help you in building visually stunning applications using an open-source technology by Google. Our Flutter developers for hire are experienced cross-platform building applications using the Dart programming language.

      `,
      serviceHeroImage: 'assets/image/services/app-devlopment.webp',
    },
    hireAboutSection: {
      title: 'Dedicated Flutter App Developers for Hire',
      description: `Google Flutter is raising the storm in about every industry. The open-source, cross-platform mobile app development framework works best for native iOS, Android, and Web application development. With support for desktop apps, flutter app development uses a single codebase to build a cross-platform application that is speedy, high-performing, and visually stunning. Hire Flutter programmers that are experienced in building cross-platform app development for speedy applications. We make sure the applications are of top-notch quality; it helps you in increasing your return on investment. Use the framework to code once and deliver a consistent experience across any device. Responsive and functionally rich applications are ensured by our flutter developers for hire.`
    },
    whyListMain: {
      title: `How Hiring Flutter Developers Will Help to Build Flexible & Interactive Native Apps?`,
      description: `Flutter has left people awe-struck. It is one of the finest technologies that is inspiring the IT domain to develop quality-driven applications. Here are a few things that flutter development can give you.`,
      image: 'assets/image/services/app-devlopment.webp',
      whyListInner: [
        {title: `Google open source technology`},
        {title: `Reusable piece of code`},
        {title: `Well-structured frameworks`},
        {title: `Ready-made widgets`},
        {title: `Guaranteed long-term support`},
        {title: `Simple Dart language`},
        {title: `No XML Files needed`},
        {title: `Better performance`},
        {title: `Large development community`},
        {title: `Faster UI coding`},
      ]
    },
    hireServiceMain: {
      title: `Our Flutter Development Services`,
      description: `Hire Flutter app developers to build and deploy a scalable application that offers unparalleled user experience over cross-platform applications. Hire dedicated flutter developers that are experienced in building native-like app experience over multiple devices. We deliver you diverse app solutions leveraging the revolutionary and quality-driven framework.`,

      image: 'assets/image/services/app-devlopment.webp',
      serviceItems: [
        {
          id: 1,
          title: `Custom Flutter App Development`,
        },
        {
          id: 2,
          title: `API Development and Integration`
        },
        {
          id: 3,
          title: 'Platform Migration to Flutter'
        },
        {
          id: 4,
          title: `Flutter Enterprise App`
        },
        {
          id: 5,
          title: `Intuitive And Flexible User Interface`
        },
        {
          id: 6,
          title: `Cross-Platform App Development`
        },
        {
          id: 7,
          title: `Support and Maintenance`
        }, {
          id: 8,
          title: `Flutter App Consulting`
        }
      ]
    },

    hiringModel: {
      title: `Our Hiring Models`,
      description: `Flutter is a relatively new technology. Having said that, there are not years of expertise you can find the developers unless you know where to look for them. MultiQoS offers you a globally trusted platform where you can hire flutter app developers easily as per the project requirements.`,
      fullTimeImage: 'assets/images/hire-developer/fulltime.svg',
      partTimeImage: 'assets/images/hire-developer/parttime.svg',
      hrsImage: 'assets/images/hire-developer/hrs.svg',

    },
    whyHireMain: {
      title: `Why Hire Flutter Developer from TechSqueez?`,
      serviceCardDetails: [
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Real Experience`,
          description: `We have been building flutter applications since the launch of the technology.`
        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Proven Knowledge`,
          description: `We have proven technical skill sets in the Dart programming language to build amazing applications.`
        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Community`,
          description: `Being a platform by Google, you can place trust in the community and the quality of solutions.`
        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Native Development Background`,
          description: `Though Flutter is a cross-platform application, it requires native-like experience to develop high-end app experiences.`

        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Test-Driven Development`,
          description: `Quality-driven app development comes from our quality assurance team that thoroughly checks the product before handing it over.`

        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Automation Tools`,
          description: `The use of tools that helps in reducing developer efforts assures the quality of development and provides you swift development of applications.          `

        }
      ]

    },
    hireDeveloperByTech: {
      title: `Dedicated Developers to Hire`,
      description: `Technology is one of our biggest suites, we specialize in a modern development technology stack for
            software, web, and mobile app development tools and technologies.`,

      techData: [
        {
          id: 1,
          buttonTitle: 'Mobile',
          buttonContent: [
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-ios-app-developers`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire Android  developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire React Native developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire Flutter App developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire Mobile App developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire Cross Platform App developer`,
            }
          ]
        },
        {
          id: 2,
          buttonTitle: 'Frontend',
          buttonContent: [
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-ios-app-developers`,
              title: `Hire Front-End developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire ReactJS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire Angular developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire VueJS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire Web developer`,
            }
          ]
        },
        {
          id: 3,
          buttonTitle: 'Backend',
          buttonContent: [
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-ios-app-developers`,
              title: `Hire Full Stack developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire Backend  developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire NodeJS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire Laravel Developers`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire GoLang  developer`,
            }
          ]
        },
        {
          id: 4,
          buttonTitle: 'CMS & Ecommerce',
          buttonContent: [
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-ios-app-developers`,
              title: `Hire E-commerce developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire Wordpress developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire CMS developer`,
            }
          ]
        },
        {
          id: 5,
          buttonTitle: 'Design',
          buttonContent: [
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-ios-app-developers`,
              title: `Hire UI/UX developer`,
            }
          ]
        }

      ]
    },
    faqSection: [
      {
        id: 1,
        question: `What is Flutter app development?`,
        answer: `Flutter is a programming framework that uses dart language. It is an open-source technology and is widely used for cross-platform app development. It is developed and launched by Google and can be used for applications for Android and iOS platforms. It uses a single code base to build native, high-performing applications.`,
      }, 
      {
        id: 2,
        question: `What are some of the apps that use Flutter technology?`,
        answer: `Some of the most popular applications that use Flutter technology are Google Ads, Xianyu, Reflectly, Brich Finance, Hamilton, and other brands. It is a widely trusted technology, and it is powering a number of other mobile applications.`,
      },
       {
        id: 3,
        question: `Which is a better technology: React Native or Flutter?`,
        answer: `React native is another technology that is widely trusted for cross-platform app development. React natives uses a technical bridge to be able to interact with the underlying OS, but Flutter is used for native app development and does not need any bridge to provide a good user experience. Since, React Native was launched way before Flutter, the community support for React Native is much larger than Flutter, but even with that, Flutter is no less in any manner. Also, React Native has CodePush, which allows you to make minor changes in the application easily without having to submit the application again and again to the app store.`,
      },
      {
        id: 4,
        question: ` How does Flutter help you reduce the development cost?`,
        answer: `Flutter is a cross-platform app development platform that uses single code for building multiple applications for different operating systems. Each app built on Flutter renders a native-like app experience, and this helps you in reducing your application cost. The cost gets reduced in the testing process, the development time is reduced significantly, and you don’t have to manage two different applications simultaneously. This is the biggest reason why the cost of development is reduced significantly.`,
      },
      {
        id: 5,
       question: ` Can I use Flutter in my existing application?`,
        answer: `Yes, you can easily use Flutter to build new modules for your existing applications for android and ios platforms. Share your project with us, and we would help you in analyzing the right way to integrate Flutter-based elements into the applications.`,
      }
    ]

  };
  hireIOSDev = {
    name: 'fullstack-developer',
    serviceHead: {
      title: 'Hire IOS Developers',
      description: `iOS app development services by a leading mobile app development company, at MultiQoS, you can find answers to your app development needs by hiring iPhone app developers with 5+ years of experience.`,
      serviceHeroImage: 'assets/image/services/app-devlopment.webp',
    },
    hireAboutSection: {
      title: 'Hire Dedicated iOS App Developers',
      description: `With more than 10+ years of experience in developing iOS applications for devices such as iPhone, iPad, and now venturing into the wearable and Apple TV market, we are industry’s one of the most innovative iOS application development company. We have years of experience in building feature-rich applications that are high-performing and meet the needs of the Apple app standards. Leverage our end-to-end iOS development services and hire iPhone app developer that can help you achieve your business goals. You can hire iOS app developers based on your project needs; our flexible hiring model allows you to hire them on an hourly, part-time and full-time basis.`
    },
    whyListMain: {
      title: `How Hiring iOS App Developers Will Help to Build a Result-Oriented App?`,
      description: `Hire dedicated iOS app developers from MultiQoS where our developers put their undivided attention on your project and needs. We offer you futuristic development of applications incorporated with modern solutions such as AI, ML, AR, VR, Cloud, etc. we help you meet your business goals easily.`,
      image: 'assets/image/services/app-devlopment.webp',
      whyListInner: [
        {title: `Enhanced Security`},
        {title: `Stronger Brand Value`},
        {title: `Filtered Audience`},
        {title: `Better Scalability`},
        {title: `Better Customer experience`},
        {title: `Aesthetic Design`},
        {title: `Helps capture international market`},
        {title: `Higher Return on Investment`},
        {title: `Secure Transactions`},
        {title: `Flexible User Interface`},
      ]
    },
    hireServiceMain: {
      title: `Our iOS App Development Services`,
      description: `iPhone app developers for hire with 15+ industry experience and 5+ years of experience in leading iOS app development technology. We do in-house research on your competitors and market to provide you amazing solutions to meet your industry needs and customer expectations.`,

      image: 'assets/image/services/app-devlopment.webp',
      serviceItems: [
        {
          id: 1,
          title: `Custom app development`,
        },
        {
          id: 2,
          title: `App technology Consulting`
        },
        {
          id: 3,
          title: 'Hybrid app development'
        },
        {
          id: 4,
          title: `Native App Development`
        },
        {
          id: 5,
          title: `Wearable App Development`
        },
        {
          id: 6,
          title: `Digital transformation`
        },  {
          id: 7,
          title: `App integration`
        },  {
          id: 8,
          title: ` Upgradation and Migration`
        },  {
          id: 9,
          title: `QA and Testing Services`
        }
      ]
    },

    hiringModel: {
      title: `Our Hiring Models`,
      description: `MultiQoS is a leading iOS app development company. We offer you a flexible hiring model which allows you to hire dedicated iphone developer as per the need of the project. You can manage your team easily with us and scale up or down anytime in the process.`,
      fullTimeImage: 'assets/images/hire-developer/fulltime.svg',
      partTimeImage: 'assets/images/hire-developer/parttime.svg',
      hrsImage: 'assets/images/hire-developer/hrs.svg',

    },
    whyHireMain: {
      title: `Why hire iPhone Application Developers From TechSqueez?`,
      serviceCardDetails: [
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Enhanced Efficiency`,
          description: `We use modern technology that gives us an opportunity to develop and test applications with superior efficiency.`
        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Future-proof Applications`,
          description: `iPhone app programmers for hire that offer you innovative solutions such as AI, ML, AR, VR, Chatbots, etc.`

        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Hassle-free procedure`,
          description: `We help you in removing the obstacles as much as possible by offering you a hassle-free process.          `
        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Deployment Services`,
          description: `Apart from the development, designing, testing, and maintenance services, we also offer you to deploy it on AppStore.`

        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Cost-effective Maintenance`,
          description: `Contact our customer executive team anytime for the maintenance of the applications built by us.          `

        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Innovate & Compete`,
          description: `Our in-depth research and understanding of the industry give us a sharper edge in building innovative solutions.`

        }
      ]

    },
    hireDeveloperByTech: {
      title: `Dedicated Developers to Hire`,
      description: `Technology is one of our biggest suites, we specialize in a modern development technology stack for
            software, web, and mobile app development tools and technologies.`,

            techData: [
              {
                id: 1,
                buttonTitle: 'Mobile',
                buttonContent: [
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-ios-app-developers`,
                    title: `Hire IOS developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Android  developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire React Native developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Flutter App developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Mobile App developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Cross Platform App developer`,
                  }
                ]
              },
              {
                id: 2,
                buttonTitle: 'Frontend',
                buttonContent: [
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-ios-app-developers`,
                    title: `Hire Front-End developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire ReactJS developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Angular developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire VueJS developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Web developer`,
                  }
                ]
              },
              {
                id: 3,
                buttonTitle: 'Backend',
                buttonContent: [
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-ios-app-developers`,
                    title: `Hire Full Stack developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Backend  developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire IOS developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire NodeJS developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Laravel Developers`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire GoLang  developer`,
                  }
                ]
              },
              {
                id: 4,
                buttonTitle: 'CMS & Ecommerce',
                buttonContent: [
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-ios-app-developers`,
                    title: `Hire E-commerce developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Wordpress developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire CMS developer`,
                  }
                ]
              },
              {
                id: 5,
                buttonTitle: 'Design',
                buttonContent: [
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-ios-app-developers`,
                    title: `Hire UI/UX developer`,
                  }
                ]
              }
      
            ]
    },
    faqSection: [
      {
        id: 1,
        question: `What are the different types of mobile app development services you offer?`,
        answer: `You can hire mobile app developers with more than 5 years of experience in leading technologies; we offer you native app development, cross-platform app development, and hybrid app development services.`,
      },
      {
        id: 2,
        question: `What is the cost of IOS app development at TechSqueez?`,
        answer: `The cost of the development of the iOS application depends on the project scope. Once you share your project with us, we would help you in identifying the needs of the project, such as features, functionalities, technology, and the time and resources required to build it. This would help us in estimating the cost of iOS app development.`,
      },
      {
        id: 3,
        question: `Will you provide me the source code of the application?`,
        answer: `Yes, we provide you the source code of the application. It would give you complete ownership of the product, and you can use it to make any customizations to the product or take any big decision such as a merger, acquisition, selling, etc.`,
      },
      {
        id: 4,
        question: `Once the app development is completed, what are the after-sales services you offer?`,
        answer: `We provide you extended software protection plans. This allows you to make any changes to the mobile application and get instant assistance in case you experience any problem with the application.`,
      },
      {
        id: 5,
        question: `Can I build my preferred development team for the iOS development project?`,
        answer: `Yes, you can select the resources personally as per the preference and requirement. Our mobile application development agency would provide you the resumes of selected programmers as per the project scope, and you can personally interview them to select the right resources.`,
      }
    ]

  };
  hireAndroidDev = {
    name: 'Hire Full Stack App Developers',
    serviceHead: {
      title: 'Hire Android Developers',
      description: `Hire the industry’s best minds for the development of modern-day Android applications for devices of varying screen sizes. As a leading Android app development company, we have android app developers for hire for wearables, Android TV, tablets, etc.`,
      serviceHeroImage: 'assets/image/services/app-devlopment.webp',
    },
    hireAboutSection: {
      title: 'Hire Dedicated Android Developer',
      description: `Being a top-notch Android app development company means providing you the best solutions. And that is ensured by our highly seasoned resources. Find android developers for hire with proficiency in leading mobile app development technologies and frameworks. With us, you can hire Android app programmer with 5+ years of experience in developing top-rated mobile applications. Our developers have in-depth industry knowledge of more than 15 leading industries, including retail, healthcare, education, and more. You can hire android application developers on a part-time, full-time, and hourly basis through our flexible hiring model. With our experience and knowledge, we are sure we would become a great technology partner in your business journey.`
    },
    whyListMain: {
      title: `How Hiring Android Developers Will Help to Develop Dynamic and Cutting-Edge Applications?`,
      description: `Being one of the two leading platforms in the market, Android is giving some huge competition to the iOS market. When it comes to choosing what platform you want to tap for a wider market reach, here are all the reasons Android is a must-have.Hire dedicated iOS app developers from MultiQoS where our developers put their undivided attention on your project and needs. We offer you futuristic development of applications incorporated with modern solutions such as AI, ML, AR, VR, Cloud, etc. we help you meet your business goals easily.`,
      image: 'assets/image/services/app-devlopment.webp',
      whyListInner: [
        {title: `A wider pool of customers`},
        {title: `Easier SEO`},
        {title: `Good Development Resources`},
        {title: `Greater innovative potential`},
        {title: `Lower Development Cost`},
        {title: `Easier Installations`},
        {title: `Perfect for Startups`},
        {title: `Compatible with more devices`},
        {title: `Custom ROMs`},
        {title: `Easier market entry`},
      ]
    },
    hireServiceMain: {
      title: `Our Android App Development Services`,
      description: `Hire Android App Programmer that provides you skillful development of innovative applications that run seamlessly over Android devices – irrespective of device brand, Android version, and screen sizes. Check out our Android app development services`,

      image: 'assets/image/services/app-devlopment.webp',
      serviceItems: [
        {
          id: 1,
          title: `Android App Development & Design`,
        },
        {
          id: 2,
          title: `Ecommerce Development`
        },
        {
          id: 3,
          title: 'Enterprise App Development'
        },
        {
          id: 4,
          title: `AI App Development`
        },
        {
          id: 5,
          title: `Wearable App Development`
        },
        {
          id: 6,
          title: `On-demand App Development`
        }, {
          id: 7,
          title: `Enterprise Mobility Management`
        },
        {
          id: 8,
          title: `QA & Testing`
        }
      ]
    },

    hiringModel: {
      title: `Our Hiring Models`,
      description: `TechSqueez believes in making the journey as easy as possible for people to get technologically transformed, and for this, we have maxed our efforts in making hiring easy. Hire Android app developers at cost-effective rates only at TechSqueez.`,
      fullTimeImage: 'assets/images/hire-developer/fulltime.svg',
      partTimeImage: 'assets/images/hire-developer/parttime.svg',
      hrsImage: 'assets/images/hire-developer/hrs.svg',

    },
    whyHireMain: {
      title: `Why Hire Android App Programmer from TechSqueez?`,
      serviceCardDetails: [
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `App Discovery`,
          description: `We do our in-depth market research to help identify the modern development trends in your industry and help you get a competitive edge in the market with the right solutions.`
        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Robust Architecture`,
          description: `We make sure the architecture of the application is robust; this helps in uncomplicating the application and improves the performance of the product.`

        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Agile Development Methodology`,
          description: `We use modern development practices that help in developing applications faster and ensure on-time delivery of the projects.`
        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Wider market reach`,
          description: `Hire Android application developers and cross-platform app developers with 5+ years of experience. More platforms equal more reach, and a wider market is tapped.`

        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Post Launch Maintenance`,
          description: `Facing any problem with our built Android application? Connect with our customer executives, and we are ready to help you maintain your application at top-notch quality.`

        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Play store submission`,
          description: `We help you with the deployment of the application to the Google Play Store. This way, you would not have to deal with the technicalities and sail easily.`

        }
      ]

    },
    hireDeveloperByTech: {
      title: `Dedicated Developers to Hire`,
      description: `Technology is one of our biggest suites, we specialize in a modern development technology stack for
            software, web, and mobile app development tools and technologies.`,

     
            techData: [
              {
                id: 1,
                buttonTitle: 'Mobile',
                buttonContent: [
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-ios-app-developers`,
                    title: `Hire IOS developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Android  developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire React Native developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Flutter App developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Mobile App developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Cross Platform App developer`,
                  }
                ]
              },
              {
                id: 2,
                buttonTitle: 'Frontend',
                buttonContent: [
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-ios-app-developers`,
                    title: `Hire Front-End developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire ReactJS developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Angular developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire VueJS developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Web developer`,
                  }
                ]
              },
              {
                id: 3,
                buttonTitle: 'Backend',
                buttonContent: [
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-ios-app-developers`,
                    title: `Hire Full Stack developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Backend  developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire IOS developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire NodeJS developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Laravel Developers`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire GoLang  developer`,
                  }
                ]
              },
              {
                id: 4,
                buttonTitle: 'CMS & Ecommerce',
                buttonContent: [
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-ios-app-developers`,
                    title: `Hire E-commerce developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Wordpress developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire CMS developer`,
                  }
                ]
              },
              {
                id: 5,
                buttonTitle: 'Design',
                buttonContent: [
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-ios-app-developers`,
                    title: `Hire UI/UX developer`,
                  }
                ]
              }
      
            ]
    },
    faqSection: [
      {
        id: 1,
        question: `Will we sign an NDA to keep the app idea confidential?`,
        answer: `Yes, we sign an NDA with your company before commencing the development process. This gives you an advantage and secures your app idea to several notches.`,
      },
      {
        id: 2,
        question: `How do you allocate the resources for my app development?`,
        answer: `We do our in-depth market research of your industry; this includes advanced competitor research, trends, technology stack and more. Once we have a clear idea of how we can make your app development more worthwhile, we would help you in identifying the features, technology, and functionality that are needed for faster market penetration.`,
      },
      {
        id: 3,
        question: `What tools and technology do you use for Android App Development?`,
        answer: `Android is one of the most dynamic fields currently, and every day new technology and tools emerge. Being in the industry for several years, we have worked with some reliable tools such as Android Studio, AVD Manager, ADB, Eclipse, Genymotion, GameMaker: Studio, Fabric, and more.`,
      },
      {
        id: 4,
        question: `How will you assist me with the app submission to the Google Play Store`,
        answer: `We provide you with an end-to-end Android app development solution, which includes consultation and deployment. We will upload your Android application to the Google Play Store once you approve it.`,
      },
      {
        id: 5,
        question: `How much does Android app development cost?`,
        answer: `The cost of Android app development varies depending on various factors such as App features, team size, location of the agency, and technology in use. You can share your project with our technology experts to get a free cost estimation.`,
      }
    ]

  };
  hireFullStackDev = {
    name: 'fullstack-developer',
    serviceHead: {
      title: 'Hire Full Stack Developers',
      description: `Full Stack developers for hire that help you in developing any type of web,
              mobile, and desktop applications. We provide you end-to-end full stack development services, hire
              developers with exceptional technical and soft skills today just at TechSqueez.`,
      serviceHeroImage: 'assets/image/services/app-devlopment.webp',
    },
    hireAboutSection: {
      title: 'Hire Dedicated Full Stack Developer',
      description: `Hire Full Stack Web developer and Mobile developer at TechSqueez. We are a leading Full Stack development
          company with dedicated resources having experience with different software development stages, servers,
          APIs, MVC, databases, hosting environments, and more. Our years of experience and knowledge, combined with
          industry experience, gives us a sharper edge in the technology domain. With more than 100+ projects
          successfully completed, we believe in simplifying technology for you and provide you code quality,
          performance, better user experience, and modern solutions. You can hire developers on a full-time,
          part-time, and hourly basis from TechSqueez.`
    },
    whyListMain: {
      title: `How Hiring Full Stack Developers Will Help to Build Reliable and Efficient Applications?`,
      description: `Hire Full Stack programmer with unprecedented skills to work and develop both the front and back end of
          the web and mobile applications with a dependable technology stack. Here is how it can benefit you.`,
      image: 'assets/image/services/app-devlopment.webp',
      whyListInner: [
        {title: `Competent partnership`},
        {title: `Additional Skills`},
        {title: `Multiple Proficiency`},
        {title: `Effective Troubleshooting`},
        {title: `Cheaper Solution for Better Result`},
        {title: `Wider View`},
        {title: `Flexibility`},
        {title: `User-friendly approach`},
        {title: `All-in-one Solution`},
        {title: `High responsibility level`},
      ]
    },
    hireServiceMain: {
      title: `Our Full Stack Development Services`,
      description: `TechSqueez specializes in a full range of
            technologies, including frontend prototyping, backend development, database management, etc. As a
            globally recognized full stack development company, we offer you an extensive understanding and
            experience of creating full-fledged applications.`,

      image: 'assets/image/services/app-devlopment.webp',
      serviceItems: [
        {
          id: 1,
          title: `Full Stack Web Hosting`,
        },
        {
          id: 2,
          title: `Full Stack API Development`
        },
        {
          id: 3,
          title: 'Full Stack CMS Development'
        },
        {
          id: 4,
          title: `Full Stack Ecommerce Development`
        },
        {
          id: 5,
          title: `Full Stack Integration`
        },
        {
          id: 6,
          title: `Full Stack Migration and porting`
        }
      ]
    },

    hiringModel: {
      title: `Our Hiring Models`,
      description: `At TechSqueez, we provide you a range of full
            stack development solutions powered by tools and frameworks such as Node.JS, Rapid.JS, Full Stack
            Express, MongoDB, Angular JS, React, jQuery, and more. Hire dedicated full stack developer from us and
            experience the power of technology at its fullest.`,
      fullTimeImage: 'assets/images/hire-developer/fulltime.svg',
      partTimeImage: 'assets/images/hire-developer/parttime.svg',
      hrsImage: 'assets/images/hire-developer/hrs.svg',

    },
    whyHireMain: {
      title: `Why Hire Full Stack Programmer from TechSqueez?`,
      serviceCardDetails: [
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Pay only for the measurable work`,
          description: `Hire dedicated resources on an hourly basis and pay only for the measurable work done – more control over the budget.`
        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Build your team`,
          description: `Hire full stack web developers after thoroughly interviewing them. We offer you the best available resources that match your project needs.`

        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Out-of-the-box Solutions`,
          description: `We help you in building a wide range of software solutions, including ERP, CRM, CMS, SaaS, etc.`
        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `First time right`,
          description: `We are obsessed with quality, and customer satisfaction is our priority, we believe in delivering you only what you expect from us.`

        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Complete In-house development`,
          description: `We are a full-grown team of experts, and we do everything in-house. We don’t outsource anything to freelancers.`

        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Guaranteed Results`,
          description: `We guarantee you the best results with our code quality and innumerable measures we take to deliver you the best.`

        }
      ]

    },
    hireDeveloperByTech: {
      title: `Dedicated Developers to Hire`,
      description: `Technology is one of our biggest suites, we specialize in a modern development technology stack for
            software, web, and mobile app development tools and technologies.`,


            techData: [
              {
                id: 1,
                buttonTitle: 'Mobile',
                buttonContent: [
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-ios-app-developers`,
                    title: `Hire IOS developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Android  developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire React Native developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Flutter App developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Mobile App developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Cross Platform App developer`,
                  }
                ]
              },
              {
                id: 2,
                buttonTitle: 'Frontend',
                buttonContent: [
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-ios-app-developers`,
                    title: `Hire Front-End developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire ReactJS developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Angular developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire VueJS developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Web developer`,
                  }
                ]
              },
              {
                id: 3,
                buttonTitle: 'Backend',
                buttonContent: [
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-ios-app-developers`,
                    title: `Hire Full Stack developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Backend  developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire IOS developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire NodeJS developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Laravel Developers`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire GoLang  developer`,
                  }
                ]
              },
              {
                id: 4,
                buttonTitle: 'CMS & Ecommerce',
                buttonContent: [
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-ios-app-developers`,
                    title: `Hire E-commerce developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire Wordpress developer`,
                  },
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-developer`,
                    title: `Hire CMS developer`,
                  }
                ]
              },
              {
                id: 5,
                buttonTitle: 'Design',
                buttonContent: [
                  {
                    image: 'assets/image/services/app-devlopment.webp',
                    link: `hire-ios-app-developers`,
                    title: `Hire UI/UX developer`,
                  }
                ]
              }
      
            ]
    },
    faqSection: [
      {
        id: 1,
        question: `Benefits of hiring a full stack developer from TechSqueez?`,
        answer: `When you hire a full stack developer, we provide you on-time delivery, a strict non-disclosure agreement, no contract lock-in, and we provide you an opportunity to work with developers with experience and expertise in leading full stack technologies.`,
      },
      {
        id: 2,
        question: `What are the leading full-stack development technologies that you work with?`,
        answer: `We offer you MEAN, MERN full-stack development services. In addition to this, we also have expertise in mobile and web development technologies such as native iOS and Android app development, including hybrid app development. In web development, we have expertise in PHP, Python, Magento, Laravel, Node.JS, and Angular.JS.`,
      },
      {
        id: 3,
        question: `How do I ensure the quality of full stack developer?`,
        answer: `All our MEAN and MERN stack developers are trained and are certified developers. We make sure of the quality by periodically training them for the new development practices, new technologies, etc.`,
      },
      {
        id: 4,
        question: `Will the hired full stack developer work dedicatedly on your project?`,
        answer: `Yes, you can hire dedicated resources from TechSqueez, where our resources would dedicatedly work on your project.`,
      },
      {
        id: 5,
        question: `What is the difference between frontend, backend, and full stack development?`,
        answer: `Frontend of the web application is the part of what the user sees and interacts with. It is build using CSS, HTML, and JavaScript. Backend development refers to the server-side of the application. This would include PHP, Ruby, Python, etc. People that specialize in both backend and frontend development are referred to as Full-stack developers.`,
      }
    ]

  };
  hireFrontEndDev = {
    name: 'fullstack-developer',
    serviceHead: {
      title: 'Hire Frontend Developers',
      description: `Hire Team of Frontend Developers that put their technical skills to offer you the best solutions to make your website experience awe-inspiring.`,
      serviceHeroImage: 'assets/image/services/app-devlopment.webp',
    },
    hireAboutSection: {
      title: 'Hire Dedicated frontend Developer',
      description: `Hire frontend programmers with knowledge and experience to build websites and applications that provide unparalleled user experience all throughout the product. We use modern-day technology and development practices that empower us to build web applications that have seamless navigation, rich visual elements, and a bug-free experience. As a full-grown web and mobile app development company, you can hire a team of frontend developers along with backend developers to build feature-rich websites and applications.`
    },
    whyListMain: {
      title: `How Hiring Frontend Developers Will Help to Deliver Responsive Applications?`,
      description: `Frontend development is equally important as backend development. It also defines the performance of the application and websites and how it is going to engage the users over time and benefit your business. We provide you best frontend developers for hire that can provide you with the following benefits.`,
      image: 'assets/image/services/app-devlopment.webp',
      whyListInner: [
        {title: `Faster experience`},
        {title: `User-driven Approach`},
        {title: `Makes navigation easy`},
        {title: `Interactive designing`},
        {title: `SEO-friendliness`},
        {title: `Visually Stunning`},
        {title: `Better Performance`},
        {title: `Mobile-friendliness`},
        {title: `Responsive Design`},
      ]
    },
    hireServiceMain: {
      title: `Our Frontend Development Services`,
      description: `Frontend developers for hire that help you in building amazing web and mobile app experiences that make navigation intuitive and engage your users for a longer time. We have made hiring front developers easier for you through our flexible engagement model.`,

      image: 'assets/image/services/app-devlopment.webp',
      serviceItems: [
        {
          id: 1,
          title: `UI / UX Designing`,
        },
        {
          id: 2,
          title: `Interactive Prototyping`
        },
        {
          id: 3,
          title: 'Front-end Engineering'
        },
        {
          id: 4,
          title: `UI Integration`
        },
        {
          id: 5,
          title: `Revamping Existing Solutions`
        },
        {
          id: 6,
          title: `Frontend consultation`
        }
      ]
    },

    hiringModel: {
      title: `Our Hiring Models`,
      description: `Hire dedicated frontend developers with technical expertise in modern-day development technologies for building feature-rich websites and applications. We make sure the website and applications provide the best experience to the users.`,
      fullTimeImage: 'assets/images/hire-developer/fulltime.svg',
      partTimeImage: 'assets/images/hire-developer/parttime.svg',
      hrsImage: 'assets/images/hire-developer/hrs.svg',

    },
    whyHireMain: {
      title: `Why Hire Frontend Web Developer from TechSqueez?`,
      serviceCardDetails: [
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Flexible Hiring`,
          description: `Hire frontend web developers through our flexible engagement model, allowing you to hire only for what is required.`
        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `100% secure code authorization`,
          description: `Secure code authorization that allows you to make your application much better and secure.`

        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Premium Code Quality`,
          description: `Premium code quality that ensures bug-free experience and unparalleled user experience on your app.`
        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Skilled and Experienced Resources`,
          description: `Skilled and experienced resources with years of experience in leading web development technologies.`

        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Adherence to Timeline`,
          description: `We deliver you the product on time this is because of the modern development practices that we use.`

        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Excellent Communication Skills`,
          description: `Seamless communication between you and the team with the integration of top technology tools.`

        }
      ]

    },
    hireDeveloperByTech: {
      title: `Dedicated Developers to Hire`,
      description: `Technology is one of our biggest suites, we specialize in a modern development technology stack for
            software, web, and mobile app development tools and technologies.`,

 techData: [
  {
    id: 1,
    buttonTitle: 'Mobile',
    buttonContent: [
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-ios-app-developers`,
        title: `Hire IOS developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire Android  developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire React Native developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire Flutter App developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire Mobile App developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire Cross Platform App developer`,
      }
    ]
  },
  {
    id: 2,
    buttonTitle: 'Frontend',
    buttonContent: [
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-ios-app-developers`,
        title: `Hire Front-End developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire ReactJS developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire Angular developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire VueJS developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire Web developer`,
      }
    ]
  },
  {
    id: 3,
    buttonTitle: 'Backend',
    buttonContent: [
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-ios-app-developers`,
        title: `Hire Full Stack developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire Backend  developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire IOS developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire NodeJS developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire Laravel Developers`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire GoLang  developer`,
      }
    ]
  },
  {
    id: 4,
    buttonTitle: 'CMS & Ecommerce',
    buttonContent: [
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-ios-app-developers`,
        title: `Hire E-commerce developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire Wordpress developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire CMS developer`,
      }
    ]
  },
  {
    id: 5,
    buttonTitle: 'Design',
    buttonContent: [
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-ios-app-developers`,
        title: `Hire UI/UX developer`,
      }
    ]
  }

]
    },
    faqSection: [
      {
        id: 1,
        question: `What are the fundamental skills that TechSqueez frontend developer has?`,
        answer: `Effective technologies that are used by frontend developers are HTML, JQuery, CSS, JavaScript, experience in CMS, Knowledge of PHP, OOP, Cross browser testing, etc.`,
      },
      {
        id: 2,
        question: `How do you ensure that the website design is user-friendly?`,
        answer: `Our full-grown team of frontend developers go under brainstorming session that helps in design conceptualization. We use a user-centric approach in designing the web page and promote more engagement. We also have quality assurance tests that ensure optimal design and promise an optimized experience on the web and mobile platforms.`,
      },{
        id: 3,
        question: `What are the benefits of Coffee Script or Javascript?`,
        answer: `Some of the major benefits of Coffee Script or Javascript are: Lightweight add-ons such as Python style2 list comprehension and Ruby String Interpolation, Express the program in shorter code, Easier to execute the code`,
      },{
        id: 4,
        question: `How to optimize the webpage through frontend technologies?`,
        answer: `Improve the page quality through: Improving overall server response, Combine external app documents, Eliminate block-level JavaScript, Optimizing image and correcting image format, Use of right plugins through overall functionality, Combining external files of CSS, Using responsive design, Use CSS best practices, Load script in footer and style2 sheets in the header`,
      },
      {
        id: 5,
        question: `Do you keep me in the loop while the product is undergoing frontend development?`,
        answer: `We keep you in the loop about the progress of the product through emails, calls, and chats. We always take approval once the prototype is built. Also, we follow your feedback and aim at providing you only what was expected from us by you.`,
      }
    ]

  };
  hireBackEndDev = {
    name: 'fullstack-developer',
    serviceHead: {
      title: 'Hire Backend Developers',
      description: `Hire dedicated resources for web and mobile backend development. Hire expert backend developers that can help you in the development of secure and robust web and mobile solutions on a full-time, part-time, and hourly basis.`,
      serviceHeroImage: 'assets/image/services/app-devlopment.webp',
    },
    hireAboutSection: {
      title: 'Backend Developers for Hire',
      description: `TechSqueez is a leading backend development company in India and has worked on global products. You can hire dedicated backend developers from us and accomplish your development goals easily. Our backend developers are highly experienced at developing complex applications. We have backend developers for hire that write complex functional protocols and have exceptional hands-on experience in using the latest technologies. We can help you customize, secure, and strengthen your app architecture. We bring in more robustness in the code and make applications scalable with modern integrated solutions for web and mobile applications. Error-free code, affordable hiring, and seamless development process hiring backend developers from TechSqueez is rewarding.`
    },
    whyListMain: {
      title: `How do backend developers help your project?`,
      description: `Backend being an important part of a web and mobile application, it structures your application and defines data storage, security, and business logic. Here is how hiring backend developers from TechSqueez helps a project.`,
      image: 'assets/image/services/app-devlopment.webp',
      whyListInner: [
        {title: `Client-side development`},
        {title: `Test website usability`},
        {title: `Ensures product usability`},
        {title: `Ensures browser compatibility`},
        {title: `Works on HTML, CSS, JavaScript`},
        {title: `Frameworks: Bootstrap, AngularJS, ReactJS, Ember`},
        {title: `Responsive Design`},
        {title: `Optimize Web Presentation`},
        {title: `Integrated 3rd party APIs`},
        {title: `Database and Server Management`},
      ]
    },
    hireServiceMain: {
      title: `Our Backend Development Services`,
      description: `Hire dedicated backend developers with proven experience in developing web and mobile applications. We have highly experienced resources for hire at an economical cost. We ensure security, quality, and performance in your application with error-free code, the right technology, and development practices.`,

      image: 'assets/image/services/app-devlopment.webp',
      serviceItems: [
        {
          id: 1,
          title: `CodeIgniter Development`,
        },
        {
          id: 2,
          title: `PHP Development`
        },
        {
          id: 3,
          title: 'Node.JS Development'
        },
        {
          id: 4,
          title: `Ionic Development`
        },
        {
          id: 5,
          title: `ASP.Net Development`
        },
        {
          id: 6,
          title: `Laravel Development`
        }
      ]
    },

    hiringModel: {
      title: `Our Hiring Models`,
      description: `TechSqueez has made hiring highly easy for you to find the right backend developers for hire. We help you customize your product and use dependable technology for the development of high-end software solutions. According to business goals, we help you hire the right developers under your budget.`,
      fullTimeImage: 'assets/images/hire-developer/fulltime.svg',
      partTimeImage: 'assets/images/hire-developer/parttime.svg',
      hrsImage: 'assets/images/hire-developer/hrs.svg',

    },
    whyHireMain: {
      title: `Why Hire Backend Developer from TechSqueez?`,
      serviceCardDetails: [
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Industry Experience`,
          description: `Our dedicated developers have experience in more than 15 industries, including healthcare, education, retail, manufacturing, telecom, and more.`
        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `3rd party integrations`,
          description: `We offer you secure 3rd party integrations that improve the functionality of the app and redefine boundaries.`

        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `5+ years Experienced Developers`,
          description: `We have more than 5+ years of experienced backend developers for hire with proficiency in leading technologies.`
        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Less time to market`,
          description: `Our unprecedented attention to detail and use of modern development practices ensures the swift development of software and applications.`

        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Integrity and Transparency`,
          description: `We follow strict NDAs to ensure the safety of your app idea; this gives you an extra layer of protection from any duplicity.`

        },
        {
          image: 'assets/image/services/app-devlopment.webp',
          title: `Global Reputation`,
          description: `Hire expert backend developers from globally recognized web and mobile app development companies with proven records.`

        }
      ]

    },
    hireDeveloperByTech: {
      title: `Dedicated Developers to Hire`,
      description: `Technology is one of our biggest suites, we specialize in a modern development technology stack for
            software, web, and mobile app development tools and technologies.`,

 techData: [
  {
    id: 1,
    buttonTitle: 'Mobile',
    buttonContent: [
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-ios-app-developers`,
        title: `Hire IOS developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire Android  developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire React Native developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire Flutter App developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire Mobile App developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire Cross Platform App developer`,
      }
    ]
  },
  {
    id: 2,
    buttonTitle: 'Frontend',
    buttonContent: [
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-ios-app-developers`,
        title: `Hire Front-End developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire ReactJS developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire Angular developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire VueJS developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire Web developer`,
      }
    ]
  },
  {
    id: 3,
    buttonTitle: 'Backend',
    buttonContent: [
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-ios-app-developers`,
        title: `Hire Full Stack developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire Backend  developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire IOS developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire NodeJS developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire Laravel Developers`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire GoLang  developer`,
      }
    ]
  },
  {
    id: 4,
    buttonTitle: 'CMS & Ecommerce',
    buttonContent: [
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-ios-app-developers`,
        title: `Hire E-commerce developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire Wordpress developer`,
      },
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-developer`,
        title: `Hire CMS developer`,
      }
    ]
  },
  {
    id: 5,
    buttonTitle: 'Design',
    buttonContent: [
      {
        image: 'assets/image/services/app-devlopment.webp',
        link: `hire-ios-app-developers`,
        title: `Hire UI/UX developer`,
      }
    ]
  }

]
    },
    faqSection: [
      {
        id: 1,
        question: `Do you provide other resources than backend developers?`,
        answer: `We are a full-grown company where you can find backend/ frontend developers, designers, testers, project managers, DevOps professionals, etc. We provide you end-to-end web and mobile app development.`,
      },
      {
        id: 2,
        question: `Do you provide maintenance services?`,
        answer: `Yes, we provide you maintenance services. We ensure that the product is always of top-notch quality and is giving away an amazing experience to your users. Contact us anytime in case you experience any problem with our built product.`,
      },
      {
        id: 3,
        question: `How do I test the expertise of the TechSqueez developers?`,
        answer: `TechSqueez believes in transparency, and that shows in our efforts to make seamless communication. To test our developer’s expertise and experience, we offer you to interview our resources for informed hiring. Also, during the development process, we keep you in the loop through Skype, emails, calls, chat, and share test code to help you check the work progress and quality.`,
      },
      {
        id: 4,
        question: `What are the advantages of hiring backend developers from Techsqueez?`,
        answer: `Hiring backend developers from TechSqueez can give you a competitive edge in the market. We have experienced developers with technical and soft skills. Our in-depth knowledge of the industry also allows us to provide you modern solutions that can help you get placed amongst the leaders.`,
      },
      {
        id: 5,
        question: `How skilled backend developers can I hire from Techsqueez?`,
        answer: `You can hire backend developers with 3 to 9 years of experience in the development of the backend of the web and mobile applications. They are proficient in HTML, CSS, JavaScript, and other development frameworks. Our developers also have in-depth knowledge of server, database, and 3rd party integrations.`,
      }
    ]

  };
  activeSection: any;
  isClicked: boolean = false;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if(this.router.url === '/hire-flutter-app-developers') {
      this.activeSection = this.hireFlutterDev;
    }
    if(this.router.url === '/hire-ios-app-developers') {
      this.activeSection = this.hireIOSDev;
    }
    if(this.router.url === '/hire-android-app-developers') {
      this.activeSection = this.hireAndroidDev;
    }
    if(this.router.url === '/hire-full-stack-developer') {
      this.activeSection = this.hireFullStackDev;
    }
    if(this.router.url === '/hire-front-end-developer') {
      this.activeSection = this.hireFrontEndDev;
    }
    if(this.router.url === '/hire-back-end-developer') {
      this.activeSection = this.hireBackEndDev;
    }


  }

}
