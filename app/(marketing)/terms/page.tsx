import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-24 pt-32">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using Moro, you accept and agree to be bound by
              the terms and provision of this agreement.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Use License</h2>
            <p className="text-muted-foreground">
              Permission is granted to temporarily use Moro for personal,
              non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p className="text-muted-foreground">
              The materials on Moro are provided on an 'as is' basis. Moro makes
              no warranties, expressed or implied, and hereby disclaims and
              negates all other warranties.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about these Terms, please contact us at
              team@moro.support
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

