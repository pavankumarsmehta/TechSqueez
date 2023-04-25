import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-tools-and-tech',
  templateUrl: './tools-and-tech.component.html',
  styleUrls: ['./tools-and-tech.component.scss']
})
export class ToolsAndTechComponent implements OnInit {
  @Input() techData: any;
  selectedId: any = 1;
  selectedContent: any;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit()
  }
  ngOnInit(): void {
    this.selectedContent = this.techData.techData[0].buttonContent;
  }
  changeTabContent(item: any){
    this.selectedId = item.id;
    this.selectedContent = item.buttonContent;

  }

}

