import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ApiCoingeckoController } from './api-coingecko/api-coingecko.controller'
import { ApiCoingeckoService } from './api-coingecko/api-coingecko.service'

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ApiCoingeckoController],
  providers: [AppService, ApiCoingeckoService]
})
export class AppModule {}
