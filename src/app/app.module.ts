import { BrowserModule } from '@angular/platform-browser';
// import { MdCheckboxModule } from '@angular/material';
import {MatButtonModule, MatCheckboxModule, MatRadioModule, MatSelectModule, MatInputModule, MatIconModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { HeaderComponent } from './header/header.component';
import { HeaderExpComponent } from './header-exp/header-exp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material';
// import { MenuComponent } from './menu/menu.component';
// import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
// import { ReactiveFormsModule } from '@angualr/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    NameEditorComponent,
    HeaderComponent,
    HeaderExpComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    // MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    NoopAnimationsModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    RouterModule.forRoot(
      [
        {
          path: 'signin',
          component: SigninComponent
        },
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'signup',
          component: SignupComponent
        },
        {
          path: 'register',
          component: RegisterComponent
        }
      ])
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
