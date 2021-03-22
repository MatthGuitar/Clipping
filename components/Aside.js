import React, { useState } from 'react'
import Image from 'next/image'
import Nav from './Nav'
import Visits from './Visits'
import Logo from './Logo'
import Menubtn from './Menubtn'
import SidebarStyle from '../styles/Sidebar.module.scss'



const Aside = () => {
  const [sidebar, setSidebar] = useState(true)

  const showBar = () => setSidebar(!sidebar)
  return (
    <aside className={sidebar ? 'sidebar' : 'sidebar_active'}>
      <div class={SidebarStyle.mobile_header}>
        <div class='menu' onClick={showBar}>
          <Image
            src='/../public/list.svg'
            alt='menu hamburger'
            width={50}
            height={50}
          />
        </div>
        <Logo />
      </div>
      <Nav />
      <Visits />
    </aside>
  )
}
export default Aside