import Avatar from './Avatar'
import Logo from './Logo'
import Search from './Search'
import HeaderStyles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <div class={HeaderStyles.header}>
      <Logo class={HeaderStyles.logo} />
      <div>
      <Search class={HeaderStyles.pesquisa} />
      </div>
      <div>
        <Avatar />
      </div>
    </div>
  )
}

export default Header
