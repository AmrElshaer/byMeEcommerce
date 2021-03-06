import { CurrentCompanyService } from './_services/current-company.service';
import { AuthGuard } from './_shared/guard/auth.guard';
import { CompanyService } from './_services/company.service';

import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EshopModule } from './_components/eShop/eshop.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './_shared/interceptors/loaderInterceptor';
import { LoaderComponent } from './loader/loader.component';
import { AuthenticationService } from './_services/authentication.service';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartService } from './_services/cart.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CozaModule } from './_components/cozaStore/coza.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    EshopModule,
    CozaModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [CompanyService,AuthenticationService,CurrentCompanyService,AuthGuard,CartService,[{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true

  }]],
  bootstrap: [AppComponent]
})
export class AppModule { }
