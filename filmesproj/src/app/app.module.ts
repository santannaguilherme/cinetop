import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SiteModule } from './site/site.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PadraoPageComponent } from './core/padrao-page/padrao-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PadraoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
