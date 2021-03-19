import Image from 'next/image'
import SearchStyles from '../styles/Search.module.scss'

const Search = () => {
  return (
    <div class={SearchStyles.searchbar}>
      <input type='text' placeholder='Pesquisar' class={SearchStyles.pesquisa}/>
{/*      <Image 
      src='/../public/search.svg' 
      alt='Icone pesquisa'
      width={10}
      height={10}
      class={SearchStyles.lupa}
      /> */}
    </div>
  )
}

export default Search
