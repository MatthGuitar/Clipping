import Avatar from './Avatar'
import Editbtn from './Editbtn'
import Share from './Share'
import Counter from './Counter'
import SubcardStyle from '../styles/Subcard.module.scss'

const Subcard = () => {
  return (
    <div class={SubcardStyle.subcard}>
      <div class={SubcardStyle.subcard_img}>
        <Avatar />
      </div>
      <div class={SubcardStyle.subcard_text}>
        <h2 class='subtitle'>Rafael Costa</h2>
        <p>Kderno de perfil de <span class={SubcardStyle.subcard_name}>Rafael Costa</span>
        · 49 visualizações · 2d atrás
        </p>
      </div>
      <div class={SubcardStyle.subcard_btns}>
        <div class={SubcardStyle.subcard_counter}>
          <Counter />
        </div>
          <Share />
          <Editbtn />
      </div>
    </div>    
  )  
}



export default Subcard
