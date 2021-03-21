import Nav from './Nav'
import Visits from './Visits'
import Logo from './Logo'
import Menubtn from './Menubtn'
import AsideStyles from '../styles/Sidebar.module.scss'


const Aside = () => {
  return (
    <aside class={AsideStyles.sidebar}>
      <div class={AsideStyles.mobile_header}>
        <Menubtn />
        <Logo />
      </div>
      <Nav />
      <Visits />
    </aside>
  )
}
 export default Aside