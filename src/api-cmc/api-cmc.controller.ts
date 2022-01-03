import { Controller, Get, Query } from '@nestjs/common'
import { ApiCmcService } from './api-cmc.service'

@Controller()
export class ApiCmcController {
  constructor(private readonly apiCmcService: ApiCmcService) {}

  @Get('/api/cmc/cryptocurrency/map')
  getMap(@Query() query): object {
    return this.apiCmcService.getMap(query)
  }
}
