import { Component } from '@angular/core';
import { TextShareService } from './text-share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public componentOneWidth: any = "20%";
  public componentThreeWidth: any = "200px";
  public componentTwoText = '';
  public componentTwoBackground = 'green';

  constructor(private textShareService: TextShareService) {

  }

  componetOneHide() {
    this.componentOneWidth = this.componentOneWidth == '20%'? 0 : '20%';
  }

  componetThreeHide() {
    this.componentThreeWidth = this.componentThreeWidth == '200px'? 0 : '200px';
  }

  sharedTextChanged(text) {
    if(text == 'color') {
      this.componentTwoBackground = 'orange';
    }  else {
      this.componentTwoBackground = 'green';
    }
    this.componentTwoText = text;
    this.textShareService.textSubject.next(text);
  }

  resetInput() {
    this.sharedTextChanged('');
    this.textShareService.textSubject.next('');
    this.componentTwoBackground = 'green';
  }

}
