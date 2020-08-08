import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sih-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Baltit Workstream';



  constructor(private router:Router) {

  }

  ngOnInit(): void {
    console.log('configured routes: ', this.router.config);    
  }

}
