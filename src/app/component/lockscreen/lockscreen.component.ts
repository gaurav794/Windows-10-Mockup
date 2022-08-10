import { Component,OnDestroy, OnInit} from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.css']
})
export class LockscreenComponent implements OnInit, OnDestroy {

  currentTime: any;
  timer: any;

  constructor(private service: DataService) {

  }

  ngOnInit(): void {
    this.currentTime = this.service.getCurrentTime();
    this.timer = setInterval(() => {
      this.currentTime = this.service.getCurrentTime();
    }, 60000)
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

}
