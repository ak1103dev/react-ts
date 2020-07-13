import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth, AuthType } from 'components/AuthProvider'

const Home = () => {
  const { t } = useTranslation()
  const { user }: AuthType = useAuth()

  return (
    <div>
      <h2>{t('home.title')}</h2>
      <div>
        {user.id} {user.name}
      </div>
    </div>
  )
}

export default Home
