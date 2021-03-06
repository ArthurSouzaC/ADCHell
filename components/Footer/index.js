import css from './styles.module.css'

// Navbar component
export default function Footer() {
    return (
        <footer className={css.footer}>
            <p> 
                © 2020 ADCHell. ADCHell isn’t endorsed by Riot Games and doesn’t reflect 
                the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. 
                League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends 
                © Riot Games, Inc. 
            </p>
        </footer>
    )
}