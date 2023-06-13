import { Injectable } from '@nestjs/common';
import { ContactsRepository } from '../repositories/contactos.repository';

@Injectable()
export class EliminarContactoUseCase {
  constructor(private readonly contactosRepository: ContactsRepository) {}

  async execute(id: number): Promise<void> {
    await this.contactosRepository.delete(id);
  }
}
