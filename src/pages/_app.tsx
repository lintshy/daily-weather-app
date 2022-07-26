import React from "react"
import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { ContextProvider } from "../contexts/core.context"

const queryClient = new QueryClient()
function WeatherApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </QueryClientProvider>
  )
}

export default WeatherApp
