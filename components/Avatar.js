import Image from 'next/image'
import AvatarStyle from '../styles/Avatar.module.css'

const Avatar = () => {
  return (
   
      <Image
        src="/../public/perfil.jpg"
        alt='Foto de perfil'
        width={42}
        height={42}
        class={AvatarStyle.avatar}
      />
   
  )
}

export default Avatar
