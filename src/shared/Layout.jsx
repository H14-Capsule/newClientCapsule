import Header from '../components/Header'
import { BackgroundOverlay, BackgroundStyle } from '../style/globalStyle'

const Layout = ({ children }) => {
  return (
    <>
      <BackgroundOverlay>
        <BackgroundStyle>
          <Header />
          <div>{children}</div>
        </BackgroundStyle>
      </BackgroundOverlay>
    </>
  )
}

export default Layout
