import React, { useState } from 'react'

import { Logon } from './pages/Logon/index'

import './global.css'

export const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(prevState => {
      return prevState = prevState + 1
    })
  }

  return (
    <>
      <Logon />
      <h1 onClick={handleClick}>Hello {count}!</h1>
    </>
  )
}
