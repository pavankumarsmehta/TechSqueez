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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `pavan`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            }
          ]
        }

      ]
    },
    faqSection: [
      {
        id: 1,
        question: `hire-developer`,
        answer: `Hire IOS developer`,
      }
    ]

  };
  hireIOSDev = {
    name: 'fullstack-developer',
    serviceHead: {
      title: 'Hire IOS Developers',
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `pavan`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            }
          ]
        }

      ]
    },
    faqSection: [
      {
        id: 1,
        question: `hire-developer`,
        answer: `Hire IOS developer`,
      }
    ]

  };
  hireAndroidDev = {
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `pavan`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            }
          ]
        }

      ]
    },
    faqSection: [
      {
        id: 1,
        question: `hire-developer`,
        answer: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `pavan`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            }
          ]
        }

      ]
    },
    faqSection: [
      {
        id: 1,
        question: `hire-developer`,
        answer: `Hire IOS developer`,
      }
    ]

  };
  hireFrontEndDev = {
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `pavan`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            }
          ]
        }

      ]
    },
    faqSection: [
      {
        id: 1,
        question: `hire-developer`,
        answer: `Hire IOS developer`,
      }
    ]

  };
  hireBackEndDev = {
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `pavan`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
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
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            },
            {
              image: 'assets/image/services/app-devlopment.webp',
              link: `hire-developer`,
              title: `Hire IOS developer`,
            }
          ]
        }

      ]
    },
    faqSection: [
      {
        id: 1,
        question: `hire-developer`,
        answer: `Hire IOS developer`,
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
