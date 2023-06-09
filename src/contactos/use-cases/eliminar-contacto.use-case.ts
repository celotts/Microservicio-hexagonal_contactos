import { Injectable } from '@nestjs/common';
import { ContactosRepository } from '../repositories/contactos.repository';

@Injectable()
export class EliminarContactoUseCase {
  constructor(private readonly contactosRepository: ContactosRepository) {}

  async execute(id: number): Promise<void> {
    await this.contactosRepository.delete(id);
  }
}
