'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Heart, ShoppingCart, Star, ArrowLeft } from 'lucide-react'

const products: Record<string, {
  name: string
  price: string
  category: string
  image: string
  slug: string
  description: string
  rating: number
  reviews: number
  colors: string[]
  sizes: string[]
}> = {
  'iridescent-jacket': {
    name: 'Iridescent Jacket',
    price: '$299',
    category: 'The Runway',
    image: '/products/iridescent-jacket.jpg',
    slug: 'iridescent-jacket',
    description: 'Premium iridescent jacket with holographic finish. Perfect for making a statement with its mesmerizing color-shifting properties. Made with high-quality materials that catch light beautifully from every angle.',
    rating: 4.8,
    reviews: 128,
    colors: ['Holographic', 'Silver', 'Rainbow'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  'neon-sneakers': {
    name: 'Neon Sneakers',
    price: '$189',
    category: 'The Drip',
    image: '/products/neon-sneakers.jpg',
    slug: 'neon-sneakers',
    description: 'Eye-catching neon sneakers designed for street style enthusiasts. Features a comfortable sole and vibrant neon coloring that glows under UV light. Perfect for standing out in any crowd.',
    rating: 4.9,
    reviews: 256,
    colors: ['Neon Pink', 'Neon Green', 'Neon Purple', 'Neon Blue'],
    sizes: ['5', '6', '7', '8', '9', '10', '11', '12', '13'],
  },
  'diamond-choker': {
    name: 'Diamond Choker',
    price: '$449',
    category: 'The Gems',
    image: '/products/diamond-choker.jpg',
    slug: 'diamond-choker',
    description: 'Luxury diamond choker necklace with premium crystal stones. Elegant and timeless, this piece adds sophistication to any outfit. Features adjustable sizing for the perfect fit.',
    rating: 4.7,
    reviews: 89,
    colors: ['Silver', 'Gold', 'Rose Gold'],
    sizes: ['One Size'],
  },
  'holographic-dress': {
    name: 'Holographic Dress',
    price: '$399',
    category: 'The Runway',
    image: '/products/holographic-dress.jpg',
    slug: 'holographic-dress',
    description: 'Futuristic holographic dress that shimmers and changes colors as you move. Perfect for special events and parties. Made with breathable, comfortable fabric.',
    rating: 5.0,
    reviews: 142,
    colors: ['Rainbow', 'Silver', 'Pink'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  'smart-watch-pro': {
    name: 'Smart Watch Pro',
    price: '$599',
    category: 'The Glow',
    image: '/products/smart-watch.jpg',
    slug: 'smart-watch-pro',
    description: 'Advanced smartwatch with cutting-edge technology. Track your fitness, receive notifications, and stay connected. Features a stunning AMOLED display and long battery life.',
    rating: 4.6,
    reviews: 203,
    colors: ['Space Gray', 'Silver', 'Gold'],
    sizes: ['S', 'M', 'L'],
  },
  'platform-boots': {
    name: 'Platform Boots',
    price: '$269',
    category: 'The Drip',
    image: '/products/platform-boots.jpg',
    slug: 'platform-boots',
    description: 'Stylish platform boots with chunky sole. Perfect for edgy looks and cyberpunk aesthetic. Durable leather construction with comfortable inner lining.',
    rating: 4.9,
    reviews: 167,
    colors: ['Black', 'White', 'Chrome'],
    sizes: ['5', '6', '7', '8', '9', '10', '11', '12'],
  },
  'gold-chain-necklace': {
    name: 'Gold Chain Necklace',
    price: '$349',
    category: 'The Gems',
    image: '/products/gold-chain.jpg',
    slug: 'gold-chain-necklace',
    description: 'Classic gold chain necklace with premium finish. Timeless elegance that works with any style. Available in different link styles and lengths.',
    rating: 4.8,
    reviews: 95,
    colors: ['Gold', '18K Gold', 'Rose Gold'],
    sizes: ['16"', '18"', '20"', '22"', '24"'],
  },
  'cyber-jacket': {
    name: 'Cyber Jacket',
    price: '$459',
    category: 'The Runway',
    image: '/products/cyber-jacket.jpg',
    slug: 'cyber-jacket',
    description: 'Bold cyberpunk-inspired jacket with tech details and neon accents. High-quality materials with unique design elements. Perfect for making a futuristic fashion statement.',
    rating: 4.7,
    reviews: 110,
    colors: ['Black Neon', 'Silver Neon', 'Purple Neon'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  'led-sneakers': {
    name: 'LED Sneakers',
    price: '$279',
    category: 'The Drip',
    image: '/products/led-sneakers.jpg',
    slug: 'led-sneakers',
    description: 'High-tech LED sneakers with customizable light patterns. Perfect for festivals, parties, or just standing out. USB rechargeable with multiple color modes.',
    rating: 4.8,
    reviews: 189,
    colors: ['RGB', 'Single Color', 'Multi-Color'],
    sizes: ['5', '6', '7', '8', '9', '10', '11', '12', '13'],
  },
}

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = products[slug]

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products" className="text-secondary hover:text-primary transition-colors">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="pt-32 px-6 md:px-12 pb-8 relative z-10">
        <Link href="/products" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </Link>
      </div>

      {/* Product Detail */}
      <section className="px-6 md:px-12 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                    {product.category}
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter">
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    {product.name}
                  </span>
                </h1>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">{product.rating}</span>
                  <span className="text-foreground/60">({product.reviews} reviews)</span>
                </div>

                

                <p className="text-lg text-foreground/80 mb-8">{product.description}</p>

                {/* Colors */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Available Colors</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color, idx) => (
                      <button
                        key={idx}
                        className="px-4 py-2 rounded-lg border-2 border-secondary/50 bg-gradient-to-r from-primary/10 to-accent/10 hover:border-secondary transition-all text-sm font-medium"
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Available Sizes</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size, idx) => (
                      <button
                        key={idx}
                        className="px-4 py-2 rounded-lg border-2 border-primary/50 bg-gradient-to-r from-primary/10 to-accent/10 hover:border-primary transition-all text-sm font-medium hover:bg-primary/20"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-4">
                <a
                  href={`https://www.amazon.com/s?k=${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
                >
                  Buy on Amazon
                </a>
                
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-background to-accent/5">
              <h4 className="text-xl font-bold mb-3 text-secondary">Free Shipping</h4>
              <p className="text-foreground/70">On orders over $100</p>
            </div>
            <div className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-background to-accent/5">
              <h4 className="text-xl font-bold mb-3 text-secondary">30-Day Returns</h4>
              <p className="text-foreground/70">100% money-back guarantee</p>
            </div>
            <div className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-background to-accent/5">
              <h4 className="text-xl font-bold mb-3 text-secondary">Authentic</h4>
              <p className="text-foreground/70">Certified with authenticity certificates</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
