import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { PhotoGalleryComponent } from '../app/photo-gallery/photo-gallery.component';
import { GaleriaComponent } from '../app/galeria/galeria.component';
import {LoginUserComponent} from '../app/login-user/login-user.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),
    AppRoutingModule,
    PhotoGalleryComponent,
    GaleriaComponent,
    LoginUserComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
