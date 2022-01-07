import { Controller, Get, Request } from '@nestjs/common'
import { ApiCoingeckoService } from './api-coingecko.service'

@Controller()
export class ApiCoingeckoController {
  constructor(private readonly apiCoingeckoService: ApiCoingeckoService) {}

  @Get('/api/coingecko/coins/:id/market_chart')
  getMap(@Request() req): object {
    return this.apiCoingeckoService.getMarketChart(req)
  }
}
