import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactosService } from './../../contactos/contacts/services/contactos.service';
import { ContactosRepository } from './../../contactos/contacts/repositories/contactos.repository';
import { ContactosController } from './../../contactos/contacts/controller/contactos.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfiguration } from './../../database.configuration';
import { Contactos } from './../../contactos/contacts/entities/contactos.entity';
@Module({
  //imports: [TypeOrmModule.forFeature([ContactosRepository])],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => DatabaseConfiguration.getConfig(),
    }),
    TypeOrmModule.forFeature([Contactos, ContactosRepository]),
  ],
  controllers: [ContactosController],
  providers: [ContactosService],
  exports: [ContactosService],
})
export class ContactsModule {}
