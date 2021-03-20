import Avatar from './Avatar'
import Editbtn from './Editbtn'
import SubcardStyle from '../styles/Subcard.module.scss'

const Subcard = () => {
  return (
    <div class={SubcardStyle.subcard}>
      <div class={SubcardStyle.subcard_img}>
        <Avatar />
      </div>
      <div class={SubcardStyle.subcard_text}>
        <h2 class='subtitle'>Rafael Costa</h2>
        <p>Kderno de perfil de <a href='/' class ={SubcardStyle.subcard_name}>Rafael Costa</a> · 49 visualizações · 2d atrás</p>
      </div>
      <div class ={SubcardStyle.subcard_btns}>
        <div class={SubcardStyle.subcard_counter}>
          <button>^</button>
          <p>45</p>
        </div>
        <button>
          Compartilhar
        </button>
        <Editbtn />
      </div>
    </div>
  )
}

export default Subcard
