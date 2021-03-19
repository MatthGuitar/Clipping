import Avatar from './Avatar'
import Editbtn from './Editbtn'
import SubcardStyle from '../styles/Subcard.module.scss'

const Subcard = () => {
  return (
    <div class={SubcardStyle.subcard}>
      <Avatar />
      <h2 class='subtitle'>Rafael Costa</h2>
      <p>Kderno de perfil de Rafael Costa</p>
      <p>· 49 visualizações · 2d atrás</p>
      <div>
        <div>
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
