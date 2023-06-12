import { Contacto } from './../../../domain/models/contacto.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactoEntity } from '../../database/entities/contactos.entity';
import { ContactosRepository } from '../../../domain/repositories/contactos.repository';

export class ContactosRepositoryImpl implements ContactosRepository {
  constructor(
    @InjectRepository(ContactoEntity)
    private readonly repository: Repository<ContactoEntity>,
  ) {}

  async create(contacto: Contacto): Promise<void> {
    const entity = new ContactoEntity();
    entity.nombre = contacto.nombre;
    entity.email = contacto.email;
    entity.edad = contacto.edad;
    await this.repository.save(entity);
    contacto.idContacto = entity.idContacto;
  }

  async findById(idContacto: number): Promise<Contacto> {
    const entity = await this.repository.findOne(idContacto as any);
    if (entity) {
      return new Contacto(entity.nombre, entity.email, entity.edad);
    }
    return null;
  }

  async findAll(): Promise<Contacto[]> {
    const entities = await this.repository.find();
    return entities.map(
      (entity) => new Contacto(entity.nombre, entity.email, entity.edad),
    );
  }

  async update(idContacto: number, actualizarContactoDto: any): Promise<void> {
    await this.repository.update(idContacto, actualizarContactoDto);
  }

  async deleteById(idContacto: number): Promise<void> {
    await this.repository.delete(idContacto);
  }
}
