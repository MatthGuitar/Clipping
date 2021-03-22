import React, { useState } from 'react'
import Image from 'next/image'
import MenuStyle from '../styles/Menu.module.scss'

const Menubtn = () => {
  const [sidebar, setSidebar] = useState(false)

  const showBar = () => setSidebar(!sidebar)
  return (
    <div class='menu'onClick={showBar}>
        <Image 
        src='/../public/list.svg'
        alt='menu hamburger'
        width={50}
        height={50}
        />
    </div>
  )
}

export default Menubtn
