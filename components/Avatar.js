import Image from 'next/image'
import AvatarStyle from '../styles/Avatar.module.scss'

const Avatar = () => {
  return (
      <Image
        src="/../public/perfil.jpg"
        alt='Foto de perfil'
        width={45}
        height={45}
        class={AvatarStyle.avatar}
      />
  )
}

export default Avatar
