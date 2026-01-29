'use client'

import { Footer } from '@/components/footer'

export default function Returns() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
          Returns & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Refunds</span>
        </h1>
        <p className="text-xl text-foreground/70 mb-12">We want you to be completely satisfied with your purchase</p>

        <div className="space-y-8">
          <section className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-background to-accent/5">
            <h2 className="text-2xl font-bold mb-4">30-Day Money-Back Guarantee</h2>
            <p className="text-foreground/80 mb-4">
              We offer a full refund on any item within 30 days of purchase if you're not completely satisfied. No questions asked.
            </p>
            <ul className="space-y-2 text-foreground/70">
              <li>✓ Item must be in original condition</li>
              <li>✓ All tags and packaging must be intact</li>
              <li>✓ Include proof of purchase</li>
              <li>✓ Free return shipping available</li>
            </ul>
          </section>

          <section className="p-8 rounded-2xl border border-secondary/20 bg-gradient-to-br from-card via-background to-accent/5">
            <h2 className="text-2xl font-bold mb-4">How to Return</h2>
            <ol className="space-y-3 text-foreground/70">
              <li>1. Contact us at returns@any-wears.com with your order number</li>
              <li>2. Receive prepaid return shipping label</li>
              <li>3. Ship item back in original packaging</li>
              <li>4. Refund processed within 7-10 business days</li>
            </ol>
          </section>

          <section className="p-8 rounded-2xl border border-accent/20 bg-gradient-to-br from-card via-background to-accent/5">
            <h2 className="text-2xl font-bold mb-4">Questions?</h2>
            <p className="text-foreground/70">Contact our support team at support@any-wears.com or call us at +1 (404) 765-2250</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
