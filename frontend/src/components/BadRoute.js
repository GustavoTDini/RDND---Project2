import React from 'react'
import { Link } from 'react-router-dom'

export default function BadRoute() {

  return (
    <div style={{ display: 'flex column', marginTop: 20, textAlign: 'center' }}>
        <h2>404</h2>
        <h4>Sorry, the page you request could not be found</h4>
        <Link
        style={{fontSize: 20}}
        to='/home'
        >Return home</Link>
    </div>
  )
}