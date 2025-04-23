import React from 'react'
import '../styles/Layout.sass'
import { Outlet } from 'react-router-dom';


const Layout: React.FC = () => {
  const token = localStorage.getItem('accessToken');
  return (
    <>
      <header className='header'>
        <p>logo</p>
        {token ? (
          <nav className='col-2 header__nav'>
            <a>My tickets</a>
            <a href='/logout'>Log out</a>
          </nav>
        ) : (
          <nav className='col-2 header__nav'>
              <a>My tickets</a>
              <a href='/login'>Log in</a>
          </nav>

        )}
      </header>
      {<Outlet />}
      <footer>
        footer
      </footer>
    </>
  )
}

export default Layout
