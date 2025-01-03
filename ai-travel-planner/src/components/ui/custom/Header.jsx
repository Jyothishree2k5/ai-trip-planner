import React from 'react'
import { Button } from '../button'

function Header() {
    return (
      <div className='w-full fixed top-0 left-0 right-0 bg-white shadow-md flex justify-between items-center px-4 py-3'>
        <img src='/logo.svg' alt='logo' className='h-8 w-auto' />
        <div>
          <Button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors'>
            Sign In
          </Button>
        </div>
      </div>
    )
  }
  

export default Header
