import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})

// filter applied on products
export class ProductFilterComponent implements OnInit {

  constructor() { }

  // emitter for changes
  @Output() notifyFilter: EventEmitter<string> = new EventEmitter<string>();
  @Output() notifyCategory: EventEmitter<string> = new EventEmitter<string>();
  
  // values sended
  inputFilter: string = "";
  type: string = "";

  ngOnInit() {
  }

  // notify changes to parent
  notifyParent() {
    this.notifyCategory.emit(this.type);
    this.notifyFilter.emit(this.inputFilter);
  }
}
