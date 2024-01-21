import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='flex h-screen w-full items-center justify-center flex-col gap-3'>
            <h1 className='text-4xl'>404</h1>
            <h1 className='text-4xl'>Not Found</h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Error
