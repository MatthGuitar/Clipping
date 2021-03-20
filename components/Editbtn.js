import Image from 'next/image'
import BtnStyle from '../styles/Btn.module.scss'

const Editbtn = () => {
  return (
    <div class={BtnStyle.edit_wrapper}>
      <button class={BtnStyle.btn}>Editar Perfil</button>
      <div class={BtnStyle.btn_img}>
        <Image
          src='/../public/pencil.svg'
          width={15}
          height={15}
        />
      </div>
    </div>
  )
}

export default Editbtn
