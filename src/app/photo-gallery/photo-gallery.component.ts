import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";

//Importacion del servicio photo
import {photo} from "src/app/services/photo";

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
  imports: [IonicModule],
})
export class PhotoGalleryComponent  implements OnInit {

  //Se inyecta el servicio e el constructor
  constructor(public photo_service : photo) { }

  //Se llama al servicio 
  addNew_picture(){
    this.photo_service.addNew_picture();
  }

  async ngOnInit() {
    
   await this.photo_service.load_Saved_imgs();
    
  }

}
