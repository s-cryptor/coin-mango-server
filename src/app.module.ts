import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ApiCmcController } from './api-cmc/api-cmc.controller'
import { ApiCmcService } from './api-cmc/api-cmc.service'
import { ApiCoingeckoController } from './api-coingecko/api-coingecko.controller'
import { ApiCoingeckoService } from './api-coingecko/api-coingecko.service'

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ApiCmcController, ApiCoingeckoController],
  providers: [AppService, ApiCmcService, ApiCoingeckoService]
})
export class AppModule {}
