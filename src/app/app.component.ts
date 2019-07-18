import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  WordGiven = 'Kousic Jamili';
  WordConverted: string;
  WordUsingLoop: string;
  specificValue: any;

  constructor(private appService: AppService) {
    this.WordConverted = this.WordGiven.replace(/\s/g, '').replace(/(.)(?!$)/g, '$1*');
    this.WordUsingLoop = this.callMethod('Testing');
  }

  ngOnInit() {
    this.specificValue = this.appService.getPostById(1);
  }

  private callMethod(str: string) {
    let givenString = '';
    for (let i = 0; i < str.length; i++ ) {
      givenString += str[i] + '*';
    }
    return givenString.slice(0, -1);
  }
}
