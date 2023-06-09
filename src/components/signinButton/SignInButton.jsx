import React from 'react'
import "./SignInButton.css"
import { Link } from 'react-router-dom'


const SignInButton = () => {
  return (
    <Link className="signInButton" to='/account/signin'>
      Sign in
    </Link>
  )
}

export default SignInButton;