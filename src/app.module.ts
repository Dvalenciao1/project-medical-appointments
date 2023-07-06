import { Module } from '@nestjs/common';
// *file env
import { ConfigModule } from '@nestjs/config';
//* typeorm
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicalInvoiceModule } from './medical-invoice/medical-invoice.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASS,
      entities: [
        __dirname + '/../**/*.entity{.ts}',
      __dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    MedicalInvoiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
