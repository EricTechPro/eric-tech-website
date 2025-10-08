import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-light to-cyan-bright opacity-20 pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center px-4 relative z-10">
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <Image
            src="https://app.trickle.so/storage/public/images/usr_0c9971ea40000001/4a19b60b-1c03-4123-91d2-d79cf7a7461b.png"
            alt="Eric Tech Profile"
            width={192}
            height={192}
            priority
            className="rounded-lg shadow-lg border-4 border-cyan-deep object-cover"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-high-contrast fade-in">
          Hi, I&apos;m Eric
          <span className="block text-cyan-deep">Software Engineer & Tech Educator</span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl mb-8 text-medium-contrast slide-up">
          Specializing in AI, Full-stack Development, Web3, and Career Growth
        </p>

        {/* CTA Button */}
        <div className="flex justify-center gap-4">
          <Button asChild className="btn-primary px-8 py-3 rounded-lg hover-scale">
            <a href="#contact">Let&apos;s connect! 🚀</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
