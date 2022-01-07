import { Injectable } from '@nestjs/common'
import axios from 'axios'

interface IRequest {
  params: {
    id: string
  }
  query: {
    vs_currency: string
    days: number
    interval?: number
  }
}

@Injectable()
export class ApiCoingeckoService {
  async getMarketChart(req: IRequest): Promise<object> {
    try {
      const res = await axios.get(
        `${process.env.COINGECKO_URL}/coins/${req.params.id}/market_chart`,
        {
          params: {
            vs_currency: req.query.vs_currency,
            days: req.query.days,
            interval: req.query.interval
          }
        }
      )

      return res.data
    } catch (error) {
      console.error(error.response.data)
    }
  }
}
