import Image from "next/image"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Find Fitness Classes",
    description: "App for people to find their ideal fitness classess",
    image: "https://app.trickle.so/storage/public/images/usr_0c9971ea40000001/8885d859-3839-4604-b075-d5a772dd42fd.jpeg",
    demoUrl: "https://github.com/Eric-programming/Find-Fitness-Classess",
  },
  {
    title: "Simple Shop",
    description: "A Online E-commerce Shop built with Angular, Typescript, C#, .Net Core",
    image: "https://app.trickle.so/storage/public/images/usr_0c9971ea40000001/91a08771-9de9-4875-ad56-fccaa4f228bb.jpeg",
    demoUrl: "https://github.com/Eric-programming/Simple-Shop",
  },
  {
    title: "Match Me",
    description: "A Dating App built with Next.js 14, Prisma, NextAuth, Pusher, and Cloudinary",
    image: "https://app.trickle.so/storage/public/images/usr_0c9971ea40000001/87fc50c2-2d09-4233-9fb3-82165ae358f7.png",
    demoUrl: "https://github.com/EricTechPro/match-me",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-high-contrast">
          Personal Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group relative overflow-hidden rounded-lg shadow-lg hover-scale transition-all duration-300 card-bg"
            >
              {/* Image Container with Hover Overlay */}
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay with Button */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    asChild
                    className="btn-primary px-6 py-2 rounded-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      View Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Card Content */}
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold mb-2 text-high-contrast">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-medium-contrast">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
