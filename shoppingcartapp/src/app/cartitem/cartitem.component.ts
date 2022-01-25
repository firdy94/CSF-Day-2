import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {
  @Output() onAdd = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  title = "inventory";

  inventory = [
    {
      name: "Apple",
      image: "../assets/images/apple.png"
    },
    {name: "Orange",
      image: "../assets/images/orange.png"
    },
    {name: "Strawberry",
      image: "../assets/images/strawberry.png"
    },
    {name: "Banana",
      image: "../assets/images/banana.png"
    }
  ]

  addItem(name: string) {
        // console.log(name);

    this.onAdd.emit(name);
  }
    

}
