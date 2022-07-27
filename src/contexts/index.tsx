import React, { ReactNode } from "react"

import { WeatherProvider } from "./weather/weather.context"

export const ContextProvider = ({ children }: { children?: ReactNode }) => {
  return <WeatherProvider> {children}</WeatherProvider>
}
