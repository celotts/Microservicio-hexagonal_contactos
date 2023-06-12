import { Injectable } from '@nestjs/common';
import { Contacto } from '../../domain/models/contacto.model';
import { ContactosRepository } from '../../domain/repositories/contactos.repository';

@Injectable()
export class ObtenerContactoAllUseCase {
  constructor(private readonly contactosRepository: ContactosRepository) {}

  async execute(): Promise<Contacto[]> {
    return this.contactosRepository.findAll();
  }
}
