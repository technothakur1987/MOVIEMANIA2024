import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='spinnerdiv'>
    <div className="spinner-border text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
</div>
  )
}

export default Spinner
