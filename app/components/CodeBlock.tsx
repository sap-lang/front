import { ClockIcon } from "lucide-react"
import { useEffect, useState } from "react"

interface CodeBlockProps {
  code: string
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [tryIt, setTryIt] = useState(false)
  const [output, setOutput] = useState<unknown>(null)

  useEffect(() => {
    if (tryIt) {
      // sleep for 1 second
      setOutput(<div className="text-center text-blue-600">
        <ClockIcon className="animate-spin h-6 w-6 mx-auto" />
        Running...
      </div>)
      setTimeout(() => {
        setOutput(
          <pre className="text-sm bg-black border border-input px-2 py-1 rounded-sm w-[95%] mx-auto">
            <code className="text-white">
              {"Hello, World!"}
            </code>
          </pre>)
      }, 2500)
    }
  }, [tryIt, code])

  useEffect(() => {
    setTryIt(false)
  }, [code])


  return (
    <div className=" bg-blue-100/80 backdrop-blur-lg shadow-lg p-6">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={
            () => {
              alert("Copied to clipboard")
              navigator.clipboard.writeText(code)
            }
          } className=" bg-gray-500 px-2 text-white hover:bg-gray-600">Copy</button>
          <button onClick={
            () => {
              setTryIt(false)
              setTimeout(() => {
                setTryIt(true)
              }, 500)
            }
          } className=" bg-blue-500 px-2 text-white hover:bg-blue-600">Try it</button>
        </div>
      </div>
      <pre className="text-sm mb-2">
        <code className="text-blue-900">
          {code}
        </code>
      </pre>
      {tryIt ? (
        <>{output}</>
      ) : null}
    </div>
  )
}

