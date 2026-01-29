'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (!cookieConsent) {
      setIsVisible(true)
    }
    setIsLoading(false)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    document.cookie = 'cookie-consent=accepted; max-age=31536000; path=/'
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    document.cookie = 'cookie-consent=rejected; max-age=31536000; path=/'
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (isLoading || !isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-r from-primary/20 via-background to-accent/20 border border-secondary/50 rounded-lg p-6 backdrop-blur-sm">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-foreground/10 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="pr-8">
            <h3 className="text-lg font-bold mb-2 text-secondary">
              🍪 Cookie Consent
            </h3>
            <p className="text-sm text-foreground/70 mb-4">
              We use cookies to enhance your browsing experience, analyze site traffic, and deliver personalized content. By clicking "Accept", you consent to our use of cookies. You can manage your preferences in our{' '}
              <a href="#" className="text-secondary hover:text-primary transition-colors underline">
                Cookie Policy
              </a>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                Accept All
              </button>
              <button
                onClick={handleReject}
                className="px-6 py-2 border-2 border-secondary text-secondary font-bold rounded-lg hover:bg-secondary/10 transition-all"
              >
                Reject
              </button>
              <a
                href="#"
                className="px-6 py-2 flex items-center justify-center text-secondary font-bold hover:text-primary transition-colors"
              >
                Customize
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
