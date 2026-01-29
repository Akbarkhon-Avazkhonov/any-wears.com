'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { Footer } from '@/components/footer'

const categories = [
  { name: 'The Runway', icon: '👗', color: 'from-pink-500 to-purple-600' },
  { name: 'The Drip', icon: '👟', color: 'from-cyan-400 to-blue-500' },
  { name: 'The Gems', icon: '✨', color: 'from-yellow-400 to-pink-500' },
  { name: 'The Glow', icon: '💫', color: 'from-purple-500 to-pink-600' },
  { name: 'The Vibe', icon: '🎨', color: 'from-cyan-300 to-purple-500' },
]

const products = [
  { name: 'Iridescent Jacket', price: '$299', category: 'The Runway', image: '/products/iridescent-jacket.jpg', slug: 'iridescent-jacket' },
  { name: 'Neon Sneakers', price: '$189', category: 'The Drip', image: '/products/neon-sneakers.jpg', slug: 'neon-sneakers' },
  { name: 'Diamond Choker', price: '$449', category: 'The Gems', image: '/products/diamond-choker.jpg', slug: 'diamond-choker' },
  { name: 'Holographic Dress', price: '$399', category: 'The Runway', image: '/products/holographic-dress.jpg', slug: 'holographic-dress' },
  { name: 'Smart Watch Pro', price: '$599', category: 'The Glow', image: '/products/smart-watch.jpg', slug: 'smart-watch-pro' },
  { name: 'Platform Boots', price: '$269', category: 'The Drip', image: '/products/platform-boots.jpg', slug: 'platform-boots' },
  { name: 'Gold Chain Necklace', price: '$349', category: 'The Gems', image: '/products/gold-chain.jpg', slug: 'gold-chain-necklace' },
  { name: 'Cyber Jacket', price: '$459', category: 'The Runway', image: '/products/cyber-jacket.jpg', slug: 'cyber-jacket' },
  { name: 'LED Sneakers', price: '$279', category: 'The Drip', image: '/products/led-sneakers.jpg', slug: 'led-sneakers' },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="pt-32 px-6 md:px-12 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-6xl md:text-7xl font-black mb-4 tracking-tighter">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Our Collections
              </span>
            </h1>
            <p className="text-xl text-foreground/60">Explore our carefully curated products</p>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-foreground/10 bg-gradient-to-br from-card via-background to-accent/5 hover:border-secondary/50 transition-all cursor-pointer group"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-lg group-hover:text-secondary transition-colors">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 md:px-12 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-background to-accent/5 backdrop-blur-sm hover:border-secondary/50 transition-all hover:scale-105 cursor-pointer"
              >
                {/* Product Image */}
                <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                </div>

                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-3">{product.category}</p>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-bold hover:shadow-lg hover:shadow-primary/50 transition-all text-center"
                    >
                      Read More
                    </Link>
                    
                  </div>

                  
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
