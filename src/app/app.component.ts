import { Component, HostListener, ElementRef, ViewChild, OnInit } from '@angular/core';
declare var require: any;
const data = require('../assets/sample_data.json');
import { UserData } from './user-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TestProj';
  tableData: UserData[] = data;
  limitValue = 10;
  currPage = 0;
  @ViewChild('head') head: ElementRef;
  paginatinon: Object[] = [];

  ngOnInit() {
    this.getPaginationData();
  }

  getPaginationData() {
    this.paginatinon = new Array(this.tableData.length / this.limitValue);
  }

  getPaginatedData(page: number) {
    this.currPage = page;
  }

  changeLimit(limit) {
    this.currPage = 0;
    this.limitValue = limit;
    this.getPaginationData();
  }

  @HostListener('scroll', ['$event'])
  private onScroll($event: Event): void {
    this.head.nativeElement.scrollLeft = $event.srcElement.scrollLeft;
  }
}
