import { Injectable, NotFoundException } from '@nestjs/common';
import { Contactos } from '../entities/contactos.entity';
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
    return await this.contactosRepository.findOne({
      where: { idContacto: id },
    });
  }

  async crearContacto(contacto: Contactos): Promise<Contactos> {
    return this.contactosRepository.save(contacto);
  }

  async actualizarContacto(
    id: number,
    contactos: Contactos,
  ): Promise<Contactos> {
    //return this.contactosRepository.save(contacto);
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
