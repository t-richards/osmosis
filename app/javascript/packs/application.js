import React from 'react'
import { createRoot } from 'react-dom/client'
import HelloMessage from '../App'

const container = document.getElementById('root')
const root = createRoot(container)

document.addEventListener('DOMContentLoaded', () => {
  const hello = React.createElement(HelloMessage, { name: 'World' })
  root.render(hello)
})
