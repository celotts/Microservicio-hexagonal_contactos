import { Injectable } from '@nestjs/common';
import { ContactsRepository } from '../repositories/contactos.repository';
import { ObtenerContactoDto } from '../dtos/obtener-contacto.dto';

@Injectable()
export class ObtenerContactoPorIdUseCase {
  constructor(private readonly contactosRepository: ContactsRepository) {}

  async execute(id: number): Promise<ObtenerContactoDto> {
    console.log(1122323, id);
    return await this.contactosRepository.findOne(id as any);
  }
}
