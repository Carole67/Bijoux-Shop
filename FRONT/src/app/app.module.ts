import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxsModule} from '@ngxs/store';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { PhoneFormatPipe } from './phone-format.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundComponent} from '../app/page-not-found/page-not-found.component';
import { WelcomePageComponent } from '../app/welcome-mod/welcome-page/welcome-page.component';
import {ProductState} from './shared/states/product.state';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { RouterModule } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    PhoneFormatPipe,
    PageNotFoundComponent,
    WelcomePageComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl:"always"}),
    NgxsModule.forRoot([
      ProductState
    ]),  
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
