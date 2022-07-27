import {
  WeatherResponse,
  DataSeries,
} from "../../services/weather/weather.type"

export type WeatherContextDef = {
  dailyForecast: DataSeries[]
  coordinates: {
    latitude: string
    longitude: string
  }
  isWeatherLoading: boolean
  isWeatherLoadError: boolean
  setCoordinates?: React.Dispatch<
    React.SetStateAction<{
      latitude: string
      longitude: string
    }>
  >
  currentWeather?: DataSeries
}
