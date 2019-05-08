import { BrowserModule } from '@angular/platform-browser';
// import { MdCheckboxModule } from '@angular/material';
import {MatButtonModule, MatCheckboxModule, MatRadioModule, MatSelectModule, MatInputModule} from '@angular/material';
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


// import { ReactiveFormsModule } from '@angualr/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    NameEditorComponent,
    HeaderComponent,
    HeaderExpComponent
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
    MatInputModule
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
