import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isButtonClickedThrice = false;
  isTapVisible = false;
  isStartOverButtonAvailable = false;
  isSignInOptionAvailable = true;
  buttonCounter: number = 0;
  changeToDesktop = '';
  coordinates = '';
  seconds: number = 5950;
  @Output() patternUnlock = new EventEmitter();

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onClickSigninPicture(e: MouseEvent) {
    this.buttonCounter++;
    if (this.buttonCounter === 1) { this.isStartOverButtonAvailable = true; }
    if (this.buttonCounter === 3) {
      this.isButtonClickedThrice = true;
      this.isSignInOptionAvailable = false;
      this.isStartOverButtonAvailable = false;
      this.patternUnlock.emit(true);
      this.changeToDesktop = 'changeToDesktop';
      setTimeout(()=>{this.route.navigate(['/desktop']);},this.seconds);
    }
    this.isTapVisible = true;
    /*Set top and left css property */
    this.coordinates = `top: ${e.pageY-14}px; left: ${e.pageX-14}px`;
  }

  onMouseClickRelease(){
    this.isTapVisible = false;
  }

  onClickStartOverButton() {
    this.buttonCounter = 0;
    this.isStartOverButtonAvailable = false;
    this.isButtonClickedThrice = false;
    this.isSignInOptionAvailable = true;

  }

}
