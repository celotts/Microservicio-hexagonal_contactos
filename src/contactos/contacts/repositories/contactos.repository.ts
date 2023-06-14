import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contactos } from '../entities/contact.entity';

@Injectable()
export class ContactsRepository {
  constructor(
    @InjectRepository(Contactos)
    private readonly repository: Repository<Contactos>,
  ) {}

  async findAll(): Promise<Contactos[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Contactos> {
    return this.repository.findOne({
      where: { idContacto: id },
    });
  }

  async create(contactData: Partial<Contactos>): Promise<Contactos> {
    const contact = this.repository.create(contactData);
    return this.repository.save(contact);
  }

  async update(
    idContacto: number,
    contactData: Partial<Contactos>,
  ): Promise<Contactos> {
    await this.repository.update(idContacto as any, contactData);
    return await this.repository.findOne({ where: { idContacto: idContacto } });
  }

  async delete(id: number): Promise<any> {
    return await this.repository.delete(id);
  }
}
