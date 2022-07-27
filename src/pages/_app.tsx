import React from "react"
import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Provider } from "react-redux"

import { ContextProvider } from "../contexts"
import { store } from "../__core/core.store"

const queryClient = new QueryClient()
function WeatherApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </Provider>
    </QueryClientProvider>
  )
}

export default WeatherApp
