import Image from 'next/image'
import ProfileStyle from '../styles/Profile.module.scss'

const Profile = () => {
  return (
      <Image 
      src = "/../public/perfil.jpg"
      alt = 'Foto de perfil'
      width={300}
      height={300}
      class={ProfileStyle.perfil}
      />
  )
}

export default Profile
