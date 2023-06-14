import { Injectable, NotFoundException } from '@nestjs/common';
import { Contactos } from '../entities/contact.entity';
import { ObtenerContactoDto } from '../dtos/obtener-contacto.dto';
import { ContactsRepository } from '../repositories/contactos.repository';

@Injectable()
export class ContactosService {
  constructor(private readonly contactosRepository: ContactsRepository) {}

  async obtenerContactos(): Promise<ObtenerContactoDto[]> {
    return await this.contactosRepository.findAll();
  }

  async obtenerContactoPorId(id: number): Promise<Contactos> {
    const contacto = await this.contactosRepository.findOne(id);
    if (!contacto) {
      throw new NotFoundException('Contacto no encontrado');
    }
    return contacto;
  }

  async crearContacto(contacto: Contactos): Promise<Contactos> {
    const contactoReg = await this.contactosRepository.create(contacto);
    if (Object.entries(contactoReg).length === 0) {
      throw new NotFoundException('Parámetro vacio');
    }
    return contactoReg;
  }

  async actualizarContacto(
    id: number,
    contactos: Contactos,
  ): Promise<Contactos> {
    const existingContacto = await this.contactosRepository.findOne(id);
    if (!existingContacto) {
      throw new NotFoundException('Contacto no encontrado');
    }
    await this.contactosRepository.update(id, contactos);
    const respueta = await this.contactosRepository.findOne(id);
    console.log('jooo2', respueta);
    return respueta;
  }

  async eliminarContacto(id: number): Promise<any> {
    const result = await this.contactosRepository.delete(id);
    if (!result) {
      throw new NotFoundException('Contacto no encontrado');
    }
    return result;
  }
}
