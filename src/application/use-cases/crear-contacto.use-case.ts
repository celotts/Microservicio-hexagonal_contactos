import { Injectable } from '@nestjs/common';
import { Contacto } from '../../domain/models/contacto.model';
import { ContactosRepository } from '../../domain/repositories/contactos.repository';
import { CrearContactoDto } from '../dtos/crear-contacto.dto';

@Injectable()
export class CrearContactoUseCase {
  constructor(private readonly contactosRepository: ContactosRepository) {}

  async execute(crearContactoDto: CrearContactoDto): Promise<number> {
    const contacto = new Contacto(
      crearContactoDto.nombre,
      crearContactoDto.email,
      crearContactoDto.edad,
    );
    await this.contactosRepository.create(contacto);
    return contacto.idContacto;
  }
}
