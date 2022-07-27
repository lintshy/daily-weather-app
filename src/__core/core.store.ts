import { configureStore } from "@reduxjs/toolkit"

import WeatherReducer from "../slices/weather/weather.slice"

export const store = configureStore({
  reducer: {
    weather: WeatherReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
