import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerContent: any = {
    title: `A Superior <br> Experiance From <br> <span>DESIGN TO <br>DEVELOPMENT</span> <br> With Us.`,
  };
  blogContent: any;
  hiringContent: any = {
    title: `HIRE DEDICATED <br> <span>DEVELOPERS</span>`,
    description: `We’re the web/app development and design team that walks the talk. We take your <b>VISION,
                        SOLVE</b> the<!-- --> <b>CHALLENGES.</b> From <b> TECHNOLOGY</b> query to<!-- --> <b>SOLUTION,</b>
                        delivering you <b>VALUE </b> for your<!-- --> <b>MONEY </b> with a <b>QUALITY PRODUCT</b> that is
                        worthy of your <b> REPUTATION.</b>`
  };
  industriesContent: any;
  ourPlatformContent: any;
  serviceContent: any;
  platformContent: any;
  portfolioContent: any;
  talkToExpertContent: any;
  technologyContent: any;
  whoWeAreContent: any;
  constructor() {
  }

  ngOnInit(): void {
  }

}
