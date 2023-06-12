import { Injectable } from '@nestjs/common';
import { ContactosRepository } from '../repositories/contactos.repository';
import { ObtenerContactoDto } from '../dtos/obtener-contacto.dto';

@Injectable()
export class ObtenerContactoPorIdUseCase {
  constructor(private readonly contactosRepository: ContactosRepository) {}

  async execute(id: number): Promise<ObtenerContactoDto> {
    return await this.contactosRepository.findOne(id as any);
  }
}
