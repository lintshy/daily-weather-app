import React, {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react"

import { WeatherContextDef } from "./weather.type"
import { defaultCoordinates } from "../../config/config"
import { useWeatherService } from "../../services/weather/weather.service"
import {
  DataSeries,
  WeatherResponse,
} from "../../services/weather/weather.type"
import { getCurrentWeather, mapWeatherResponse } from "./weather.util"

export const WeatherContext = createContext<WeatherContextDef>(null)
export const useWeather = () => useContext(WeatherContext)

export const WeatherProvider = ({ children }: { children?: ReactNode }) => {
  const [dailyForecast, setDailyForecast] = useState<DataSeries[]>()
  const [currentWeather, setCurrentWeather] = useState<DataSeries>()
  const [coordinates, setCoordinates] = useState({
    latitude: defaultCoordinates.latitude,
    longitude: defaultCoordinates.longitude,
  })
  const {
    isError: isWeatherLoadError,
    isLoading: isWeatherLoading,
    data: weatherData,
  } = useWeatherService(coordinates.latitude, coordinates.longitude)

  console.log(
    "🚀 ~ file: weather.context.tsx ~ line 32 ~ useEffect ~ weatherData",
    weatherData
  )
  useEffect(() => {
    if (weatherData) {
      setDailyForecast(mapWeatherResponse(weatherData))
      setCurrentWeather(getCurrentWeather(weatherData))
    }
  }, [weatherData])

  const value: WeatherContextDef = {
    coordinates,
    dailyForecast,
    isWeatherLoading,
    isWeatherLoadError,
    setCoordinates,
    currentWeather,
  }

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  )
}
