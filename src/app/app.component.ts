/**
 * Title: app.component.ts
 * Author: Victor Soto
 * Date: 04/21/2024
 * Description: App component
 * Source: https://github.com/buwebdev/web-425/tree/master/week-5/
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assignment: string;

  constructor() {
    this.assignment = "Welcome to the Loan Application!";
  }
}
