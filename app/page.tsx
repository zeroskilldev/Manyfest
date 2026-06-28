import { CTA } from "@/components/landing/CTA"
import Hero from "@/components/landing/Hero"
import { Navbar } from "@/components/landing/Navbar"

export default function Page() {
  return (
    <div className="px-4">
      <Navbar />
      <Hero />
      <CTA />
    </div>
  )
}
