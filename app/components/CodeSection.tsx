'use client'

import { useState } from 'react'
import { CodeBlock } from "./CodeBlock"
import { CodeNavBar } from "./CodeNavBar"

const SapExamples = [
  {
    id: 'pattern',
    title: 'Pattern Matching',
    code: `
(^[a,b,c] ?= [1,2,3]) ? 
  {format "{} {} {}" a b c |> puts} : 
  {puts "what?"}

(^{a,b,c} ?= {a:1, b:2, c:3}) ? 
  {format "{} {} {}" a b c |> puts} :
  {puts "what?"}    
`
  }, {
    id: 'hello-world',
    title: 'Hello World',
    code: `
puts "Hello, Sap-Lang!"
`
  },
  {
    id: 'dispatch',
    title: 'Dispatch',
    code: `
fib ::= \\ 0 -> 0
fib ::= \\ 1 -> 1
fib ::= \\ n -> fib (n - 1) + fib (n - 2)
`
  },
  {
    id: 'cofunctions',
    title: 'Cofunctions',
    code: `
f = \\x -> {
    <- x + 2
    <- x + 3
    <- x + 4
}

g = \\y -> {
    <- y + 1
    <<- f y
    <- y + 5
}

a = 0

a -> next = g a
puts a #1

a -> next = g a
puts a #2

a -> next = g a
puts a #3

a -> next = g a
puts a #4

a -> next = g a
puts a#5

a -> next = g a
puts a#6
`
  },
  {
    id: 'operator',
    title: 'Operator Overloading',
    code: `
cont = \\x -> {
  // operator overloading
  (+) ::= \\a b : $a == "number" ->
    __op_add__ (a * 2) b
  
  (+) ::= \\a b : $a == "string" -> 
    __op_add__ a b

    // will effect current scope only
    puts ("\\t x: " + x)
    puts ("\\t c1: " + (<- x + 1))
    puts ("\\t c2: " + (<- x + 2))
    x + 4
}

a11 -> cont = cont 10
puts ("\\t a11: " + a11)

a12 -> cont = cont 11
puts ("\\t a12: " + a12)

_a -> cont = cont 12

puts _a
puts cont
puts (1 + 1)    
`
  },

]

export function CodeSection() {
  const [activeExample, setActiveExample] = useState(SapExamples[0].id)

  return (
    <section className="pt-20 md:pt-0 container w-[95%] md:w-full mx-auto pb-24">
      <div className=" mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Why Sap-Lang?</h2>
        <p className="text-blue-100 text-lg"> Simple is More, thats the ethic of SAP. </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <CodeNavBar
          examples={SapExamples}
          activeExample={activeExample}
          onExampleChange={setActiveExample}
        />
        <div className="flex-grow">
          <CodeBlock code={SapExamples.find(ex => ex.id === activeExample)?.code || ''} />
        </div>

      </div>
    </section>
  )
}

