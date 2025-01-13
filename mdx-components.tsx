import type { MDXComponents } from 'mdx/types'

var a = 0;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 id={(a++).toString()} className="text-4xl font-bold  mb-4 text-wrap" {...props} />,
    h2: (props) => <h2 id={(a++).toString()} className="text-3xl px-2 font-bold  mb-2 text-wrap" {...props} />,
    h3: (props) => <h3 id={(a++).toString()} className="text-2xl px-4 font-bold  mb-1 text-wrap" {...props} />,
    h4: (props) => <h4 id={(a++).toString()} className="text-xl px-6 font-bold  text-wrap" {...props} />,
    h5: (props) => <h5 id={(a++).toString()} className="text-lg px-7  text-wrap" {...props} />,
    h6: (props) => <p id={(a++).toString()} className="text-lg px-8  text-wrap" {...props} />,
    p: (props) => <p className="px-9  text-wrap" {...props} />,
    ul: (props) => <ul className="list-disc list-inside px-12" {...props} />,
    ol: (props) => <ol className="list-decimal" {...props} />,
    li: (props) => <li {...props} />,
    blockquote: (props) => <blockquote className="border-l-8 bg-white/30 border-white pl-4 m-2" {...props} />,
    ...components,
  }
}