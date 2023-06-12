import { Contacto } from '../models/contacto.model';

export interface ContactosRepository {
  create(contacto: Contacto): Promise<void>;
  findById(idContacto: number): Promise<Contacto>;
  findAll(): Promise<Contacto[]>;
  update(idContacto: number, actualizarContactoDto: any): Promise<void>;
  deleteById(idContacto: number): Promise<void>;
}
