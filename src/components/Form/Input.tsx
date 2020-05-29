import React from 'react'
import Input from 'components/Input'

type Props = {
  label: string
  name: string
  value: string
}

const FormInput = ({ label, name, value }: Props) => {
  return (
    <div className="">
      <label>{label}</label>
      <Input name={name} value={value} />
    </div>
  )
}

export default FormInput
