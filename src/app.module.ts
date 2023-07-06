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
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [
        __dirname + '/../**/*.entity{.ts}',
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    MedicalInvoiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
