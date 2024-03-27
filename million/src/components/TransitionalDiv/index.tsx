import { PropsWithChildren, useRef } from 'react'
import useResizeObserver from '@/hooks/useResizeObserver'
import { cn } from '@/utils/functions/utils'

type TransitionalDivProps = React.HTMLAttributes<HTMLDivElement> &
  PropsWithChildren

const TransitionalDiv = ({ children, className }: TransitionalDivProps) => {
  const contentWrapper = useRef<HTMLDivElement | null>(null)
  const rect = useResizeObserver(contentWrapper)

  return (
    <div
      className={cn('overflow-hidden transition-[width,height]', className)}
      style={{
        height: rect.height + 'px',
        width: rect.width + 'px',
      }}
    >
      <div ref={contentWrapper} className='h-fit w-fit'>
        {children}
      </div>
    </div>
  )
}

export default TransitionalDiv
