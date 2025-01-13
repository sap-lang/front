import { TableOfContents } from '../components/TableOfContents'
import { Header } from './Header'

interface BlogLayoutProps {
    children: React.ReactNode
}

export function BlogLayout({ children }: BlogLayoutProps) {
    return (
        <div className="bg-gradient-to-br from-blue-600 to-blue-900 text-white"> {/* Added pt-24 for top padding */}
            <Header />

            <div className=" w-[95%] md:w-full mx-auto max-w-7xl px-6 pt-24 pb-12 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-12 ">
                <aside className="hidden md:block">
                    <TableOfContents />
                </aside>
                <main className="min-w-0">
                    <div className="prose prose-gray max-w-none dark:prose-invert">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

