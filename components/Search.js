import Image from 'next/image'
import SearchStyles from '../styles/Search.module.scss'

const Search = () => {
  return (
    <div className={SearchStyles.searchbar}>
      <input type='text' placeholder='Pesquisar' className={SearchStyles.pesquisa} />
      <div className={SearchStyles.lupa}>
        <Image
          src='/search.svg'
          alt='Ícone de pesquisa'
          width={15}
          height={15}
        />
      </div>
    </div>
  )
}

export default Search
