import { Module } from '@nestjs/common';
import { ContactsModule } from './contactos/contacts/contact.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfiguration } from './database.configuration';
import { Contactos } from './contactos/contacts/entities/contact.entity';
import { ContactsRepository } from './contactos/contacts/repositories/contactos.repository';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => DatabaseConfiguration.getConfig(),
    }),
    TypeOrmModule.forFeature([Contactos]),
    ContactsModule,
  ],
})
export class ContactoModule {}
