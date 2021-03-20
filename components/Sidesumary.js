import SideStyles from '../styles/Sidesumary.module.scss'

const Sidesumary = () => {
  return (
    <div class={SideStyles.side}>
      <div class={SideStyles.sumary_list}>
        <ul>
          <h2 class='subtitle'>Sumário</h2>
          <li>
            <a href='#'>
              Introdução
            </a>
          </li>
          <li>
            <a href='#'>
              A herança da colônia
            </a>
          </li>
          <li>
            <a href='#'>
              A diplomacia Imperial
            </a>
          </li>
          <li>
            <a href='#'>
              A obra republicana do Barão do Rio Branco.
            </a>
          </li>
        </ul>
        <div>
          <ul>
            <li>
              <a href='#'>
                Anotações
            </a>
            </li>
            <li>
              <a href='#'>
                Comentários
            </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidesumary
