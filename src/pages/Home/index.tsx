import React from 'react'
import { useEffectOnce } from 'react-use'
import { getBoards } from './actions'

const Home = () => {
  useEffectOnce(() => {
    getBoards()
  })
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

export default Home
