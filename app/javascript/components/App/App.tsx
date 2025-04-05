import React from 'react'
// import './App.css'

interface HelloMessageProps {
    name: string;
}

const HelloMessage = ({ name }: HelloMessageProps) => (
    <h1>Hello, {name}!</h1>
)

export default HelloMessage
