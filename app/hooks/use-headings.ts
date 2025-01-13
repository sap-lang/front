'use client'

import { useState, useEffect } from 'react'

export interface Heading {
  id: string
  text: string
  level: number
}

export function useHeadings() {
  const [title, setTitle] = useState('')
  const [headings, setHeadings] = useState<Heading[]>([])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
    const headingElements = elements.map((element) => ({
      id: element.id,
      text: element.textContent ?? '',
      level: parseInt(element.tagName.charAt(1)),
    }))

    const firstH1 = headingElements.find(h => h.level === 1)
    if (firstH1) {
      setTitle(firstH1.text)
      setHeadings(headingElements.filter(h => h !== firstH1))
    } else {
      setTitle('Table of contents')
      setHeadings(headingElements)
    }
  }, [])

  return { title, headings }
}

