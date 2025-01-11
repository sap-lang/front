'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`
      transition-all duration-300 ease-in-out
      ${isScrolled 
        ? 'fixed top-0 left-0 right-0 bg-white/30 backdrop-blur-md shadow-md z-50' 
        : 'bg-transparent'
      }
    `}>
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link className="flex items-center gap-2" href={"/"}>
            <Image
              src="/SAP_logo.svg"
              width={40}
              height={40}
              alt="Sap-Lang Logo"
              // className="h-6 w-6"
            />
          <span className={"text-xl font-semibold" + isScrolled ? "text-blue-200" : "text-white"}>Sap-Lang</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="#" className="hidden md:flex text-blue-400 hover:text-white">Solutions</Link>
          <Link href="#" className="hidden md:flex text-blue-400 hover:text-white">Learn</Link>
          <Link href="#" className="hidden md:flex text-blue-400 hover:text-white">Community</Link>
          <Link href="#" className="hidden md:flex text-blue-400 hover:text-white">News</Link>
          <Button variant="default" size="sm" className="bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
        </div>
      </nav>
    </header>
  )
}

