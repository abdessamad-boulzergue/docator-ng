import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  title!: string ;

  @Input()
  price!: number ;

  constructor() { }

  ngOnInit(): void {
  }

}
