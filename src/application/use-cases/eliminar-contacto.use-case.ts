import { Injectable } from '@nestjs/common';
import { ContactosRepository } from '../../domain/repositories/contactos.repository';

@Injectable()
export class EliminarContactoUseCase {
  constructor(private readonly contactosRepository: ContactosRepository) {}

  async execute(idContacto: number): Promise<void> {
    await this.contactosRepository.deleteById(idContacto);
  }
}
