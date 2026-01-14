import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-24 pt-32">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground">
              We collect information you provide directly to us, such as when you
              join our waitlist, including your email address, name, role, and
              company (if provided).
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect to notify you about the launch of
              Moro, manage your waitlist status, and improve our services.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect your personal
              information. However, no method of transmission over the internet is
              100% secure.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy, please contact us
              at team@moro.support
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

