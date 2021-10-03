import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: `
  <button (click)="updateValue()">Update Value</button>
  `,
})
export class AppComponent {
  
  constructor(private dataService: DataService) { }

  updateValue() {
    const value = new Date().toISOString();
    this.dataService.setValue(value);
  }
}
