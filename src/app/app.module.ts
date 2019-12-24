import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {
  MatFormFieldModule,
  MatMenuModule,
  MatSelectModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatTableModule
} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';


export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TestComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AngularMultiSelectModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    LazyLoadImageModule,
    AppRoutingModule,
    NgxQRCodeModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatTableModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
