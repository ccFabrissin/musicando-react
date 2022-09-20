import React from 'react'
import logo from './../assets/disc.png';

function Header() {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> - Musicando</h1>
      </header>
  )
}

export default Header