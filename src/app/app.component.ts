import { Component, HostBinding } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './component/animation/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {

  title = 'Windows 10 Mock';

  constructor(private contexts: ChildrenOutletContexts){}

}
