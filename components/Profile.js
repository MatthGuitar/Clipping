import Image from 'next/image'
import ProfileStyle from '../styles/Profile.module.css'

const Profile = () => {
  return (
    <div>
      <Image 
      src = "/../public/perfil.jpg"
      alt = 'Foto de perfil'
      width={500}
      height={500}
      class={ProfileStyle.perfil}
      />
    </div>
  )
}

export default Profile
