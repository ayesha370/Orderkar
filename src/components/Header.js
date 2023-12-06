import React from 'react'
import Button from 'react-bootstrap/Button'

const Header = () => {
  return (
    <div className='header-wraper'>
      <div className='main-info'>
        <h1>Ordering made easy, flavors delivered to your doorstep</h1>
        <h3>
          Explore our diverse menu, customize your preferences, and await a
          delightful dining experience
        </h3>
        <Button className='Cbutton' variant='primary'>
          Contact Us
        </Button>{' '}
      </div>
    </div>
  )
}

export default Header
