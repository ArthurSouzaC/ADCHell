// Global CSS
import '../styles/globals.css'

// Global components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
