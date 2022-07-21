import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { RefresherStack } from "../src/navigation/routes"
import { ContextProvider } from "../src/contexts/core.context"

const queryClient = new QueryClient()

/**
 * Start the application
 * @returns
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <RefresherStack></RefresherStack>
      </ContextProvider>
    </QueryClientProvider>
  )
}

export default App
