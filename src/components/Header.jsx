import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'

import useScrollHook from '../hooks/useScrollHook'

import logo from '../assets/images/logo.svg'

export default function Header() {

  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [shouldShowShadow, setShouldShowShadow] = useState(false)

  const MINIMUM_SCROLL = 50
  const TIMEOUT_DELAY = 100

  useScrollHook(callbackData => {
    const { prevScrollTop, currScrollTop } = callbackData
    const scrollDown = prevScrollTop < currScrollTop
    const minScroll = currScrollTop > MINIMUM_SCROLL

    setShouldShowShadow(currScrollTop > 2)

    setTimeout(() => {
      setShouldHideHeader(scrollDown && minScroll)
    }, TIMEOUT_DELAY)
  })

  const shadowStyle = shouldShowShadow ? 'shadow' : ''
  const hiddenStyle = shouldHideHeader ? 'hidden' : ''

  return (
    <div className='wrapper'>
      <header className={`header ${shadowStyle} ${hiddenStyle}`}>
        <div className='logo-container'>
          <img className='logo-svg' src={logo} alt="header logo" />
          <div className='logo-title'>header logo</div>
        </div>
        <ul className='links'>
          <li className="link-item">header link 1</li>
          <li className="link-item">header link 2</li>
          <li className="link-item">header link 3</li>
        </ul>
      </header>

      <Outlet />

    </div>
  )
}