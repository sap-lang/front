import { Globe, Terminal, Code, Settings, MoreHorizontal, Rabbit, Pi, Download, Truck, Languages } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import Link from 'next/link'

interface Package {
    name: string
    link: string
}

interface AdvantagesCard {
    icon: React.ReactNode
    title: string
    description: string
    moreLink?: string
}

const useCases: AdvantagesCard[] = [
    {
        icon: <Rabbit className="w-8 h-8" />,
        title: "High Performance",
        description: "Achieve near bare-metal performance through advanced compile-time optimizations and efficient C code generation with massively inlined built-in runtime.",
    },
    {
        icon: <Pi className="w-8 h-8" />,
        title: "Modern Syntax",
        description: "Sap-Lang is using a modern Semi-Functional programming language syntax with a focus on writting-speed and readability.",
    },
    {
        icon: <Truck className="w-8 h-8" />,
        title: "Seamlessly Distributing",
        description: "Compiler emmitting single executable binary with no (even no libc) dependencies, tell client just to download and run.",
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Cross-Platform",
        description: "Using Zig-CC/Cosmos-CC as backend, Sap-Lang can compile to any platform that LLVM supports.",
    },
    {
        icon: <Settings className="w-8 h-8" />,
        title: "Tooling Support",
        description: "Comprehensive development tools including package manager, build system, and debugging utilities.",
    },
    {
        icon: <Languages className="w-8 h-8" />,
        title: "Foreign Function Interface",
        description: "Easily integrate with existing C/C++ libraries through a zero-cost FFI system, enabling seamless interoperability with native code.",
    },

]

export function AdvantagesSection() {
    return (
        <section className="mx-auto px-20 py-16 bg-white">
            <div className=" mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Language features</h2>
                <p className="text-blue-600 text-lg">Discover the power of Sap-Lang with its modern features and efficient performance capabilities</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {useCases.map((useCase, index) => (
                    <Card key={index} className="bg-blue-900 text-white">
                        <CardHeader>
                            <div className="mb-4">{useCase.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                            <p className="text-blue-100">{useCase.description}</p>
                        </CardHeader>
                        <CardFooter>
                            <Button variant="link" className="text-blue-200 hover:text-blue-100 p-0">
                                <Link href={useCase.moreLink || "/"}>
                                Learn More →
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}

