/**
 * Archivo que va a modelar el como va a ser la foto dentro de la galeria
 */

export interface Foto {
//* Un paquete o funcion que devuelve la hubicacion de la foto almacenada en el dispositivo de forma nativa    
filePath: string;
//* Un paquete o funcion que devuelve la hubicacion de la foto almacenada en la app web
webviewPath?: string;
}