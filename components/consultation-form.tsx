import { Phone, Video } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const consultationOptions = [
  {
    title: "Free 15-min Call",
    description: "Quick chat on Career & Business Opportunities",
    icon: Phone,
    url: "https://calendar.app.google/FmoWxnq7kCd1qsUv7",
    buttonText: "Schedule Free Call",
    variant: "default" as const,
  },
  {
    title: "1-Hour Consultation",
    description: "Deep dive into technical challenges and solutions",
    icon: Video,
    url: "https://calendar.app.google/CqyLrraYXexRJAQj6",
    buttonText: "Book Paid Consultation",
    variant: "secondary" as const,
  },
]

export function ConsultationForm() {
  return (
    <section id="contact" className="scroll-mt-24 bg-cyan-light py-16 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-high-contrast">
          Get in Touch
        </h2>

        {/* Consultation Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {consultationOptions.map((option) => {
            const Icon = option.icon
            return (
              <Card key={option.title} className="card-bg-dark p-6 rounded-lg hover-scale transition-all">
                <CardContent className="p-0">
                  <div className="text-center">
                    <Icon className="text-4xl text-cyan-deep mx-auto mb-4 w-10 h-10" />
                    <h3 className="text-xl font-bold mb-4 text-high-contrast">
                      {option.title}
                    </h3>
                    <p className="text-center mb-6 text-medium-contrast">
                      {option.description}
                    </p>
                    <Button
                      asChild
                      variant={option.variant}
                      className={`${
                        option.variant === "default" ? "btn-primary" : "btn-secondary"
                      } w-full p-4 rounded-lg transition-all`}
                    >
                      <a href={option.url} target="_blank" rel="noopener noreferrer">
                        {option.buttonText}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
