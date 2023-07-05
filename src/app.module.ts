import { Module } from '@nestjs/common';
// *file env
import { ConfigModule } from '@nestjs/config';
//* typeorm
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'medical-office',
      username: 'lh6ecnvuzv41a5pozo1q',
      host: 'aws.connect.psdb.cloud',
      password: 'pscale_pw_bOZZDah44wElDNeJKj9u3DBZWGX8dF4D6WbLEvSequk',

      /* entities: [],
      synchronize: true,
      autoLoadEntities: true, */
      insecureAuth: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
