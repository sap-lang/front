import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-4xl font-bold text-white mb-4" {...props} />,
    h2: (props) => <h2 className="text-3xl font-bold text-white mb-4" {...props} />,
    h3: (props) => <h3 className="text-2xl font-bold" {...props} />,
    h4: (props) => <h4 className="text-xl font-bold" {...props} />,
    h5: (props) => <h5 className="text-lg font-bold" {...props} />,
    p: (props) => <p className="text-blue-200" {...props} />,
    ul: (props) => <ul className="list-disc list-inside space-y-1 m-2" {...props} />,
    ol: (props) => <ol className="list-decimal" {...props} />,
    li: (props) => <li {...props} />,
    blockquote: (props) => <blockquote className="border-l-8 bg-white/30 border-white pl-4 m-2" {...props} />,
    ...components,
  }
}