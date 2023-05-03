import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TechSqueezHelperService {
  public stringSubject = new Subject<boolean>();

  constructor() { }
}
