import { Module } from '@nestjs/common';
import { ContactsModule } from './contactos/contacts/contacts.module';
@Module({
  //imports: [TypeOrmModule.forFeature([ContactosRepository])],
  imports: [ContactsModule],
})
export class ContactoModule {}
