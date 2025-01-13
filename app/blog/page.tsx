import { BlogLayout } from '../components/BlogLayout'
import { CTASection } from '../components/CTASection'
import Blog from './Blog.mdx'

export default function BlogPost() {
    return (
        <BlogLayout>
            <Blog />
            <CTASection />
        </BlogLayout>

    )
}

