import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ApiCmcController } from './api-cmc/api-cmc.controller'
import { ApiCmcService } from './api-cmc/api-cmc.service'

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ApiCmcController],
  providers: [AppService, ApiCmcService]
})
export class AppModule {}
