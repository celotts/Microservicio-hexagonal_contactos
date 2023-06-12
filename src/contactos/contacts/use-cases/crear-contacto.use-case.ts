import { Injectable } from '@nestjs/common';
import { ContactosRepository } from '../repositories/contactos.repository';
import { CrearContactoDto } from '../dtos/crear-contacto.dto';

@Injectable()
export class CrearContactoUseCase {
  constructor(private readonly contactosRepository: ContactosRepository) {}

  async execute(crearContactoDto: CrearContactoDto): Promise<number> {
    const contacto = this.contactosRepository.create(crearContactoDto);
    await this.contactosRepository.save(contacto);
    return contacto.idContacto;
  }
}
