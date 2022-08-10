import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { LockscreenComponent } from './component/lockscreen/lockscreen.component';
import { LockscreenDirective } from './directive/lockscreen/lockscreen.directive';
import { BootupComponent } from './component/bootup/bootup.component';
import { BootupDirective } from './directive/bootup/bootup.directive';
import { SignInComponent } from './component/lockscreen/sign-in/sign-in/sign-in.component';
import { SignInDirective } from './directive/sign-in/sign-in.directive';
import { DesktopComponent } from './component/desktop/desktop.component';
import { ContextMenuDirective } from './directive/desktop/context-menu.directive';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { StartComponent } from './component/start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    LockscreenComponent,
    BootupComponent,
    BootupDirective,
    SignInComponent,
    SignInDirective,
    LockscreenDirective,
    DesktopComponent,
    ContextMenuDirective,
    PageNotFoundComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
