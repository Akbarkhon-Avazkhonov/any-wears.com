import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-foreground/10 pt-12 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
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
    </footer>
  )
}
