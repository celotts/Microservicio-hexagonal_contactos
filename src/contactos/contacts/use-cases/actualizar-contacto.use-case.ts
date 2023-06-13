import { ContactsRepository } from './../repositories/contactos.repository';
import { Injectable } from '@nestjs/common';
import { ActualizarContactoDto } from '../dtos/actualizar-contacto.dto';

@Injectable()
export class ActualizarContactoUseCase {
  constructor(private readonly contactosRepository: ContactsRepository) {}

  async execute(
    id: number,
    actualizarContactoDto: ActualizarContactoDto,
  ): Promise<void> {
    await this.contactosRepository.update(id, actualizarContactoDto);
  }
}
