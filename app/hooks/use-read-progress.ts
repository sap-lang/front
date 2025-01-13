'use client'

import { useEffect, useState } from 'react'

export function useReadProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const currentProgress = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      
      if (scrollHeight) {
        setProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100)
      }
    }

    // Update on mount
    updateProgress()

    // Add scroll event listener
    window.addEventListener('scroll', updateProgress)
    // Optional: Add resize listener to handle content changes
    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return progress
}

