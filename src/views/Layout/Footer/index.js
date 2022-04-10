import React from 'react'
import './style.scss'

const Footer = () => {
  return (
    <footer>
      <div className='repository'>
        <span className='vcs'>git</span> 
        <a target="_blank" rel='noreferrer' href={'https://github.com/Burak-Bayraktar/job-tracking-app'} className='repository-info'>repository</a>
      </div>
      <div className='copyright'>© { new Date().getFullYear() } Burak Bayraktar</div>
    </footer>
  )
}

export default Footer