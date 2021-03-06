import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import logo from '../assets/images/logo-bg.png'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><img src={logo} height="50px" width="50px" style={{position:'relative',top:'20px'}} /><span>CACHORRISIMO</span></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
