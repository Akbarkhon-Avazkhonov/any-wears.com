'use client'

import { Footer } from '@/components/footer'

export default function Help() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
          Help & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Support</span>
        </h1>
        <p className="text-xl text-foreground/70 mb-12">We're here to help you with any questions or concerns</p>

        <div className="space-y-8">
          <section className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-background to-accent/5">
            <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
            <div className="space-y-3 text-foreground/70">
              <p>Email: support@any-wears.com</p>
              <p>Phone: +1 (404) 765-2250</p>
              <p>Address: 891 Despard Street, East Point, Georgia 30344, USA</p>
            </div>
          </section>

          <section className="p-8 rounded-2xl border border-secondary/20 bg-gradient-to-br from-card via-background to-accent/5">
            <h2 className="text-2xl font-bold mb-4">Common Questions</h2>
            <ul className="space-y-2 text-foreground/70">
              <li>✓ How long does shipping take?</li>
              <li>✓ Can I track my order?</li>
              <li>✓ What payment methods do you accept?</li>
              <li>✓ Do you offer gift cards?</li>
              <li>✓ How can I get a refund?</li>
            </ul>
          </section>

          <section className="p-8 rounded-2xl border border-accent/20 bg-gradient-to-br from-card via-background to-accent/5">
            <h2 className="text-2xl font-bold mb-4">Response Time</h2>
            <p className="text-foreground/70">
              Our support team typically responds within 24 hours during business days. We're here to make sure you have the best experience possible!
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
