import React from 'react'
import { RouteConfig } from 'react-router-config'

type Props = { route: RouteConfig, someProp: string }

const Home = ({ route }: Props) => (
  <div>
    <h2>Home</h2>
  </div>
)

export default Home
