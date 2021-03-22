import React, { useState } from 'react'
import Image from 'next/image'
import Avatar from './Avatar'
import Logo from './Logo'
import Dotbtn from './Dotbtn'
import Menubtn from './Menubtn'
import Search from './Search'
import HeaderStyles from '../styles/Header.module.scss'


const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  const showBar = () => setSidebar(!sidebar)
  return (
    <header class={HeaderStyles.header}>
      <div class='menu' onClick={showBar}>
        <Image
          src='/../public/list.svg'
          alt='menu hamburger'
          width={50}
          height={50}
        />
      </div>
      <Logo />
      <Search />
      <div class={HeaderStyles.top_menu}>
        <Avatar />
        <Dotbtn />
      </div>
    </header>
  )
}

export default Header
