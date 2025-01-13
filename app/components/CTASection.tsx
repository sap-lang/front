import { Button } from "@/app/components/ui/button"

export function CTASection() {
  return (
    <section className="py-40">
      <div className="container mx-auto text-center">
        <h2 id="CTA" className="mb-8 text-3xl font-bold text-white">Start using Sap-Lang today!</h2>
        <Button
          size="lg"
          variant="default"
          className="bg-white text-blue-900 hover:bg-blue-300"
        >
          Get Started
        </Button>
      </div>
    </section>
  )
}

