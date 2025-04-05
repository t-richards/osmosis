import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe(App, () => {
  it('displays greeting', async () => {
    render(<App name='World' />)

    await screen.findByRole('heading')

    expect(screen.getByRole('heading')).toHaveTextContent('Hello, World!')
  })
})
