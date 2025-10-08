import { Code, Link, Bot, Laptop, FolderKanban, TrendingUp, ArrowRight } from "lucide-react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

const expertiseItems = [
  {
    title: "Full Stack Development",
    icon: Code,
    url: "https://www.youtube.com/@EricWTech/featured",
  },
  {
    title: "Blockchain Development",
    icon: Link,
    url: "https://www.youtube.com/playlist?list=PLm7xfhMOszqwqvw0u-MU6ZZSMk4HEoVae",
  },
  {
    title: "AI Automation",
    icon: Bot,
    url: "https://www.youtube.com/playlist?list=PLm7xfhMOszqxLHdQxGZ_MYHevl6mBWuVL",
  },
  {
    title: "Computer Science",
    icon: Laptop,
    url: "https://www.youtube.com/@EricProgramming",
  },
  {
    title: "Personal Projects",
    icon: FolderKanban,
    url: "https://www.youtube.com/playlist?list=PLm7xfhMOszqwJQ42rLv53O1ONrd8A1avs",
  },
  {
    title: "Tech Career Growth",
    icon: TrendingUp,
    url: "https://www.youtube.com/playlist?list=PLm7xfhMOszqy_PgIflEinGcDWI0ZTwr82",
  },
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="scroll-mt-24 bg-cyan-light py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-high-contrast">
          My Expertise
        </h2>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.title} className="card-bg-dark rounded-lg shadow-lg hover-scale">
                <CardContent className="p-6">
                  <Icon className="text-4xl text-cyan-deep mb-4 w-10 h-10" />
                  <CardTitle className="text-xl font-semibold mb-4 text-high-contrast">
                    {item.title}
                  </CardTitle>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-primary inline-flex items-center"
                  >
                    Watch Tutorials
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
