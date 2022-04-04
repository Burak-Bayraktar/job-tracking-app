import React from 'react'
import './style.scss'

const Footer = () => {
  return (
    <footer>
      <div className='repository'>
        <span className='vcs'>git</span> 
        <a href='#' className='repository-info'>repository</a>
      </div>
      <div className='copyright'>© { new Date().getFullYear() } Dilsaz Oktayı</div>
    </footer>
  )
}

export default Footer