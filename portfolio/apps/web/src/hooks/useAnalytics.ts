import { useCallback } from 'react'

type EventName = 
  | 'project_view'
  | 'project_click'
  | 'contact_submit'
  | 'social_click'
  | 'whatsapp_click'
  | 'resume_download'
  | 'navigation_click'
  | 'skill_hover'
  | 'review_click'
  | 'back_to_top_click'

interface EventProperties {
  [key: string]: string | number | boolean | undefined
}

export function useAnalytics() {
  const trackEvent = useCallback((eventName: EventName, properties?: EventProperties) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        ...properties,
        timestamp: new Date().toISOString()
      })
    } else {
      console.log(`[Analytics] ${eventName}:`, properties)
    }
  }, [])

  return { trackEvent }
}
