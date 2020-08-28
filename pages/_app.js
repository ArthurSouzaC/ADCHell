// Global CSS
import '../styles/globals.css'

// Global components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// NProgress
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

// App
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div id="root">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
