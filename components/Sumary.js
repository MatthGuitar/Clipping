import SumaryStyles from '../styles/Sumary.module.scss'
const Sumary = () => {
  return (
    <div class={SumaryStyles.sumary}>
      <h2 class='title'>Sumário</h2>
      <ol class={SumaryStyles.sumary_list}>
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
      </ol>
    </div>
  )
}

export default Sumary
