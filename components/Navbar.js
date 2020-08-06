// Next.js
import Link from 'next/link'

// Bootstrap


// Navbar component
export default function Navbar() {
    return (
        <>

            <nav>
                <Link href="/"><a>Home</a></Link>
                <Link href="/championList"><a>Campeões</a></Link>
                <Link href="/free-week"><a>Rotação Gratuita</a></Link>
            </nav>
        
        </>
    )
}