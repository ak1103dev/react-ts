import React from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'

type Props = {
  route: RouteConfig
  someProp: string
}

const Root = ({ route }: Props) => (
  <div>
    <h1>Root</h1>
    {renderRoutes(route.routes)}
  </div>
)

export default Root
