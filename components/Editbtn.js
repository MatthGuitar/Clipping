import Image from 'next/image'
import BtnStyle from '../styles/Btn.module.scss'

const Editbtn = () => {
  return (
    <div className={BtnStyle.edit_wrapper}>
      <button className={BtnStyle.btn}>Editar</button>
      <div className={BtnStyle.btn_img}>
        <Image
          src='/../public/pencil.svg'
          alt='Ícone lápis'
          width={15}
          height={15}
        />
      </div>
    </div>
  )
}

export default Editbtn
