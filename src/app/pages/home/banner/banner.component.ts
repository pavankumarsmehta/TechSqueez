import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() bannerContent: any;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit()
  }
  ngOnInit(): void {
    console.log(this.bannerContent)
  }

}
