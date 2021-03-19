import Editbtn from './Editbtn'
import Profile from './Profile'
import Cardlinks from './Cardlinks'
import CardStyles from '../styles/CardStyles.module.scss'

const Card = () => {
  return (
    <div class={CardStyles.card_div}>
      <div class={CardStyles.card_body}>
        <div class={CardStyles.card_photo}>
          <Profile />
        </div>
        <div class={CardStyles.card_text}>
          <h2 class='title'>Rafael Costa</h2>
          <h3>Estudante UFMG</h3>
          <p>Survived PhD in Computational Electromagnetics, while working as a researcher,
          applied 20 years ago what will be called now Machine Learning to solve ill-posed
          inverse problems in NDT, worked for long time in Software Development, even for a while as
          a Project Manager.
          </p>
          <Editbtn />
        </div>
      </div>
      <div class={CardStyles.card_links}>
        <Cardlinks />
      </div>
    </div>
  )
}

export default Card
