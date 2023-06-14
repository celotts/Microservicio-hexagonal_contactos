import { Injectable } from '@nestjs/common';
import { ContactosService } from '../services/contactos.service';
import { ObtenerContactoDto } from '../dtos/obtener-contacto.dto';
import { ContactsRepository } from '../repositories/contactos.repository';

@Injectable()
export class ObtenerContactoAllUseCase {
  constructor(private readonly contactosRepository: ContactsRepository) {}

  async execute(): Promise<ObtenerContactoDto[]> {
    return await this.contactosRepository.findAll();
  }
}
