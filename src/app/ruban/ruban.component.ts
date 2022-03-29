import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruban',
  templateUrl: './ruban.component.html',
  styleUrls: ['./ruban.component.css']
})
export class RubanComponent implements OnInit {

  @Input() items:Array<Object> = []
  constructor() { }

  ngOnInit(): void {
  }

}
