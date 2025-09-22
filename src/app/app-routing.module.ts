import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {PhotoGalleryComponent} from '../app/photo-gallery/photo-gallery.component';
import {GaleriaComponent} from '../app/galeria/galeria.component'
import { AppComponent } from './app.component';

const routes: Routes = [
  {

    path: 'tabs',
    component: AppComponent,
    children: [

      {path: 'camera', component: PhotoGalleryComponent},
      {path: 'gallery', component: GaleriaComponent},
      {path: '', redirectTo:'home', pathMatch: 'full'},

    ]
  },
  {path: '', redirectTo: 'camera', pathMatch:'full'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
