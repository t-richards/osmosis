import React from 'react'
import './App.css'

interface HelloMessageProps {
    name: string;
}

const HelloMessage: React.FC<HelloMessageProps> = ({ name }) => (
    <h1>Hello, {name}!</h1>
)

export default HelloMessage
