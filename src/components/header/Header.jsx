import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { Example } from '../../framer motion/Example'
import FindAStore from '../findAStore/FindAStore'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import SignUpButton from '../signUpButton/SignUpButton'
import LogoutButton from '../logoutButton/LogoutButton'


const Header = ({menuPage}) => {
  const user = useSelector(selectUser)

  return (
    <div className={`header ${menuPage && 'header__menuPage'}`}>
      <div className='header__left'>
        <Link className='header__logo' to='/'>
          <img
            src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
            alt=''
          />
        </Link>
        <Link to='/menu' className='header__link'>
          Menu
        </Link>
        <Link className='header__link'>Rewards</Link>
        <Link className='header__link'>Gift Cards</Link>
      </div>
      <div className='header__right'>
        <Example />
        <FindAStore />
        {!user ? (
          <>
            <Link to='/account/create'>
              <SignUpButton />
            </Link>
          </>
        ) : (
          <div className='header__logout'>
            {menuPage ? <LogoutButton /> : <Link to='/menu'>Order Now</Link>}
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
