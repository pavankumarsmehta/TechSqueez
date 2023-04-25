import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  isMobile: boolean = true;
  isFrontend: boolean = false;
  isBackend: boolean = false;
  isCMSEcommerce: boolean = false;
  isDesign: boolean = false;
   constructor() { }

  ngOnInit(): void {
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
}
