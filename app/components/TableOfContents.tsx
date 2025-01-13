'use client'

import { cn } from '@/lib/utils'
import { useHeadings } from '../hooks/use-headings'
import { useReadProgress } from '../hooks/use-read-progress'

export function TableOfContents() {
  const { title, headings } = useHeadings()
  const progress = useReadProgress()

  return (
    <nav className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto bg-white/30 p-8">
      <div className="mb-4">
        <h2 className="font-semibold text-lg">{title}</h2>
        <div className="mt-3 h-1 w-full bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-200 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <ul className="space-y-2">
        {headings.map((heading) => {
          const headingElement = document.getElementById(heading.id)
          const headingTop = headingElement?.offsetTop ?? 0
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight
          const headingProgress = (headingTop / totalHeight) * 100
          const isActive = progress >= headingProgress && progress < (headingProgress + 15)

          return (
            <li
              key={heading.id}
              style={{
                paddingLeft: `${(heading.level - 2) * 1}rem`,
              }}
            >
              <button
                onClick={() => {
                  const element = document.getElementById(heading.id)
                  const offset = 500 // 4rem = 64px
                  const elementPosition = element?.getBoundingClientRect().top ?? 0
                  const offsetPosition = elementPosition + window.scrollY - offset
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  })
                }}
                className={cn(
                  'block py-1 text-sm transition-all hover:text-blue-600 text-left w-full',
                  isActive ? ' font-medium' : 'font-normal'
                )}
              >
                <div className="relative flex items-center">
                  {heading.text}
                </div>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
