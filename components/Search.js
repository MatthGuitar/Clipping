import SearchStyles from '../styles/Search.module.css'

const Search = () => {
  return (
    <div class={SearchStyles.pesquisa_div}>
      <input type='text' placeholder='Pesquisar' class={SearchStyles.pesquisa}/>
    </div>
  )
}

export default Search
