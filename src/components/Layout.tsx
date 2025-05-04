import React from 'react'
import '../styles/Layout.sass'
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from "../hooks/AuthContext";

const Layout: React.FC = () => {
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  const { logout } = useAuth();
  function submitLogout(){
    localStorage.removeItem('accessToken')
    navigate('/home')
    logout();
  }
  return (
    <>
      <header className='header'>
        <p>logo</p>
        {token ? (
          <nav className='col-2 header__nav'>
            <a href='/usertickets'>My tickets</a>
            <a onClick={submitLogout}>Log out</a>
          </nav>
        ) : (
          <nav className='col-1 header__nav'>
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
