import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  @Output() sendInputText = new EventEmitter;
  @Input() inputText: string;

  constructor() { }

  ngOnInit() {
  }

  inputChanged() {
    this.sendInputText.emit(this.inputText);
  }

}
