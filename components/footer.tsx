export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-4 text-white/60 md:flex-row md:space-y-0">
          <p>© {new Date().getFullYear()} Yellow Prism. All rights reserved.</p>
          <nav className="flex space-x-6">
            <a href="#" className="hover:text-yellow-400">
              Privacy
            </a>
            <a href="#" className="hover:text-yellow-400">
              Terms
            </a>
            <a href="#" className="hover:text-yellow-400">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

