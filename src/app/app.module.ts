import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './operation/search/search.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import {MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperationModule } from './operation/operations.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
                  provide: TranslateLoader,
                  useFactory: HttpLoaderFactory,
                  deps: [HttpClient]
      }}),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    OperationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
