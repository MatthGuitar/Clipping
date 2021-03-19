import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <Image 
      src = "/../public/image 2.png"
      alt = 'Foto de perfil'
      width={100}
      height={20}
        />
    </div>
  )
}

export default Logo
