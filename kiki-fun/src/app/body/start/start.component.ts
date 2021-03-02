import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  
  events2: any[];
  date: Date;

  constructor() { }

  ngOnInit(): void {
    this.events2 = ["2020", "2021", "2022", "2023"];
  }

}
