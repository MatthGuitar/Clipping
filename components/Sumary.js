import SumaryStyles from '../styles/Sumary.module.scss'
const Sumary = () => {
  return (
    <div class={SumaryStyles.sumary}>
      <h2 class='subtitle'>Sumário</h2>
      <ol class={SumaryStyles.sumary_list}>
        <li>Introdução</li>
        <li>A herança da colônia;</li>
        <li>A diplomacia Imperial</li>
        <li>A obra republicana do Barão do Rio Branco.</li>
      </ol>
    </div>
  )
}

export default Sumary
