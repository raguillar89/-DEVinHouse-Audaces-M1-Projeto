import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutFullScreenComponent } from './layout/layout-full-screen/layout-full-screen.component';
import { LoginComponent } from './pages/login/login.component';
import { RedefinePasswordComponent } from './pages/redefine-password/redefine-password.component';
import { SedingConfirmationComponent } from './pages/seding-confirmation/seding-confirmation.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'userRegistration', component: UserRegistrationComponent },
  { path: 'redefinePassword', component: RedefinePasswordComponent },
  { path: 'sedingConfirmation', component: SedingConfirmationComponent },
  { path: '', component: LayoutFullScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
