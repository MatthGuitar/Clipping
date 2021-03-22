import Image from 'next/image'
import SearchStyles from '../styles/Search.module.scss'

const Search = () => {
  return (
    <div className={SearchStyles.searchbar}>
      <input type='text' placeholder='Pesquisar' className={SearchStyles.pesquisa} />
      <div class={SearchStyles.lupa}>
        <Image
          src='/search.svg'
          alt='Ícone de pesquisa'
          width={10}
          height={10}
        />
      </div>
    </div>
  )
}

export default Search
