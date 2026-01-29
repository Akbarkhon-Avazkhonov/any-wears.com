'use client'

import { Footer } from '@/components/footer'

export default function Careers() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
          Join Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Team</span>
        </h1>
        <p className="text-xl text-foreground/70 mb-12">Build your career with Any-Wears</p>

        <div className="space-y-8">
          <section className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-background to-accent/5">
            <h2 className="text-2xl font-bold mb-4">Open Positions</h2>
            <p className="text-foreground/70 mb-4">We're always looking for talented individuals to join our growing team. Check back soon for exciting opportunities!</p>
            <p className="text-foreground/60">For inquiries about career opportunities, please email us at careers@any-wears.com</p>
          </section>

          <section className="p-8 rounded-2xl border border-secondary/20 bg-gradient-to-br from-card via-background to-accent/5">
            <h2 className="text-2xl font-bold mb-4">Why Work With Us</h2>
            <ul className="space-y-3 text-foreground/70">
              <li>✓ Innovative Work Environment</li>
              <li>✓ Competitive Compensation</li>
              <li>✓ Career Growth Opportunities</li>
              <li>✓ Flexible Work Arrangements</li>
              <li>✓ Employee Benefits Package</li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
