import { Injectable, NotFoundException } from '@nestjs/common';
import { Contactos } from '../entities/contact.entity';
import { ObtenerContactoDto } from '../dtos/obtener-contacto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContactosService {
  constructor(
    @InjectRepository(Contactos)
    private readonly contactosRepository: Repository<Contactos>,
  ) {}

  async obtenerContactos(): Promise<ObtenerContactoDto[]> {
    return await this.contactosRepository.find();
  }

  async obtenerContactoPorId(id: number): Promise<Contactos> {
    const contacto = await this.contactosRepository.findOne({
      where: { idContacto: id },
    });
    if (!contacto) {
      throw new NotFoundException('Contacto no encontrado');
    }
    return contacto;
  }

  async crearContacto(contacto: Contactos): Promise<Contactos> {
    const contactoReg = this.contactosRepository.save(contacto);
    if (Object.entries(contactoReg).length === 0) {
      throw new NotFoundException('Parámetro vacio');
    }
    return contactoReg;
  }

  async actualizarContacto(
    id: number,
    contactos: Contactos,
  ): Promise<Contactos> {
    const existingContacto = await this.contactosRepository.findOne({
      where: { idContacto: id },
    });
    if (!existingContacto) {
      throw new NotFoundException('Contacto no encontrado');
    }
    await this.contactosRepository.update(id, contactos);
    return this.contactosRepository.findOne({ where: { idContacto: id } });
  }

  async eliminarContacto(id: number): Promise<any> {
    const result = await this.contactosRepository.delete(id);
    if (!result) {
      throw new NotFoundException('Contacto no encontrado');
    }
    return result;
  }
}
