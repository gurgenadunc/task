import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class TextShareService {

  public textSubject = new Subject<string>();

  constructor() { }

}
