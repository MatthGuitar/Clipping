import Image from 'next/image'
import SearchStyles from '../styles/Search.module.scss'

const Search = () => {
  return (
    <div class={SearchStyles.searchbar}>
      <input type='text' placeholder='Pesquisar' class={SearchStyles.pesquisa} />
      <div class={SearchStyles.lupa}>
        <Image
          src='/../public/search.svg'
          alt='Icone pesquisa'
          width={10}
          height={10}
        />
      </div>
    </div>
  )
}

export default Search
