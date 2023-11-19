import {useContext} from 'react'
import jwt_decode from "jwt-decode"
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'

function Navbar() {

  const {user, logoutUser} = useContext(AuthContext)
  const token = localStorage.getItem("authTokens")

  if (token){
    const decoded = jwt_decode(token) 
    var user_id = decoded.user_id
  }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Chat App
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
              <Link className="navbar-brand" to="/"> <i className='fas fa-home'></i> Home</Link>
              </li>
              {token === null && 
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login"><i className='fas fa-sign-in-alt'></i> Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register"><i className='fas fa-user-plus'></i> Register</Link>
                </li>
              </>
              }

            {token !== null && 
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/inbox"> <i className='fas fa-envelope'></i> Inbox</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={logoutUser} style={{cursor:"pointer"}}> <i className='fas fa-sign-out-alt'></i>Logout</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">{user.username}</a>
                </li>
              </>
              }   
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar