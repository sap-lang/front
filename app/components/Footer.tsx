import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-blue-200 bg-white py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/SAP_logo.svg"
              width={24}
              height={24}
              alt="Sap-Lang Logo"
              className="h-6 w-6"
            />
            <span className="text-sm text-blue-400">© 2024-2025 Sap-Lang</span>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="text-blue-400 hover:text-white">Twitter</Link>
            <Link href="#" className="text-blue-400 hover:text-white">GitHub</Link>
            <Link href="#" className="text-blue-400 hover:text-white">Discord</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

