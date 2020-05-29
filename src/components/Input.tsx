import React from 'react'

type Props = {
  name: string
  value: string
}

const Input = (props: Props) => {
  return <input {...props} className="border border-gray-400 rounded" />
}

export default Input
