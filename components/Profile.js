import Image from 'next/image'
import ProfileStyle from '../styles/Profile.module.scss'

const Profile = () => {
  return (
      <Image 
      src = "/perfil3.jpg"
      alt = 'Foto de perfil'
      width={120}
      height={120}
      className={ProfileStyle.perfil}
      />
  )
}

export default Profile
