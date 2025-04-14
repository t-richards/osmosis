import React from 'react'

import { session } from '@hotwired/turbo'

interface HelloMessageProps {
    name: string;
}

const HelloMessage = ({ name }: HelloMessageProps) => {
    console.log(session.enabled)

    return (
        <div>
            <h1>Hello, {name}!</h1>
        </div>
    )
}

export default HelloMessage
