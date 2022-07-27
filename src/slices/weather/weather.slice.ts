import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
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
import {
  getCurrentWeather,
  mapWeatherResponse,
} from "../../contexts/weather/weather.util"

const initialState: WeatherContextDef = {
  coordinates: defaultCoordinates,
  dailyForecast: [],
  isWeatherLoading: false,
  isWeatherLoadError: false,
  currentWeather: null,
}

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCoordinates: (
      state,
      action: PayloadAction<{
        latitude: string
        longitude: string
      }>
    ) => {
      console.log(state, action)
      state.coordinates = {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCoordinates } = weatherSlice.actions

export default weatherSlice.reducer
