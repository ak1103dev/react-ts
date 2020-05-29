import React from 'react'

type Props = {
  title: string
}

const Button = ({ title }: Props) => {
  return <button className="bg-blue-600 text-white">{title}</button>
}

export default Button
