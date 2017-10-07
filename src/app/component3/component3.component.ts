import { Component, OnInit } from '@angular/core';
import { TextShareService } from '../text-share.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  public sharedText: string;

  constructor(private textShareService: TextShareService) { }

  ngOnInit() {
    this.textShareService.textSubject.subscribe((text) => this.sharedText = text)
  }

}
