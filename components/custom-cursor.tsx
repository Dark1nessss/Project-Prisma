"use client"

import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    if (!cursor || !cursorDot) return

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - cursor.offsetWidth / 2}px, ${
        e.clientY - cursor.offsetHeight / 2
      }px)`
      cursorDot.style.transform = `translate(${e.clientX - cursorDot.offsetWidth / 2}px, ${
        e.clientY - cursorDot.offsetHeight / 2
      }px)`
    }

    window.addEventListener("mousemove", onMouseMove)
    return () => window.removeEventListener("mousemove", onMouseMove)
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/30 transition-transform duration-100 ease-out"
      />
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed left-0 top-0 z-50 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400 transition-transform duration-100 ease-out"
      />
    </>
  )
}

