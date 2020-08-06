// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Global CSS
import '../styles/globals.css'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'

// App
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
