import { Component, OnInit } from '@angular/core';
import {TechSqueezHelperService} from "../../services/tech-squeez-helper.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCompany: boolean = false;
  isSolution: boolean = false;
  isService: boolean = false;
  isHireDev: boolean = false;
  isIndustries: boolean = false;
  isDisplayHeaderLink: boolean = false;
  constructor(private techSqueezHelperService: TechSqueezHelperService) { }

  ngOnInit(): void {}
  openMenu(name: string): void {
    this.isCompany = name === 'company';
    this.isSolution = name === 'solution';
    this.isService = name === 'service';
    this.isHireDev = name === 'hireDev';
    this.isIndustries = name === 'industries';
  }
  toggleMenu(name: string): void {
    name === 'company' ? this.isCompany ? this.isCompany = false : this.isCompany= true : '';
    name === 'solution' ? this.isSolution ? this.isSolution = false : this.isSolution= true : '';
    name === 'service' ? this.isService ? this.isService = false : this.isService= true : '';
    name === 'hireDev' ? this.isHireDev ? this.isHireDev = false : this.isHireDev= true : '';
    name === 'industries' ? this.isIndustries ? this.isIndustries = false : this.isIndustries= true : '';
  }
  closeMenu(): void {
    this.isCompany = false;
    this.isSolution = false;
    this.isService = false;
    this.isHireDev = false;
    this.isIndustries = false;
  }
  openHeaderLinks(): void {
    this.isDisplayHeaderLink = !this.isDisplayHeaderLink;
    this.techSqueezHelperService.stringSubject.next(this.isDisplayHeaderLink);
  }
}
