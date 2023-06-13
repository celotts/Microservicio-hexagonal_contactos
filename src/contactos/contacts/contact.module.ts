import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactosService } from './services/contactos.service';
import { ContactosController } from './controller/contactos.controller';
import { Contactos } from './entities/contact.entity';
import { ContactsRepository } from './repositories/contactos.repository';

@Module({
  //imports: [TypeOrmModule.forFeature([ContactosRepository])],
  imports: [TypeOrmModule.forFeature([Contactos, ContactsRepository])],
  controllers: [ContactosController],
  providers: [ContactosService],
  exports: [ContactosService],
})
export class ContactsModule {}
