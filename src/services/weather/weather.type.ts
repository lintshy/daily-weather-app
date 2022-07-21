export type WeatherResponse = {
  product: string
  init: string
  dataseries: DataSeries[]
}

export type DataSeries = {
  timepoint: number
  cloudcover: number
  seeing: number
  transparency: number
  lifted_index: number
  rh2m: number
  wind10m: Wind10m
  temp2m: string
  prec_type: string
  timeOfDay?: Date
  date?: string
  value?: number
}

export type Wind10m = {
  direction: string
  speed: number
}
