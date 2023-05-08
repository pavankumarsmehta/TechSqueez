import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss']
})
export class OurServiceComponent implements OnInit {
  isDesignActive: boolean = true
  isMobileActive: boolean = false
  isWebActive: boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  changeActiveTab(key: string){
    if (key === 'web'){
      this.isWebActive = true;
      this.isDesignActive = false;
      this.isMobileActive =false;
    } else if (key === 'mobile'){
      this.isWebActive = false;
      this.isDesignActive = false;
      this.isMobileActive =true;
    } else {
      this.isWebActive = false;
      this.isDesignActive = true;
      this.isMobileActive =false;
    }



  }
}
