import React, { createContext, useContext, ReactNode } from 'react'
import { useAnalytics } from '../hooks/useAnalytics'

const AnalyticsContext = createContext<ReturnType<typeof useAnalytics> | null>(null)

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const analytics = useAnalytics()
  return (
    <AnalyticsContext.Provider value={analytics}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export function useAnalyticsContext() {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error('useAnalyticsContext must be used within AnalyticsProvider')
  }
  return context
}
