import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.scss']
})
export class HiringComponent implements OnInit {
  @Input() hiringContent: any;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit()
  }
  ngOnInit(): void {
    console.log(this.hiringContent)
  }

}
