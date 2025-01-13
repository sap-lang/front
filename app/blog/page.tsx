import { BlogLayout } from '../components/BlogLayout'
import { CTASection } from '../components/CTASection'
import { Header } from '../components/Header'
import Blog from './Blog.mdx'

export default function BlogPost() {
    return (
        <BlogLayout>
            <Blog />
            <CTASection />
        </BlogLayout>

    )
}

