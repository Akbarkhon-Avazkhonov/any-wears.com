'use client'

import { Footer } from '@/components/footer'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
          Privacy <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Policy</span>
        </h1>
        <p className="text-foreground/70 mb-8">Last updated: January 2025</p>

        <div className="space-y-8 text-foreground/80">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-secondary">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-secondary">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-secondary">3. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-secondary">4. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. Contact us at privacy@any-wears.com to exercise these rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-secondary">5. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at privacy@any-wears.com</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
