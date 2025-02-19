import { Mail, Phone, Instagram, Twitter, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section className="bg-zinc-900 py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold tracking-wider text-white">Get in Touch</h2>
            <p className="mb-8 text-lg text-white/80">
              Let's create something amazing together. Reach out to discuss your project.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-yellow-400" />
                <span className="text-white">hello@yellowprism.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-yellow-400" />
                <span className="text-white">+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="mt-8 flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          <form className="space-y-4">
            <Input
              type="text"
              placeholder="Name"
              className="border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-400"
            />
            <Input
              type="email"
              placeholder="Email"
              className="border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-400"
            />
            <Textarea
              placeholder="Message"
              className="min-h-[150px] border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-400"
            />
            <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

