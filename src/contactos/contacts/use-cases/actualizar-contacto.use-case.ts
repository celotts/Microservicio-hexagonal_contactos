import { Injectable } from '@nestjs/common';
import { ContactosRepository } from '../repositories/contactos.repository';
import { ActualizarContactoDto } from '../dtos/actualizar-contacto.dto';

@Injectable()
export class ActualizarContactoUseCase {
  constructor(private readonly contactosRepository: ContactosRepository) {}

  async execute(
    id: number,
    actualizarContactoDto: ActualizarContactoDto,
  ): Promise<void> {
    await this.contactosRepository.update(id, actualizarContactoDto);
  }
}
