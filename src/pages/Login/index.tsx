import React from 'react'
import Button from 'components/Button'
import FormInput from 'components/Form/Input'

const Home = () => {
  return (
    <div>
      <h2>Login</h2>
      <FormInput label="Email" name="email" value="example@email.com" />
      <FormInput label="Password" name="password" value="password" />
      <Button title="Login" />
    </div>
  )
}

export default Home
