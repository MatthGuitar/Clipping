import SumaryStyles from '../styles/Sumary.module.scss'
const Sumary = () => {
  return (
    <div>
      <h2 class='subtitle'>Sumário</h2>
      <ul class={SumaryStyles.sumary_list}>
        <li>Introdução</li>
        <li>A herança da colônia;</li>
        <li>A diplomacia Imperial</li>
        <li>A obra republicana do Barão do Rio Branco.</li>
      </ul>
    </div>
  )
}

export default Sumary
