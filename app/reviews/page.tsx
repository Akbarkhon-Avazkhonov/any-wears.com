'use client'

import Link from "next/link"
import { ArrowLeft, Star } from 'lucide-react'
import { Footer } from '@/components/footer'

export default function ReviewsPage() {
  const reviews = [
    {
      author: 'Emma Rodriguez',
      rating: 5,
      title: 'Absolutely Love It!',
      content: 'The quality is exceptional and the design is exactly what I was looking for. Any-Wears nailed it with this collection.',
      category: 'The Runway',
    },
    {
      author: 'David Chen',
      rating: 5,
      title: 'Best Purchase Ever',
      content: 'Fast shipping, amazing customer service, and the product exceeded my expectations. Highly recommend!',
      category: 'The Drip',
    },
    {
      author: 'Olivia Martinez',
      rating: 5,
      title: 'Perfect Quality',
      content: 'The attention to detail is incredible. This is premium fashion at an accessible price point.',
      category: 'The Gems',
    },
    {
      author: 'James Wilson',
      rating: 5,
      title: 'My New Favorite Brand',
      content: 'I\'ve purchased multiple items from Any-Wears and every single one has been perfect. Definitely a repeat customer!',
      category: 'The Runway',
    },
    {
      author: 'Sophie Anderson',
      rating: 5,
      title: 'Incredible Style',
      content: 'Their unique aesthetic really stands out. I get compliments every time I wear my Any-Wears pieces.',
      category: 'The Vibe',
    },
    {
      author: 'Lucas Thompson',
      rating: 5,
      title: 'Worth Every Penny',
      content: 'The durability and design justify the price. These pieces are investments in your wardrobe.',
      category: 'The Glow',
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="pt-32 px-6 md:px-12 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-black mb-4 tracking-tighter">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Customer Reviews
            </span>
          </h1>
          <p className="text-xl text-foreground/60">
            Loved by thousands of style enthusiasts worldwide
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-12 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
          <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-card via-background to-accent/5 p-6 text-center">
            <div className="text-4xl font-bold text-primary">4.9</div>
            <p className="text-sm text-foreground/60 mt-2">Average Rating</p>
          </div>
          <div className="rounded-xl border border-secondary/20 bg-gradient-to-br from-card via-background to-secondary/5 p-6 text-center">
            <div className="text-4xl font-bold text-secondary">5000+</div>
            <p className="text-sm text-foreground/60 mt-2">Happy Customers</p>
          </div>
          <div className="rounded-xl border border-accent/20 bg-gradient-to-br from-card via-background to-accent/5 p-6 text-center">
            <div className="text-4xl font-bold text-accent">98%</div>
            <p className="text-sm text-foreground/60 mt-2">Would Recommend</p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="px-6 md:px-12 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-foreground/10 bg-gradient-to-br from-card via-background to-primary/5 p-8 hover:border-secondary/50 transition-all"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Title and Content */}
                <h3 className="text-xl font-bold mb-2 text-secondary">{review.title}</h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">{review.content}</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                  <div>
                    <p className="font-bold text-foreground">{review.author}</p>
                    <p className="text-sm text-foreground/60">{review.category}</p>
                  </div>
                  <div className="text-2xl">⭐</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-2xl border border-primary/50 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-12">
            <h2 className="text-4xl font-bold mb-4">Share Your Experience</h2>
            <p className="text-foreground/70 mb-6">Have you tried Any-Wears? We'd love to hear from you!</p>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
