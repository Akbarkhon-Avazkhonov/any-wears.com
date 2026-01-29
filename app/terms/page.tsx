'use client'

import { Footer } from '@/components/footer'

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
          Terms of <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Service</span>
        </h1>
        <p className="text-foreground/70 mb-8">Last updated: January 2025</p>

        <div className="space-y-8 text-foreground/80">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-secondary">1. Agreement to Terms</h2>
            <p>By accessing and using Any-Wears, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-secondary">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Any-Wears for personal, non-commercial transitory viewing only.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-secondary">3. Disclaimer</h2>
            <p>The materials on Any-Wears are provided on an 'as is' basis. Any-Wears makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-secondary">4. Limitations</h2>
            <p>In no event shall Any-Wears or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Any-Wears.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-secondary">5. Accuracy of Materials</h2>
            <p>The materials appearing on Any-Wears could include technical, typographical, or photographic errors. Any-Wears does not warrant that any of the materials on its website are accurate, complete, or current.</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
