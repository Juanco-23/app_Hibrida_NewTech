/** 
 * Logica del servicio de camara para capturar fotos de manera nativa desde cualquier OS o Web 
*/

// Se importan los plugins instalados que estan guardados en los ng modules en Capacitor, y sus dependencias respectivas para el manejo de la camara
import { Injectable } from '@angular/core';
import {Camera, CameraResultType, CameraSource, Photo} from '@capacitor/camera';
import {Filesystem, Directory} from '@capacitor/filesystem';
import {Preferences} from '@capacitor/preferences';
import {Platform} from '@ionic/angular';


//Importacion del modelo de foto_interface
import {Foto} from '../models/foto_interface';


@Injectable({
  providedIn: 'root'
})
export class photo {
  
/**
 * !Pendiente si hay que hacer un constructor como en ele video
 */

// Array para almacenar fotos
public fotos_G : Foto[] = [];

//Variable clave para poder acceder a las fotos de la memoria
  private PHOTO_STORAGE : string='fotos_G';

  private platform : Platform;

  constructor (platform: Platform){
    this.platform=platform;
  }

// Creacion de la funcion para tomar fotos
/**
 * * Se debe hacer una dunción de manera ascincrona ya que es un proceso que manerja información
 */
 public async addNew_picture(){

  //Proseso para tomar una foto
//*Take photo
  const capturar_foto= await Camera.getPhoto({

    //Variate del tipo de foto con su identificador
    resultType: CameraResultType.Uri,
    //Fuente
    source: CameraSource.Camera,
    //Calidad
    quality: 100,
  })

  //proceso para acomodar las fotos en la galeria desde el comomienzo con unshift
  
  /*this.fotos_G.unshift({
    filepath: "Foto",
    webviewPath: capturar_foto.webPath!
  })*/

   //proceso para guardar las fotos en la galeria desde el comomienzo con unshift  
  const savedImageFile= await this.savePicture(capturar_foto)
  this.fotos_G.unshift(savedImageFile);

  //Guardado de matriz fotos y sus datos asi se reinice
  Preferences.set({
    key: this.PHOTO_STORAGE,
    value: JSON.stringify(this.fotos_G),
  });

 }

 private async savePicture (photo: Photo){ 
//Convertir la foto al formato bas64, requerido por el filesistem API para guardar
  const base64Data = await this.read_Base64(photo);

// Escribir la foto del directorio
  const file_name = Date.now() + 'jpeg';
  const saved_File = await Filesystem.writeFile({
    path: file_name,
    data: base64Data,
    directory: Directory.Data
  });
  
  // Usar webPath para mostrar la nueva imagen en lugar de base64, ya que ya está cargada en la memoria.
  return{
    filePath: file_name,
    webviewPath: photo.webPath
  }

 }

//Convertir la blob al formato bas64
 private async read_Base64 (photo: Photo){

  if(this.platform.is('hybrid')){
    const file= await Filesystem.readFile({
      path: photo.path!
    });

     return file.data;
  } 
  else {

  const response = await fetch(photo.webPath!);
  const blob = await response.blob();

  return await this.convertBlobToBase64(blob) as string;
 }}

 
 private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject)=> {

    const reader= new FileReader();
    reader.onerror= reject;
    reader.onload = () =>{
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
 });

 //Funcion de cargar las imagenes guardadas
 public async load_Saved_imgs(){

  //*Recuperar las fotos de la memoria cache
  const {value} = await Preferences.get({key: this.PHOTO_STORAGE});

   this.fotos_G = (value ? JSON.parse(value) : []) as Foto[];

  //Desplegar las fotos leidas en el formato base64
  for(let foto of this.fotos_G){
    //Leer cada foto almacenada en el sitema de archivos 
    const readFile = await Filesystem.readFile({
      path: foto.filePath,
      directory: Directory.Data,
    })

    //Solo para plataformas Web= para cargar fotos en base64
    foto.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
  }
 }

}
