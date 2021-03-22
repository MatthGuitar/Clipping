import Sidesumary from '../components/Sidesumary'
import Sumary from '../components/Sumary'
import TextStyle from '../styles/Maintext.module.scss'

const Maintext = () => {
  return (
    <section className={TextStyle.main_container}>
      <Sumary />
      <Sidesumary />
      <div className={TextStyle.text}>
        <h1 className='title'>Introdução</h1>
        <p>
          <p>Este é um resumo sobre as Fronteiras do Brasil.</p>
          <p>
            O Clipping também decidiu produzir esse material pois se trata de um dos conteúdos mais cobrados
            dos candidatos tanto na Prova Objetiva quanto na prova de Terceira Fase do CACD. Trata-se de um
            conteúdo cheio de detalhes, datas e tratados diferentes, mas é incontornável para qualquer candidato ao CACD.
        </p>
          É fundamental que o candidato ao CACD saiba tudo sobre as fronteiras,
           e esse resumo de última hora,
           bem sintético, será especial para isso.
          Você encontrará neste resumo, uma síntese dos 3 capítulos da obra que são relevantes para o CACD:
        </p>
        <div className={TextStyle.text_list}>
          <p>1. A herança da colônia;</p>
          <p>2. A diplomacia Imperial;</p>
          <p>3. A obra republicana do Barão do Rio Branco.</p>
        </div>
        <p>
          Ao final da leitura desse resumo, você estará 100% com os assuntos cobrados no CACD a respeito dos tratados que formaram as fronteiras do Brasil.
          Este tópico deve ser estudado após você ter estudado o tópico Período colonial do Edital.
          Marque o seu grau de familiariedade com o conteúdo que precede o estudo deste caderno.
        </p>
      </div>
    </section>
  )
}

export default Maintext
