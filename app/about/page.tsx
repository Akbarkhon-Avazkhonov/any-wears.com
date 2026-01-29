'use client'

import { Footer } from '@/components/footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="pt-32 px-6 md:px-12 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              About Any-Wears
            </span>
          </h1>
          <p className="text-xl text-foreground/60 mb-12">
            Discover the story behind our brand
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-6 md:px-12 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Mission */}
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-background to-accent/5 p-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              At Any-Wears, we believe style has no borders. Our mission is to democratize fashion by bringing curated, cutting-edge pieces directly to fashion enthusiasts worldwide. We celebrate individuality, self-expression, and the bold choices that make you stand out.
            </p>
          </div>

          {/* Story */}
          <div className="rounded-2xl border border-secondary/20 bg-gradient-to-br from-card via-background to-secondary/5 p-12">
            <h2 className="text-3xl font-bold mb-4 text-secondary">Our Story</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              Founded in 2023, Any-Wears emerged from a simple observation: the best fashion exists at the intersection of street culture and haute couture. What started as a passion project quickly evolved into a global community of style innovators.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Today, we partner with emerging designers and established brands to bring you collections that reflect the latest trends while honoring timeless style principles.
            </p>
          </div>

          {/* Values */}
          <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-card via-background to-accent/5 p-12">
            <h2 className="text-3xl font-bold mb-6 text-accent">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Authenticity</h3>
                <p className="text-foreground/70">Every piece tells a story and reflects genuine creative vision.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Accessibility</h3>
                <p className="text-foreground/70">Premium fashion shouldn't be exclusive. We believe style is for everyone.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-accent mb-2">Innovation</h3>
                <p className="text-foreground/70">We constantly push boundaries and explore new ways to express style.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-pink-400">Sustainability</h3>
                <p className="text-foreground/70">Quality pieces that last, with a commitment to responsible sourcing.</p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="rounded-2xl border border-foreground/10 bg-gradient-to-br from-card via-background to-primary/5 p-12">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Any-Wears is powered by a diverse team of fashion enthusiasts, designers, developers, and creatives who share one vision: making fashion more inclusive, exciting, and accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
