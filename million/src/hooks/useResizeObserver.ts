import { useState, useEffect, useRef, MutableRefObject } from 'react'

type SizeParams = {
  width?: number
  height?: number
  top?: number
  right?: number
  bottom?: number
  left?: number
}

const useResizeObserver = (ref: MutableRefObject<HTMLDivElement | null>) => {
  const [element, setElement] = useState<HTMLElement | null>(null)
  const [size, setSize] = useState<SizeParams>({})
  const observer = useRef<ResizeObserver | null>(null)

  const disconnectObserver = () => {
    if (observer.current) {
      observer.current.disconnect()
    }
  }

  useEffect(() => {
    setElement(ref.current)
  }, [ref])

  useEffect(() => {
    if (!element) return

    disconnectObserver()

    const resizeObserver = new ResizeObserver(([entry]) =>
      setSize(entry.target.getBoundingClientRect())
    )

    resizeObserver.observe(element)

    observer.current = resizeObserver

    return () => disconnectObserver()
  }, [element])

  return size
}

export default useResizeObserver
