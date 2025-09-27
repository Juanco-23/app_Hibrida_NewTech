import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// Importacion de Componentes 
import {PhotoGalleryComponent} from '../app/photo-gallery/photo-gallery.component';
import {GaleriaComponent} from '../app/galeria/galeria.component';
import {LoginUserComponent} from '../app/login-user/login-user.component';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  
  //Componentes fuera de los tabs
        {path: 'login_User', component: LoginUserComponent},

  
  // Tabs de la camara
  {
    path: 'tabs',
    component: TabsPage,
    children: [

      {path: 'camera', component: PhotoGalleryComponent},
      {path: 'gallery', component: GaleriaComponent},
      {path: '', redirectTo: '/tabs/gallery', pathMatch: 'full' }
    ]
  },


  //Redideccion inicial
  {path: '', redirectTo: '/login_User', pathMatch:'full'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
