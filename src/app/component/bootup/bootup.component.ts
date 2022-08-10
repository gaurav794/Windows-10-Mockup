import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bootup',
  templateUrl: './bootup.component.html',
  styleUrls: ['./bootup.component.css']
})
export class BootupComponent implements OnInit {

  seconds:number = 10000;
  constructor(private route: Router) { }

  ngOnInit(): void {
    setTimeout(()=>{this.route.navigate(['/lockscreen']);},this.seconds);
  }
}
