import { Globe, Terminal, Code, Settings, MoreHorizontal } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Button } from "./ui/button"

interface Package {
    name: string
    link: string
}

interface UseCase {
    icon: React.ReactNode
    title: string
    description: string
    packages: Package[]
}

const useCases: UseCase[] = [
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Cloud & Network Services",
        description: "With a strong ecosystem of tools and APIs on major cloud providers, it is easier than ever to build services with Sap-Lang.",
        packages: [
            { name: "aws/sap", link: "#" },
            { name: "aws/client", link: "#" },
            { name: "Azure/azure-sdk-for-sap", link: "#" },
        ],
    },
    {
        icon: <Terminal className="w-8 h-8" />,
        title: "Command-line Interfaces",
        description: "With popular open source packages and a robust standard library, use Sap-Lang to create fast and elegant CLIs.",
        packages: [
            { name: "sap_batteries/cobra", link: "#" },
            { name: "sap_batteries/viper", link: "#" },
            { name: "sap_batteries/cli", link: "#" },
        ],
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: "Web Development",
        description: "With enhanced memory performance and support for several IDEs, Sap-Lang powers fast and scalable web applications.",
        packages: [
            { name: "net/http", link: "#" },
            { name: "html/template", link: "#" },
            { name: "database/sql", link: "#" },
        ],
    },
    {
        icon: <Settings className="w-8 h-8" />,
        title: "DevOps & Site Reliability",
        description: "With fast build times, lean syntax, and automatic formatting, Sap-Lang is built to support both DevOps and SRE.",
        packages: [
            { name: "open-telemetry/opentelemetry_sap", link: "#" },
            { name: "istio/istio_sap", link: "#" },
            { name: "sap/cli", link: "#" },
        ],
    },
    {
        icon: <MoreHorizontal className="w-8 h-8" />,
        title: "And Far More ......",
        description: "Sap-Lang is a versatile language that can be used for a variety of software development purposes.",
        packages: [
            { name: "belnder/sap", link: "#" },
            { name: "vulkan/sap", link: "#" },
            { name: "cuda/sap", link: "#" },
        ],
    },
]

export function UseCasesSection() {
    return (
        <section className="mx-auto px-20 py-16 bg-white">
            <div className=" mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">What&apos;s possible with Sap-Lang</h2>
                <p className="text-blue-600 text-lg">Use Sap-Lang for a variety of software development purposes</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {useCases.map((useCase, index) => (
                    <Card key={index} className="bg-blue-900 text-white">
                        <CardHeader>
                            <div className="mb-4">{useCase.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                            <p className="text-blue-100">{useCase.description}</p>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <p className="text-sm text-blue-200">Popular Packages:</p>
                                <div className="flex flex-wrap gap-2">
                                    {useCase.packages.map((pkg, i) => (
                                        <a
                                            key={i}
                                            href={pkg.link}
                                            className="text-xs bg-blue-800 hover:bg-blue-700 text-blue-100 px-2 py-1 rounded-full transition-colors"
                                        >
                                            {pkg.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="link" className="text-blue-200 hover:text-blue-100 p-0">
                                Learn More →
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}

