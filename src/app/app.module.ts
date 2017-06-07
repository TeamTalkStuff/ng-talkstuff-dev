import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Http, HttpModule, RequestOptions, XHRBackend} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header-component/header-component.component';
import { FooterComponent } from './footer-component/footer-component.component';
import { PageFeatureComponent } from './page-feature-component/page-feature-component.component';
import { HomePageComponent } from './home-page-component/home-page-component.component';
import { TestPageComponent } from './test-page-component/test-page-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {SecurityModule} from './security/security.module';
import {httpFactory} from './http.factory';
import {SharedModule} from './shared/shared.module';
import {Broadcaster} from './shared/services/broadcaster';
import { AdvertComponent } from './advert-component/advert-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageFeatureComponent,
    HomePageComponent,
    TestPageComponent,
    PageNotFoundComponent,
    AdvertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    SecurityModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, Broadcaster]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

