import { Button } from "./ui/button"

interface CodeExample {
  id: string
  title: string
  code: string
}

interface CodeNavBarProps {
  examples: CodeExample[]
  activeExample: string
  onExampleChange: (id: string) => void
}

export function CodeNavBar({ examples, activeExample, onExampleChange }: CodeNavBarProps) {
  return (
    <div className="lg:w-80 bg-blue-100 p-4">
      <h3 className="text-lg font-semibold mb-4 text-blue-900">Examples</h3>
      <nav className="space-y-2">
        {examples.map((example) => (
          <Button
            key={example.id}
            variant={activeExample === example.id ? "default" : "ghost"}
            className={`w-full justify-start ${activeExample === example.id ? 'bg-blue-600 text-white' : 'text-blue-700 hover:bg-blue-200'}`}
            onClick={() => onExampleChange(example.id)}
          >
            {example.title}
          </Button>
        ))}
      </nav>
    </div>
  )
}

