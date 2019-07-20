import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  items = new BehaviorSubject<any>(null);

  constructor() { }

  setItems(data: any) {
    this.items.next(data);
  }

  getItems() {
    return this.items.asObservable();
  }
}
