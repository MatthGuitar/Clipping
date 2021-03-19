import Nav from './Nav'
import Visits from './Visits'
import Header from './Header'


const Layout = ({ children }) => {
  return (
    <>
    <Header />
    <div>
    <Nav />
    </div>
    <div>
    <Visits />
    {children}
    </div>
    </>
  )
}
export default Layout