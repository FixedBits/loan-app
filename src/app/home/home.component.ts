/**
 * Title: home.component.ts
 * Author: Victor Soto
 * Date: 05/19/2024
 * Description: The home component (Loan App Calculation Logic)
 * Sources:
 * https://www.w3schools.com/jsref/jsref_replace.asp
 * https://www.digitalocean.com/community/tutorials/replace-all-instances-of-a-string-in-javascript
 * https://stackoverflow.com/questions/20545590/what-does-the-regular-expression-d-g-mean
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loanAmount: string;
  interestRate: number;
  numYears: number;
  monthlyPayment: number;
  totalInterest: number;

  constructor() { }

  ngOnInit(): void {
  }

  calculatePayment(): void {
    let principal = Number(this.loanAmount.replace(/[\$,]/g, ''));
    let ratePerPeriod = (this.interestRate / 100) / 12; // Convert annual rate to monthly and in decimal
    let numberOfPayments = this.numYears * 12;

    // Calculate monthly payment
    this.monthlyPayment = principal * (ratePerPeriod * Math.pow((1 + ratePerPeriod), numberOfPayments)) / (Math.pow((1 + ratePerPeriod), numberOfPayments) - 1);

    // Calculate total interest paid
    this.totalInterest = (this.monthlyPayment * numberOfPayments) - principal;
  }
}
