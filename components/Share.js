import Image from 'next/image'
import ShareStyle from '../styles/Share.module.scss'

const Share = () => {
  return (
    <div className={ShareStyle.share}>
      <button>
        Compartilhar
      </button>
      <div className={ShareStyle.share_img}>
        <Image
          src='/../public/people.svg'
          alt='Icone pessoas'
          width={20}
          height={20}
        />
      </div>
    </div>
  )
}

export default Share
