import { useQuery } from "@tanstack/react-query"

import { AppAxiosGetInstance } from "../../__core/core.api"
import { WeatherResponse } from "./weather.type"

export async function getWeatherHistory(
  latitude: string,
  longitude: string
): Promise<WeatherResponse> {
  const path = `?lon=${longitude}&lat=${latitude}&ac=0&unit=metric&output=json&tzshift=0`
  return AppAxiosGetInstance({ path })
    .get("")
    .then((result) => {
      console.log(
        "🚀 ~ file: weather.service.ts ~ line 18 ~ result",
        result + latitude + longitude
      )
      return result.data
    })
}

export const useWeatherService = (latitude, longitude) => {
  return useQuery(
    [`weatherFor${latitude}${longitude}`],
    () => getWeatherHistory(latitude, longitude),
    {
      enabled: true,
    }
  )
}
