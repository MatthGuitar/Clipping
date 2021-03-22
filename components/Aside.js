import React, { useState } from 'react'
import Image from 'next/image'
import Nav from './Nav'
import Visits from './Visits'
import Logo from './Logo'
import Menubtn from './Menubtn'
import SidebarStyle from '../styles/Sidebar.module.scss'



const Aside = () => {
  const [sidebar, setSidebar] = useState(false)

  const showBar = () => setSidebar(!sidebar)
  return (
    <aside className={sidebar ? 'sidebar' : 'sidebar_active'}>
      <div class={SidebarStyle.mobile_header}>
        <Menubtn onClick={showBar}/>
        <Logo />
      </div>
      <Nav />
      <Visits />
    </aside>
  )
}
export default Aside