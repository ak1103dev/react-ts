import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'components/Button'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { i18n } = useTranslation()
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="px-16 h-16 bg-black text-white w-full flex justify-between items-center">
      <Link to="/">Logo</Link>
      <Link to="/login">
        <Button title="Login" />
      </Link>
      <select
        className="text-black"
        name="language"
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">EN</option>
        <option value="th">TH</option>
      </select>
    </div>
  )
}

export default Header
