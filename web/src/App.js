import React, { useState } from 'react'

export const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(prevState => {
      return prevState = prevState + 1
    })
  }

  return <h1 onClick={handleClick}>Hello {count}!</h1>
}
