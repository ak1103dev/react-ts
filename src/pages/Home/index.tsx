import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth, AuthType } from 'components/AuthProvider'
import { Button } from 'antd'

const Home = () => {
  const { t } = useTranslation()
  const { user }: AuthType = useAuth()

  return (
    <div>
      <h2>{t('home.title')}</h2>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
      <div>
        {user.id} {user.name}
      </div>
    </div>
  )
}

export default Home
