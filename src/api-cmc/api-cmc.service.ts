import { Injectable } from '@nestjs/common'
import axios from 'axios'

interface IQuery {
  start: string
  limit: string
  convert: string
}

@Injectable()
export class ApiCmcService {
  async getMap(query: IQuery): Promise<object> {
    const res = await axios.get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
      {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.CMC_TOKEN
        },
        params: {
          start: +query.start,
          limit: +query.limit,
          convert: query.convert
        }
      }
    )

    return res.data
  }
}
