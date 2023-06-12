export class Contacto {
  idContacto: number;
  nombre: string;
  email: string;
  edad: number;

  constructor(nombre: string, email: string, edad: number) {
    this.nombre = nombre;
    this.email = email;
    this.edad = edad;
  }
}
