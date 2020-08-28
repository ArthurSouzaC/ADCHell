import Link from 'next/link'

import css from './styles.module.css'

export default function Navbar() {
    
    const navbar = React.useRef()
    
    let navExpanded = false

    const toggleNavbar = () => {
        if(navExpanded) {
            navbar.current.style.opacity = '0%'
            navbar.current.style.visibility = 'hidden'
            navExpanded = false
        } else {
            navbar.current.style.opacity = '100%'
            navbar.current.style.visibility = 'visible'
            navExpanded = true
        }
    }
    
    return (
        <>
            <nav className={css.desktopNavbar}>
                <Link href="/"><a>Home</a></Link>
                <Link href="/championList"><a>Campeões</a></Link>
                <Link href="/free-week"><a>Free Week</a></Link>
            </nav>
            
            <nav className={css.mobileNavbar} ref={navbar}>
                <Link href="/"><a onClick={toggleNavbar}>Home</a></Link>
                <Link href="/championList"><a onClick={toggleNavbar}>Campeões</a></Link>
                <Link href="/free-week"><a onClick={toggleNavbar}>Free Week</a></Link>
            </nav>
            
            <div onClick={toggleNavbar} className={css.collapseButton}>
                <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
        </>
    )
}