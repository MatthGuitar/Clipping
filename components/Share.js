import Image from 'next/image'
import ShareStyle from '../styles/Share.module.scss'

const Share = () => {
  return (
    <div className={ShareStyle.share}>
      <button>
        Compartilhar
      </button>
      <Image
        src='/../public/people.svg'
        width={20}
        height={20}
      />
    </div>
  )
}

export default Share
