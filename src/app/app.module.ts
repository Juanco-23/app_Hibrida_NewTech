import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Componentes
import {LoginUserComponent} from './login-user/login-user.component';
import {PhotoGalleryComponent} from './photo-gallery/photo-gallery.component';
import {GaleriaComponent} from './galeria/galeria.component';
import {TabsPage} from './tabs/tabs.page';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),
    AppRoutingModule,
    LoginUserComponent,
    PhotoGalleryComponent,
    GaleriaComponent,
    TabsPage,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
