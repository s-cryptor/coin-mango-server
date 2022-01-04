import { Injectable } from '@nestjs/common'
import axios from 'axios'

interface IQuery {
  start?: string
  limit?: string
  sort?: string
  symbol?: string
  aux?: string
}

@Injectable()
export class ApiCmcService {
  async getMap(query: IQuery): Promise<object> {
    const res = await axios.get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map`,
      {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.CMC_TOKEN
        },
        params: {
          start: +query.start,
          limit: +query.limit,
          sort: query.sort
        }
      }
    )

    return res.data
  }

  async getListingsLatest(query: IQuery): Promise<object> {
    const res = await axios.get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
      {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.CMC_TOKEN
        },
        params: {
          start: +query.start,
          limit: +query.limit
        }
      }
    )

    return res.data
  }
}
