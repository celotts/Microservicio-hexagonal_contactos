import { Repository } from 'typeorm';
import { Contactos } from '../entities/contactos.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactosRepository extends Repository<Contactos> {}
