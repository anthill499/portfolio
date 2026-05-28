import { useEffect, useRef, useCallback } from 'react'

const THRESHOLD = 0.90
const SNAP_DURATION = 10000

export function useSnapScroll(sectionIds) {
  const isSnappingRef = useRef(false)

  const snapTo = useCallback((el) => {
    if (!el) return
    isSnappingRef.current = true
    window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
    setTimeout(() => { isSnappingRef.current = false }, SNAP_DURATION)
  }, [])

  const navigateTo = useCallback((sectionId) => {
    snapTo(document.getElementById(sectionId))
  }, [snapTo])

  useEffect(() => {
    let scrollTimer = null

    const getSections = () =>
      sectionIds.map(id => document.getElementById(id)).filter(Boolean)

    const handleScrollEnd = () => {
      if (isSnappingRef.current) return
      const sections = getSections()
      if (!sections.length) return

      const scrollY = window.scrollY
      let target = sections[0]

      for (let i = 0; i < sections.length - 1; i++) {
        const t = sections[i].offsetTop + sections[i].offsetHeight * THRESHOLD
        if (scrollY >= t) target = sections[i + 1]
        else break
      }

      snapTo(target)
    }

    const handleScroll = () => {
      if (isSnappingRef.current) return
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(handleScrollEnd, 150)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimer)
    }
  }, [sectionIds, snapTo])

  return { navigateTo }
}
