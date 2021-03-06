import React, { useState } from 'react'
import Image from 'next/image'
import Nav from './Nav'
import Visits from './Visits'
import SidebarStyle from '../styles/Sidebar.module.scss'



const Aside = () => {
  const [sidebar, setSidebar] = useState(true)

  const showBar = () => setSidebar(!sidebar)
  return (
    <>
      <div className={SidebarStyle.mobile_header}>
        <div className='menu' onClick={showBar}>
          <Image
            src='/list.svg'
            alt='menu hamburger'
            width={40}
            height={40}
          />
        </div>
      </div>
      <aside className={sidebar ? 'sidebar' : 'sidebar_active'}>
        <Nav />
        <Visits />
      </aside>
    </>
  )
}
export default Aside