import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Input() sharedText;
  @Output() cleanInputText = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  cleanInput() {
    this.cleanInputText.emit();
  }
}
