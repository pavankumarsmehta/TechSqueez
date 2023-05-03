import { Component } from '@angular/core';
import {TechSqueezHelperService} from "./services/tech-squeez-helper.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMobileOpen : any;
  constructor(private techSqueezHelperService: TechSqueezHelperService) {
  }
  title = 'TechSqueez';

  ngOnInit(){
    this.techSqueezHelperService.stringSubject.subscribe(
      data =>
      {
        this.isMobileOpen = data;


      }
    );
  }
}
