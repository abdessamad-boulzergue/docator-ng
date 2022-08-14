import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-cv-section',
  templateUrl: './cv-section.component.html',
  styleUrls: ['./cv-section.component.css']
})
export class CvSectionComponent implements OnInit {

  @Input()
  title! : string;
  @Input()
  icon : string = "perm_identity";
  @Input()
  style! : object;

  @Input()
  data! : Array<any>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
