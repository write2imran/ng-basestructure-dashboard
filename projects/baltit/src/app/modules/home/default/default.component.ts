import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sih-home-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Initalizing Default");
  }

}
