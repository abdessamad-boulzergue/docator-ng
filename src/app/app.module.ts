import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AbstractWelcomePageComponent } from './abstract-welcome-page/abstract-welcome-page.component';
import { DocEditorComponent } from './doc-editor/doc-editor.component';
import { HomeToolbarComponent } from './home-toolbar/home-toolbar.component';
import { RubanComponent } from './ruban/ruban.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RubanComponent,
    HomeToolbarComponent,
    DocEditorComponent,
    HomeComponent,
    AbstractWelcomePageComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
