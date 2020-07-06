import React from 'react'
import Button from 'components/Button'
import { login } from './actions'
// import FormInput from 'components/Form/Input'
// import request from 'utils/request'

const LoginPage = () => {
  // const onLogin = async () => {
  //   try {
  //     const credentials = {
  //       email: 'ak@yopmail.com',
  //       password: 'password',
  //     }
  //     request.post('/users/login', credentials)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  return (
    <div>
      <h2>Login</h2>
      {/* <FormInput label="Email" name="email" value="example@email.com" />
      <FormInput label="Password" name="password" value="password" /> */}
      <Button title="Login" onClick={login} />
    </div>
  )
}

export default LoginPage
