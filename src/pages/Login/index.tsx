import React from 'react'
import FormInput from 'components/Form/Input'
import Button from 'components/Button'

const LoginPage = () => {
  const onLogin = async () => {
    try {
      const credentials = {
        email: 'ak@yopmail.com',
        password: 'password',
      }
      console.log({ credentials })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <FormInput label="Email" name="email" value="example@email.com" />
      <FormInput label="Password" name="password" value="password" />
      <Button title="Login" onClick={onLogin} />
    </div>
  )
}

export default LoginPage
