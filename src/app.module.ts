import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './components/products/products.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://admin:admin@cluster0.ilbdz.mongodb.net/streetGearDB?retryWrites=true&w=majority", { autoCreate: true }),
           ProductsModule],
})
export class AppModule {}
