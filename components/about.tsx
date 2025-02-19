export default function About() {
  return (
    <section className="relative bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-wider text-white">About Us</h2>
            <p className="text-lg leading-relaxed text-white/80">
              We capture moments that tell your story. Specializing in commercial and event photography, Yellow Prism
              brings creative vision and technical excellence to every project.
            </p>
          </div>
          <div className="aspect-square bg-yellow-400/10">{/* Placeholder for about image */}</div>
        </div>
      </div>
    </section>
  )
}

