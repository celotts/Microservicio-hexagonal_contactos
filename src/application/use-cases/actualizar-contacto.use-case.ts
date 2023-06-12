import { Injectable } from '@nestjs/common';
import { ContactosRepository } from '../../domain/repositories/contactos.repository';
import { ActualizarContactoDto } from '../dtos/actualizar-contacto.dto';

@Injectable()
export class ActualizarContactoUseCase {
  constructor(private readonly contactosRepository: ContactosRepository) {}

  async execute(
    idContacto: number,
    actualizarContactoDto: ActualizarContactoDto,
  ): Promise<void> {
    await this.contactosRepository.update(idContacto, actualizarContactoDto);
  }
}
