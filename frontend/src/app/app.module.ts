import { CUSTOM_ELEMENTS_SCHEMA, DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskPipe, NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UserRegistrationComponent } from './pages/user/user-registration/user-registration.component';
import { RedefinePasswordComponent } from './pages/redefine-password/redefine-password.component';
import { SedingConfirmationComponent } from './pages/seding-confirmation/seding-confirmation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutFullScreenComponent } from './layout/layout-full-screen/layout-full-screen.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';
import { CollectionListComponent } from './pages/collection/collection-list/collection-list.component';
import { CollectionRegisterComponent } from './pages/collection/collection-register/collection-register.component';
import { CollectionEditComponent } from './pages/collection/collection-edit/collection-edit.component';
import { ModelListComponent } from './pages/model/model-list/model-list.component';
import { ModelRegisterComponent } from './pages/model/model-register/model-register.component';
import { ModelEditComponent } from './pages/model/model-edit/model-edit.component';
import { PageUnderConstructionComponent } from './pages/page-under-construction/page-under-construction.component';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';
import { GetHelpComponent } from './pages/get-help/get-help.component';

registerLocaleData(ptBr);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegistrationComponent,
    RedefinePasswordComponent,
    SedingConfirmationComponent,
    SidebarComponent,
    LayoutFullScreenComponent,
    DashboardComponent,
    HeaderComponent,
    SubMenuComponent,
    CollectionListComponent,
    CollectionRegisterComponent,
    CollectionEditComponent,
    ModelListComponent,
    ModelRegisterComponent,
    ModelEditComponent,
    PageUnderConstructionComponent,
    UserEditComponent,
    GetHelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatMenuModule,
    MatButtonModule,
    MatSortModule,
    RouterModule,
    ToastrModule.forRoot(),
    NgxMaskPipe,
    NgxMaskDirective
  ],
  providers: [provideNgxMask(),{ provide: LOCALE_ID, useValue: 'pt' },{ provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
