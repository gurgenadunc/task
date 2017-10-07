import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() hideComponentOne = new EventEmitter;
  @Output() hideComponentThree = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  buttonOneClicked() {
    this.hideComponentOne.emit()
  }

  buttonTwoClicked() {
    this.hideComponentThree.emit()
  }

}
