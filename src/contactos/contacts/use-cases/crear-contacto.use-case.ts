import { Injectable } from '@nestjs/common';
import { ContactsRepository } from '../repositories/contactos.repository';
import { CreateContactDto } from '../dtos/crear-contact.dto';

@Injectable()
export class CrearContactoUseCase {
  constructor(private readonly contactosRepository: ContactsRepository) {}

  async execute(crearContactoDto: CreateContactDto): Promise<any> {
    const contacto = await this.contactosRepository.create(
      crearContactoDto as any,
    );
    await this.contactosRepository.create(contacto as any);
    return contacto;
  }
}
