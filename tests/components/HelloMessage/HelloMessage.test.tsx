import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import HelloMessage from '../../../app/javascript/components/HelloMessage'

describe(HelloMessage, () => {
  it('displays greeting', async () => {
    render(<HelloMessage name='World' />)

    await screen.findByRole('heading')

    expect(screen.getByRole('heading')).toHaveTextContent('Hello, World!')
  })
})
