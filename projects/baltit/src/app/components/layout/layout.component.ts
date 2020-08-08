import { environment } from '../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'sih-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public customLayout: boolean = false;
  public appname:string = environment.appname;
  public appshortname1:string = environment.appshortname1;
  public appshortname2:string = environment.appshortname2;
    
  constructor() { }

  ngOnInit() {
    console.log("Initalizing Layout");    
  }

}
