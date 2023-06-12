import { Injectable } from '@nestjs/common';
import { ContactosRepository } from '../../domain/repositories/contactos.repository';
import { Contacto } from '../../domain/models/contacto.model';

@Injectable()
export class ContactosService {
  constructor(private readonly contactosRepository: ContactosRepository) {}

  async crearContacto(crearContactoDto: any): Promise<number> {
    const contacto = new Contacto(
      crearContactoDto.nombre,
      crearContactoDto.email,
      crearContactoDto.edad,
    );
    await this.contactosRepository.create(contacto);
    return contacto.idContacto;
  }

  async obtenerContactoPorId(idContacto: number): Promise<Contacto> {
    return this.contactosRepository.findById(idContacto);
  }

  async obtenerTodosLosContactos(): Promise<Contacto[]> {
    return this.contactosRepository.findAll();
  }

  async actualizarContacto(
    idContacto: number,
    actualizarContactoDto: any,
  ): Promise<void> {
    await this.contactosRepository.update(idContacto, actualizarContactoDto);
  }

  async eliminarContacto(idContacto: number): Promise<void> {
    await this.contactosRepository.deleteById(idContacto);
  }
}

/* import { Injectable, NotFoundException } from '@nestjs/common';
import { Contactos } from '../database/entities/contactos.entity';
import { ObtenerContactoDto } from '../../application/dtos/obtener-contacto.dto';
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
 */
