import Image from 'next/image'
import CircleStyles from '../styles/Circle.module.scss'

function Circles() {
  return (
    <ul className={CircleStyles.circle}>
      <li>
        <Image
          src="/../public/circle.svg"
          alt="Circle"
          width={25}
          height={25}
        />
      </li>
      <li>
        <Image
          src="/../public/circle.svg"
          alt="Circle"
          width={25}
          height={25}
        />
      </li>
      <li>
        <Image
          src="/../public/circle.svg"
          alt="Circle"
          width={25}
          height={25}
        />
      </li>
    </ul>
  )
}

export default Circles
