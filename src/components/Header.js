import React from 'react'
import { NavLink } from 'react-router-dom';
import Tab from './Tab';


export default function Header() {
    return (
        <div className="tabs">
        <Tab name="Home" className="hey">
          <NavLink to="/" activeClassName="is-active" exact >Home</NavLink>
        </Tab>
        <Tab name="About">
          <NavLink to="/about" activeClassName="is-active" >About</NavLink>
        </Tab>
        <Tab name="Features">
          <NavLink to="/features" activeClassName="is-active" >Features</NavLink>
        </Tab>
      </div>
    )
}
