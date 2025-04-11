import React from 'react'

import { Turbo } from '@hotwired/turbo'

interface HelloMessageProps {
    name: string;
}

const HelloMessage = ({ name }: HelloMessageProps) => {
    console.log(Turbo)

    return (
        <div>
            <h1>Hello, {name}!</h1>
        </div>
    )
}

export default HelloMessage
