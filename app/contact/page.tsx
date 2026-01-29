'use client'

import React, { useState } from "react"
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Footer } from '@/components/footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="pt-32 px-6 md:px-12 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-black mb-4 tracking-tighter">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-foreground/60">
            We'd love to hear from you. Let's talk about your style journey.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-6 md:px-12 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email */}
          <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-card via-background to-accent/5 p-8 hover:border-secondary/50 transition-all">
            <Mail className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <p className="text-foreground/70">support@any-wears.com</p>
          </div>

          {/* Phone */}
          <div className="rounded-xl border border-secondary/20 bg-gradient-to-br from-card via-background to-secondary/5 p-8 hover:border-secondary/50 transition-all">
            <Phone className="w-8 h-8 text-secondary mb-4" />
            <h3 className="text-lg font-bold mb-2">Phone</h3>
            <p className="text-foreground/70">+1 (404) 765-2250</p>
          </div>

          {/* Address */}
          <div className="rounded-xl border border-accent/20 bg-gradient-to-br from-card via-background to-accent/5 p-8 hover:border-secondary/50 transition-all">
            <MapPin className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p className="text-foreground/70">891 Despard Street</p>
            <p className="text-sm text-foreground/60">East Point, Georgia 30344, USA</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 md:px-12 pb-20 relative z-10">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-background to-accent/5 p-12">
            <h2 className="text-3xl font-bold mb-8 text-primary">Send us a Message</h2>

            {/* Name */}
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 text-foreground">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-foreground/20 text-foreground placeholder-foreground/40 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 text-foreground">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-foreground/20 text-foreground placeholder-foreground/40 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 text-foreground">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-foreground/20 text-foreground placeholder-foreground/40 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all"
                placeholder="What is this about?"
              />
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block text-sm font-bold mb-2 text-foreground">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-foreground/20 text-foreground placeholder-foreground/40 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Additional Info */}
      <section className="px-6 md:px-12 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-2xl border border-foreground/10 bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-12">
            <h3 className="text-2xl font-bold mb-4">Response Time</h3>
            <p className="text-foreground/70 mb-4">
              We typically respond to all inquiries within 24 hours during business days.
            </p>
            <p className="text-sm text-foreground/50">
              Business Hours: Monday - Friday, 9AM - 6PM EST
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
