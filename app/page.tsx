import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ExpertiseSection } from "@/components/expertise-section"
import { ProjectsSection } from "@/components/projects-section"
import { ConsultationForm } from "@/components/consultation-form"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ExpertiseSection />
        <ProjectsSection />
        <ConsultationForm />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  )
}
