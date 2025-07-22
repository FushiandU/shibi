"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, Phone, Mail } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Properties", href: "/properties" },
  { name: "Services", href: "/services" },
  { name: "Golden Visa", href: "/golden-visa" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy-900 dark:bg-gray-900 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+971 55 799 4258</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>shibikabeer@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <span>Follow us:</span>
            <div className="flex space-x-2">
              <Link href="https://facebook.com/shibikabeer" className="hover:text-amber-400 transition-colors">
                Facebook
              </Link>
              <Link href="https://instagram.com/shibikabeer" className="hover:text-amber-400 transition-colors">
                Instagram
              </Link>
              <Link href="https://linkedin.com/in/shibikabeer" className="hover:text-amber-400 transition-colors">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-white dark:bg-gray-900"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="hidden sm:block">
                <div className="font-bold text-xl text-gray-900 dark:text-white">Buy My Dubai Home</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Dubai Real Estate Expert</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-amber-600 dark:hover:text-amber-400 ${
                    pathname === item.href ? "text-amber-600 dark:text-amber-400" : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link href="/calculator">
                <Button variant="outline" size="sm" className="hidden md:flex bg-transparent">
                  ROI Calculator
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Get Consultation
                </Button>
              </Link>

              {/* Mobile Menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-lg font-medium transition-colors hover:text-amber-600 dark:hover:text-amber-400 ${
                          pathname === item.href
                            ? "text-amber-600 dark:text-amber-400"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="pt-4 border-t">
                      <Link href="/calculator" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="outline" className="w-full mb-2 bg-transparent">
                          ROI Calculator
                        </Button>
                      </Link>
                      <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button className="w-full bg-amber-600 hover:bg-amber-700">Get Consultation</Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
