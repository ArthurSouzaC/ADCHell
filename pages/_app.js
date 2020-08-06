// Next.js
import Router from 'next/router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// Binding events to nprogress
Router.events.on('routeChangeStart', () => nprogress.start())
Router.events.on('routeChangeComplete', () => nprogress.done())
Router.events.on('routeChangeError', () => nprogress.done())

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
