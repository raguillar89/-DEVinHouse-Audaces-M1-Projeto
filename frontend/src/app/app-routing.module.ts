import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './guard/authguard.guard';
import { LayoutFullScreenComponent } from './layout/layout-full-screen/layout-full-screen.component';
import { CollectionEditComponent } from './pages/collection/collection-edit/collection-edit.component';
import { CollectionListComponent } from './pages/collection/collection-list/collection-list.component';
import { CollectionRegisterComponent } from './pages/collection/collection-register/collection-register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GetHelpEditComponent } from './pages/get-help/get-help-edit/get-help-edit.component';
import { GetHelpListComponent } from './pages/get-help/get-help-list/get-help-list.component';
import { GetHelpRegisterComponent } from './pages/get-help/get-help-register/get-help-register.component';
import { LoginComponent } from './pages/login/login.component';
import { ModelEditComponent } from './pages/model/model-edit/model-edit.component';
import { ModelListComponent } from './pages/model/model-list/model-list.component';
import { ModelRegisterComponent } from './pages/model/model-register/model-register.component';
import { PageUnderConstructionComponent } from './pages/page-under-construction/page-under-construction.component';
import { RedefinePasswordComponent } from './pages/redefine-password/redefine-password.component';
import { SedingConfirmationComponent } from './pages/seding-confirmation/seding-confirmation.component';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';
import { UserRegistrationComponent } from './pages/user/user-registration/user-registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'userRegistration', component: UserRegistrationComponent },

  { path: 'redefinePassword', component: RedefinePasswordComponent },
  { path: 'sedingConfirmation', component: SedingConfirmationComponent },

  { path: 'wm', component: LayoutFullScreenComponent, canActivateChild:[AuthguardGuard], children:[
    { path: 'wm', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },

    { path: 'collection', component: CollectionListComponent },
    { path: 'collection/clRegister', component: CollectionRegisterComponent },
    { path: 'collection/clEdit/:id', component: CollectionEditComponent },

    { path: 'model', component: ModelListComponent },
    { path: 'model/mlRegister', component: ModelRegisterComponent },
    { path: 'model/mlEdit/:id', component: ModelEditComponent },

    { path: 'getHelp', component: GetHelpListComponent },
    { path: 'getHelp/ghRegister', component: GetHelpRegisterComponent },
    { path: 'getHelp/ghEdit/:id', component: GetHelpEditComponent },

    { path: 'comments', component: PageUnderConstructionComponent },
    { path: 'settings', component: PageUnderConstructionComponent },

    { path: 'userEdit/:id', component: UserEditComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
