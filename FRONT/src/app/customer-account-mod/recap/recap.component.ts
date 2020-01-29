import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {

  // data form parent form
  @Input() registerForm:FormGroup;
  
  constructor() { }
  
  ngOnInit() {
  }

}
