import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { TaskbarIcons, DesktopIcons } from './interface/interface';

@Component({
  selector: 'desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})

export class DesktopComponent implements OnInit {

  currentTime: any;
  timer: any;
  rightClickMenuSize = {
    width: 210,
    height: 280
  };
  rightClickOnIconsSize = {
    width: 298,
    height: 416
  };
  isRightClicked = false;
  isRightClickOnIcons = false;
  coordinates = '';
  refreshClicked = 'no-refresh';
  images: TaskbarIcons[] = [];
  hiddenItems: TaskbarIcons[] = [];
  icons: DesktopIcons[] = [];


  constructor(private service: DataService) {
    this.images = this.service.getTaskbarIcons();
    this.hiddenItems = this.service.getTaskBarHiddenIcons();
    this.icons = this.service.getDesktopIcons();
  }

  ngOnInit(): void {
    this.currentTime = this.service.getCurrentTime();
    this.timer = setInterval(() => {
      this.currentTime = this.service.getCurrentTime();
    }, 60000)
  }

  onRightClickDesktop(e: MouseEvent) {
    this.isRightClicked = true;
    this.isRightClickOnIcons = false;
    /*Set mouse pointer cocrdinates to display cotext menu */
    this.setMouseCoordinates(e, true);
  }

  onRightClickContextMenu(e:MouseEvent){
    e.preventDefault();
  }
  
  onClickDesktopOrFocusLost() {
    this.isRightClicked = false;
    this.isRightClickOnIcons = false;
  }

  onClickDesktopIcons(e: MouseEvent) {
    this.isRightClicked = false;
    this.isRightClickOnIcons = true;
    /*Set mouse pointer cocrdinates to display cotext menu */
    this.setMouseCoordinates(e, false);
  }

  setMouseCoordinates(e: MouseEvent, isRightClickOnDesktop: boolean) {
    let xPosition = e.pageX;
    let yPosition = e.pageY;
    e.preventDefault();
    /*Set top and left css property */
    if (isRightClickOnDesktop) {
      /*Page Width Overflow handle*/
      if ((e.pageX + this.rightClickMenuSize.width) > 1536) {
        xPosition = e.pageX - this.rightClickMenuSize.width;
      }
      /*Page Height Overflow handle*/
      if ((e.pageY + this.rightClickMenuSize.height) > 734) {
        yPosition = e.pageY - this.rightClickMenuSize.height;
      }
    } 
    else {
      /*Page Width Overflow handle*/
      if ((e.pageX + this.rightClickOnIconsSize.width) > 1536) {
        xPosition = e.pageX - this.rightClickOnIconsSize.width;
      }
      /*Page Height Overflow handle*/
      if ((e.pageY + this.rightClickOnIconsSize.height) > 734) {
        yPosition = e.pageY - this.rightClickOnIconsSize.height;
      }
    }

    this.coordinates = `top: ${yPosition}px; left: ${xPosition - 5}px`;
  }

  onRefreshClick(){
   this.refreshClicked = 'refresh';
   setTimeout(()=>{this.refreshClicked = 'no-refresh';},100);
  }

}
