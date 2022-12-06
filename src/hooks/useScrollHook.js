import { useEffect, useState } from 'react'
import { throttle } from 'lodash'

export default function useScrollHook(callback) {
  const [, setScrollPosition] = useState(0)
  let prevScrollTop = 0

  const handleDocScroll = () => {
    const { scrollTop: currScrollTop } = document.documentElement || document.body

    setScrollPosition(prevPosition => {
      prevScrollTop = prevPosition
      return currScrollTop
    })
    
    callback({ prevScrollTop, currScrollTop })
  }

  const handleDocScrollThrottle = throttle(handleDocScroll, 250)

  useEffect(() => {
    window.addEventListener('scroll', handleDocScrollThrottle)

    return () =>
      window.removeEventListener('scroll', handleDocScrollThrottle)
  }, [])
}