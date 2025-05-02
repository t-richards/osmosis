import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import GoodbyeMessage from '../../../app/javascript/components/GoodbyeMessage'

describe(GoodbyeMessage, () => {
  it('displays greeting', async () => {
    render(<GoodbyeMessage name='World' />)

    await screen.findByRole('heading')

    expect(screen.getByRole('heading')).toHaveTextContent('Goodbye, World!')
  })
})
