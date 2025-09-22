//Se importan y esablecen los elementos desde el MAIN de src ya que se necesita crear elementos de manera general o sea en todo el proyecto

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//Se importan los pwa con un defineCustomElements para poder hacer elmentos personalizados
import {defineCustomElements} from '@ionic/pwa-elements/loader';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

  //Se hace la inderencia de la caracteristica para hacer elementos personalizados
  defineCustomElements(window)