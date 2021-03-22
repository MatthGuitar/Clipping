import Image from 'next/image'
import AvatarStyle from '../styles/Avatar.module.scss'

const Avatar = () => {
  return (
      <Image
        src="/../public/perfil3.jpg"
        alt='Foto de perfil'
        width={35}
        height={35}
        className={AvatarStyle.avatar}
      />
  )
}

export default Avatar
