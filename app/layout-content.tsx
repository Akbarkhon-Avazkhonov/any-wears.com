'use client'

import React, { useState } from "react"
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function LayoutContent({
  children,
}: {
  children: React.ReactNode
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-gradient-to-b from-background via-background to-transparent px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold tracking-tighter">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            ANY-WEARS
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-secondary transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full hover:bg-accent/20 transition-colors md:hidden"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-20 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-sm border-b border-foreground/10">
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-secondary transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {children}
    </>
  )
}
