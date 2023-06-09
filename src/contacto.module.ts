import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactosService } from './contactos/services/contactos.service';
import { ContactosRepository } from './contactos/repositories/contactos.repository';
import { ContactosController } from './contactos/controller/contactos.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfiguration } from './database.configuration';
import { Contactos } from './contactos/entities/contactos.entity';
@Module({
  //imports: [TypeOrmModule.forFeature([ContactosRepository])],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => DatabaseConfiguration.getConfig(),
    }),
    TypeOrmModule.forFeature([Contactos, ContactosRepository]),
    ContactoModule,
  ],
  controllers: [ContactosController],
  providers: [ContactosService],
  exports: [ContactosService],
})
export class ContactoModule {}
