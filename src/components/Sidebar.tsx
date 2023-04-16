import twitterLogo from '../assets/logo-twitter.svg'

import { NavLink } from 'react-router-dom'

import './Sidebar.css'

import { Bell, House, Hash, BookmarkSimple, DotsThreeCircle, Envelope, FileText, User, Pencil } from '@phosphor-icons/react'

export function Sidebar() {
  return (
    <aside className="siderbar">
      <img className="logo" src={twitterLogo} alt="logo" />
        
      <nav className="main-navigation">
        <NavLink to="/">
          <House weight="fill" />
          <span>Home</span>
        </NavLink>
        
        <a href="">
          <Hash /> 
          <span>Explore</span>
        </a>
        <a href="">
          <Bell />
          <span>Notifications</span>
        </a>
        <a href="">
          <Envelope />
          <span>Messages</span>
        </a>
        <a href="">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a href="">
          <FileText />
          <span>Lists</span>
        </a>
        <a href="">
          <User />
          <span>Profile</span>
        </a>
        <a href="">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>
        
      <button className="new-tweet" type="submit">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  )
}