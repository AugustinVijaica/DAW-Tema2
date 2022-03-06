import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {DespreNoiComponent} from './despre-noi/despre-noi.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InchirieriComponent} from './inchirieri/inchirieri.component';
import {HomeComponent} from './home/home.component';
import {NoutatiComponent} from './noutati/noutati.component';
import { VanzariComponent } from './vanzari/vanzari.component';
import { ContactComponent } from './contact/contact.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DespreNoiComponent,
    InchirieriComponent,
    HomeComponent,
    NoutatiComponent,
    VanzariComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent]
})
export class AppModule {
}
