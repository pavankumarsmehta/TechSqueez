import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  testimonialData: any = [
    {
      id: 1,
      image: "https://s3.ap-south-1.amazonaws.com/multiqos.com/landingPage/testonomial/rose.webp",
      content: `<p class="custom-font-18 taj">It's rewarding to work with a diligent and dedicated team. Excellent guys to work with! Always listened to my thoughts and came up with creative design solutions. Whenever you need them, they are available and eager to share their knowledge. </p> <h3>- Rose H.</h3>`
    },
    {
      id: 2,
      image: 'https://s3.ap-south-1.amazonaws.com/multiqos.com/landingPage/testonomial/testinomial.webp',
      content: `<p class="custom-font-18 taj">Our vision was understood and they
  asked really detailed questions to find out what was required. A well-defined process was
  followed during the development process and the team captured requirements diligently. The
  team is also flexible enough to adjust to the schedule.</p>
    <h3>- Ben T.</h3>`
    },
    {
      id: 3,
      image: 'https://s3.ap-south-1.amazonaws.com/multiqos.com/landingPage/testonomial/rose.webp',
      content: `<p class="custom-font-18 taj">It's rewarding to work with a
  diligent and dedicated team. Excellent guys to work with! Always listened to my thoughts and
  came up with creative design solutions. Whenever you need them, they are available and eager
  to share their knowledge. </p>
<h3>- Rose H.</h3>`
    },
    {
      id: 4,
      image: 'https://s3.ap-south-1.amazonaws.com/multiqos.com/landingPage/testonomial/testinomial.webp',
      content: `<p class="custom-font-18 taj">Our vision was understood and they
  asked really detailed questions to find out what was required. A well-defined process was
  followed during the development process and the team captured requirements diligently. The
  team is also flexible enough to adjust to the schedule.</p>
<h3>- Ben T.</h3>`
    },
    {
      id: 5,
      image: 'https://s3.ap-south-1.amazonaws.com/multiqos.com/landingPage/testonomial/rose.webp',
      content: `<p class="custom-font-18 taj">Our vision was understood and they
  asked really detailed questions to find out what was required. A well-defined process was
  followed during the development process and the team captured requirements diligently. The
  team is also flexible enough to adjust to the schedule.</p>
<h3>- Ben T.</h3>`
    },
  ];
  activeId: any = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeNextSlide() {
    this.activeId === this.testimonialData.length ? this.activeId = 0 : null;
    this.activeId++
  }

  changePreviousSlide() {
    this.activeId === 1 ? this.activeId = this.testimonialData.length + 1 : null;
    this.activeId--
  }
}
