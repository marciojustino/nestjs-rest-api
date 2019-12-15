import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentModule } from './environment/environment.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    EnvironmentModule,
    PersonModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
