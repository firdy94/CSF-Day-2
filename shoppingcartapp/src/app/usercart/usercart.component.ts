import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {
  @Input()  cart = new Map<string, number>();
  @Output() onDelete = new EventEmitter<string>();
    title = "cart";


  constructor() { }

  ngOnInit(): void {
  }

  delItem(name:string) {
    this.onDelete.emit(name);
  }





}
