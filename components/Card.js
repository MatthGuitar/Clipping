import Editbtn from './Editbtn'
import Profile from './Profile'
import Cardlinks from './Cardlinks'
import Circles from './Circles'
import CardStyles from '../styles/CardStyles.module.scss'

const Card = () => {
  return (
    <div className={CardStyles.card}>
      <div className={CardStyles.card_body}>
        <div className={CardStyles.card_photo}>
          <Profile />
        </div>
        <div className={CardStyles.card_text}>
          <h2 className='title'>Rafael Costa</h2>
          <h3 className='subtitle'>Estudante em UFMG</h3>
          <p>Survived PhD in Computational Electromagnetics, while working as a researcher,
          applied 20 years ago what will be called now Machine Learning to solve ill-posed
          inverse problems in NDT, worked for long time in Software Development, even for a while as
          a Project Manager.
          </p>
          <div className={CardStyles.card_btns}>
            <Circles />
            <Editbtn />
          </div>
        </div>
      </div>
      <div>
        <Cardlinks />
      </div>
    </div>
  )
}

export default Card
