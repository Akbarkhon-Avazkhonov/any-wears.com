'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Heart, Star, TrendingUp, Zap, Award } from 'lucide-react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [likedProducts, setLikedProducts] = useState<number[]>([])
  const [notifiedItems, setNotifiedItems] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const products = [
    { name: 'Iridescent Jacket', price: '$299', category: 'The Runway', rating: 4.8, image: '/products/iridescent-jacket.jpg', slug: 'iridescent-jacket' },
    { name: 'Neon Sneakers', price: '$189', category: 'The Drip', rating: 4.9, image: '/products/neon-sneakers.jpg', slug: 'neon-sneakers' },
    { name: 'Diamond Choker', price: '$449', category: 'The Gems', rating: 4.7, image: '/products/diamond-choker.jpg', slug: 'diamond-choker' },
    { name: 'Holographic Dress', price: '$399', category: 'The Runway', rating: 5.0, image: '/products/holographic-dress.jpg', slug: 'holographic-dress' },
    { name: 'Smart Watch Pro', price: '$599', category: 'The Glow', rating: 4.6, image: '/products/smart-watch.jpg', slug: 'smart-watch-pro' },
    { name: 'Platform Boots', price: '$269', category: 'The Drip', rating: 4.9, image: '/products/platform-boots.jpg', slug: 'platform-boots' },
  ]

  const categories = [
    { name: 'Clothing', icon: '👗', count: '248 items' },
    { name: 'Footwear', icon: '👟', count: '156 items' },
    { name: 'Jewelry', icon: '✨', count: '89 items' },
    { name: 'Accessories', icon: '🎩', count: '342 items' },
  ]

  const reviews = [
    { name: 'Sarah M.', rating: 5, text: 'Best online shopping experience ever!' },
    { name: 'James L.', rating: 5, text: 'Quality products and fast shipping' },
    { name: 'Emma R.', rating: 4.5, text: 'Love the unique style and design' },
  ]

  const faqs = [
    { q: 'What is your return policy?', a: '30-day money-back guarantee on all purchases' },
    { q: 'Do you ship internationally?', a: 'Yes, we ship to 150+ countries worldwide' },
    { q: 'How long does shipping take?', a: 'Standard: 5-7 days, Express: 2-3 days' },
    { q: 'Are your products authentic?', a: '100% authentic with authenticity certificates' },
  ]

  const toggleLike = (idx: number) => {
    setLikedProducts(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    )
  }

  const handleNotifyMe = (itemName: string, idx: number) => {
    setNotifiedItems(prev => [...prev, idx])
    alert(`You'll be notified when ${itemName} is available!`)
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Section 1: Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-pulse" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-6 inline-block">
            <div className="px-4 py-2 rounded-full border border-secondary/50 bg-secondary/10 backdrop-blur-sm">
              <p className="text-sm font-semibold text-secondary">Limited Drop Now Live</p>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-lg">
              Style Without
            </span>
            <br />
            <span className="text-white">Borders</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto font-light">
            Curated clothing, footwear, and jewelry for the bold, the bright, and the beautiful. From street to suite, we have your any-wear.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/products"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105 text-center"
            >
              Explore Collection
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-secondary text-secondary font-bold rounded-lg hover:bg-secondary/10 transition-all text-center"
            >
              Learn More
            </Link>
          </div>

          <div className="flex justify-center animate-bounce">
            <ChevronDown className="w-8 h-8 text-secondary" />
          </div>
        </div>
      </section>

      {/* Section 2: Featured Products */}
      <section className="py-20 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Featured Collection
              </span>
            </h2>
            <p className="text-xl text-foreground/60">Handpicked pieces for the fashion-forward</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-background to-accent/5 backdrop-blur-sm hover:border-secondary/50 transition-all hover:scale-105 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-full h-48 rounded-lg overflow-hidden mb-6 relative bg-gradient-to-br from-primary/10 to-accent/10">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-4">{product.category}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-foreground/60">{product.rating}</span>
                    </div>
                  </div>
                  
                  
                  <Link
                    href={`/products/${product.slug}`}
                    className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all text-center block"
                  >
                    Read More
                  </Link>
                </div>

                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Categories */}
      <section className="py-20 px-6 md:px-12 relative z-10 bg-gradient-to-b from-background via-accent/5 to-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center tracking-tighter">
            Shop by <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Category</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl border border-secondary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 hover:border-secondary/50 transition-all hover:scale-105 cursor-pointer text-center"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">{cat.name}</h3>
                <p className="text-sm text-foreground/60">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="py-20 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center tracking-tighter">
            Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Any-Wears</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: 'Trending Styles', desc: 'Always updated with latest fashion trends' },
              { icon: Award, title: 'Premium Quality', desc: '100% authentic products with quality guarantee' },
              { icon: Zap, title: 'Fast Shipping', desc: 'Express delivery available worldwide' },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-background to-accent/5 text-center hover:border-secondary/50 transition-all">
                <item.icon className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Best Sellers */}
      <section className="py-20 px-6 md:px-12 relative z-10 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-center tracking-tighter">
            Best <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Sellers</span>
          </h2>
          <p className="text-center text-foreground/60 mb-16 text-xl">Our most loved items by customers</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.slice(0, 4).map((product, idx) => (
              <div key={idx} className="flex gap-6 p-6 rounded-xl border border-secondary/20 bg-gradient-to-r from-card via-background to-accent/5 hover:border-secondary/50 transition-all">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-sm text-foreground/60 mb-3">{product.category}</p>
                  <div className="flex items-center justify-between">
                    
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Customer Reviews */}
      <section className="py-20 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center tracking-tighter">
            Customer <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Reviews</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-background to-accent/5 hover:border-secondary/50 transition-all">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic">"{review.text}"</p>
                <p className="font-bold text-secondary">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: New Arrivals */}
      <section className="py-20 px-6 md:px-12 relative z-10 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-center tracking-tighter">
            New <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Arrivals</span>
          </h2>
          <p className="text-center text-foreground/60 mb-16 text-xl">Fresh drops every week</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: 'Tech Jacket Pro', image: '/products/upcoming-item-1.jpg' },
              { name: 'Holographic Backpack', image: '/products/upcoming-item-2.jpg' },
              { name: 'Smart Sunglasses', image: '/products/upcoming-item-3.jpg' },
              { name: 'Chrome Sneakers', image: '/products/upcoming-item-4.jpg' },
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl border border-secondary/20 bg-gradient-to-br from-card via-background to-accent/5 hover:border-secondary/50 transition-all hover:scale-105 cursor-pointer flex flex-col">
                <div className="aspect-square overflow-hidden relative bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 relative z-10 flex flex-col flex-grow">
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold">
                    NEW
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold mb-2 mt-2">{item.name}</h3>
                    <p className="text-sm text-foreground/60">Coming Soon</p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Newsletter */}
      <section className="py-20 px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border-2 border-primary/50 bg-gradient-to-br from-primary/10 via-background to-accent/10 backdrop-blur-sm p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
                Stay Updated with<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Latest Drops</span>
              </h2>
              <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get exclusive early access to new collections, special discounts, and style tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-lg bg-background/50 border border-foreground/20 focus:border-secondary outline-none text-foreground placeholder-foreground/50"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section className="py-20 px-6 md:px-12 relative z-10 bg-gradient-to-b from-background via-accent/5 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center tracking-tighter">
            Frequently Asked <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Questions</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-primary/20 bg-gradient-to-br from-card via-background to-accent/5 hover:border-secondary/50 transition-all">
                <h3 className="text-lg font-bold mb-3 text-secondary">{faq.q}</h3>
                <p className="text-foreground/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: CTA Footer */}
      <section className="py-20 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border-2 border-secondary/50 bg-gradient-to-b from-secondary/10 via-background to-accent/10 backdrop-blur-sm p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
              Ready to Find Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Perfect Style</span>?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Join thousands of style enthusiasts discovering their unique look today.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105 inline-block">
              Start Shopping Now
            </button>
          </div>

          <div className="mt-16 border-t border-foreground/10 pt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              
              <div>
                <h4 className="font-bold mb-4 text-secondary">Company</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
                  <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                  
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4 text-primary">Legal</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                  
                </ul>
              </div>
            </div>

            <div className="border-t border-foreground/10 pt-8">
              <div className="text-center text-sm text-foreground/50 mb-4">
                <p>&copy; 2025 Any-Wears. All rights reserved. Style Without Borders.</p>
              </div>
              <div className="text-center text-xs text-foreground/40 border-t border-foreground/10 pt-4">
                <p>As an Amazon Associate, we earn from qualifying purchases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
