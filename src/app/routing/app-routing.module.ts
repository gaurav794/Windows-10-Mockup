import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from '../component/start/start.component';
import { BootupComponent } from '../component/bootup/bootup.component';
import { LockscreenComponent } from '../component/lockscreen/lockscreen.component';
import { SignInComponent } from '../component/lockscreen/sign-in/sign-in/sign-in.component';
import { DesktopComponent } from '../component/desktop/desktop.component';
import { PageNotFoundComponent } from '../component/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'start', component: StartComponent, data: { animation: 'start' } },
  { path: 'bootup', component: BootupComponent, data: { animation: 'bootup' } },
  { path: 'lockscreen', component: LockscreenComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'desktop', component: DesktopComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
