import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const UnauthenticatedIndicateurs = (props) => {
  return (
    <div>
      <div className='main-container-posts'>
        <h1>Posts</h1>
        <h3>Welcome to the community!</h3>
        <div className='say'>To Say Something Please login</div>
      </div>
    </div>
  )
}

export default UnauthenticatedIndicateurs
