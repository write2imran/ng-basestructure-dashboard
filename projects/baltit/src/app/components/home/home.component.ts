import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sih-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public customLayout: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
