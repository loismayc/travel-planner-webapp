import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor() { }

  getDate(): string {
    var today = new Date();
    var todayToString = this.convertDateToStr(today);

    console.log(`Date: ${todayToString}`);

    return todayToString
  }

  convertDateToStr(date: Date): string {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();

    var dateString = yyyy + '-' + mm + '-' + dd;

    return dateString;
  }
}
