import { Youtube, Linkedin, Github, FileText } from "lucide-react"
import { ThemeSwitch } from "@/components/theme-switch"

const socialLinks = [
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/@EricWTech",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/ericwtech/",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/erictechpro",
  },
  {
    name: "CV",
    icon: FileText,
    url: "https://drive.google.com/file/d/1uivQkO56-ptQ3qMz955_yJ8cVS6Ejcdl/view?usp=sharing",
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Social Links Section */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-4 text-white">Connect With Me</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-2xl text-white hover:text-cyan-bright transition-colors"
                >
                  <Icon className="w-8 h-8" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Theme Switch Section */}
        <div className="flex justify-center mb-6">
          <ThemeSwitch />
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-400">
          © {currentYear} EricTech. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
