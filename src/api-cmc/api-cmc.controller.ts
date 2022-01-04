import { Controller, Get, Query } from '@nestjs/common'
import { ApiCmcService } from './api-cmc.service'

@Controller()
export class ApiCmcController {
  constructor(private readonly apiCmcService: ApiCmcService) {}

  @Get('/api/cmc/cryptocurrency/map')
  getMap(@Query() query): object {
    return this.apiCmcService.getMap(query)
  }

  @Get('/api/cmc/cryptocurrency/listings/latest')
  getListingsLatest(@Query() query): object {
    return this.apiCmcService.getListingsLatest(query)
  }
}
