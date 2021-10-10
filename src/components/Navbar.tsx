import React from 'react'

export const Navbar: React.FunctionComponent = () => {
  return (
    <nav>
      <div className="nav-wrapper green lighten-1 px1">
        <a href="/" className="brand-logo">React & TS</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="/">Список дел</a></li>
          <li><a href="/">О нас</a></li>
        </ul>
      </div>
    </nav>
  )
}
