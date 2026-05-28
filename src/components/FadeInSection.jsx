import { useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

// Safelist: delay-100 delay-200 delay-300
const delayClasses = {
  0: '',
  100: 'delay-100',
  200: 'delay-200',
  300: 'delay-300',
}

export function FadeInSection({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const visible = useFadeIn(ref)

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${delayClasses[delay] ?? ''} ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  )
}
