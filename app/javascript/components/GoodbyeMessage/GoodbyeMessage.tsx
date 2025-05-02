import React from 'react'

interface GoodbyeMessageProps {
  name: string;
}

const GoodbyeMessage = ({ name }: GoodbyeMessageProps) => {
  return (
    <div>
      <h1>Goodbye, {name}!</h1>
    </div>
  )
}

export default GoodbyeMessage
