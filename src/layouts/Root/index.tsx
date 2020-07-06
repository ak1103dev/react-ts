import React from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'
import Layout from 'components/Layout'
import Header from 'components/Layout/Header'

type Props = {
  route: RouteConfig
  someProp: string
}

const Root = ({ route }: Props) => (
  <Layout>
    <Header />
    {renderRoutes(route.routes)}
  </Layout>
)

export default Root
