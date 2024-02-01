import React from 'react'
import './ErrorPage.css'
import { Link } from 'react-router-dom'
import oops from './assets/oops.png'


const ErrorPage = () => {
  return (
    <div className='text-white'>
        <img
            src={oops}
            className="img-fluid rounded-top mb-3"
            alt="oops image "
        />
        <h1>404 Error</h1>
        <Link to='/'>Back To Main Page</Link>
        
      
    </div>
  )
}

export default ErrorPage
