'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    setEmail('')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-400/10" />
      
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-cyan-500/40 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cyan-400/20 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-500/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Main Title */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-fade-in">
          Coming
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 animate-pulse-glow">
            Soon
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed animate-slide-up">
          We're working on something <span className="text-cyan-400 font-semibold">amazing</span>.
          <br className="hidden md:block" />
          Be the first to know when we launch.
        </p>

        {/* Email Form */}
        <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center min-w-[120px]"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <span>Joining...</span>
                  </div>
                ) : (
                  <>Notify Me</>
                )}
              </button>
            </form>
          ) : (
            <div className="max-w-md mx-auto animate-fade-in">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">You're all set!</h3>
              <p className="text-gray-400">We'll notify you as soon as we launch. Thank you for your interest!</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-16 text-gray-500 text-sm animate-fade-in" style={{animationDelay: '0.6s'}}>
          <p>No spam, just updates. Unsubscribe anytime.</p>
        </div>
      </div>
    </main>
  )
}