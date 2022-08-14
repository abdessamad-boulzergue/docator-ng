import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AbstractWelcomePageComponent } from './abstract-welcome-page/abstract-welcome-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';

import { ProductCardComponent } from './product-card/product-card.component';
import { CvSectionComponent } from './cv-section/cv-section.component';
import { CvForestComponent } from './cv-forest/cv-forest.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AbstractWelcomePageComponent,
    ProductCardComponent,
    CvSectionComponent,
    CvForestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSliderModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
