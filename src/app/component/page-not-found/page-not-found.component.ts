import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  percent: number = 0;
  timeOutMilliSeconds = 8000;
  constructor(private route: Router) { }

  ngOnInit(): void {
    setInterval(() => { this.percent += 5; }, 400);
    setTimeout(() => {
      this.route.navigate(['/bootup']);
    }, this.timeOutMilliSeconds)
  }

}
