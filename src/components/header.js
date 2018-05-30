import React from 'react'
import Link from 'gatsby-link'

import bg from '../images/bg/01.jpg'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      height: '60vh',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
