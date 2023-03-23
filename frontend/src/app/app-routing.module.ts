import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './guard/authguard.guard';
import { LayoutFullScreenComponent } from './layout/layout-full-screen/layout-full-screen.component';
import { CollectionListComponent } from './pages/collection/collection-list/collection-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RedefinePasswordComponent } from './pages/redefine-password/redefine-password.component';
import { SedingConfirmationComponent } from './pages/seding-confirmation/seding-confirmation.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'userRegistration', component: UserRegistrationComponent },

  { path: 'redefinePassword', component: RedefinePasswordComponent },
  { path: 'sedingConfirmation', component: SedingConfirmationComponent },

  { path: 'wm', component: LayoutFullScreenComponent, canActivateChild:[AuthguardGuard], children:[
    { path: 'wm', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },

    { path: 'collection', component: CollectionListComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
