import React from 'react'
import './SignUpButton.css'
import { Link } from 'react-router-dom'


const SignUpButton = () => {
  return (
    <Link className='signUpButton' to='/account/create'>
      Join now
    </Link>
  )
}

export default SignUpButton
