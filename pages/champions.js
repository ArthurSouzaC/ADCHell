// Next.js
import Head from 'next/head'
import styles from '../styles/Champions.module.css'

// Page components
import Champion from '../components/pages/champions/components.js'

// Riot API request functions
import { 
    getCurrentGameVersion,
    getChampionsData
} from '../requests/apiRequests.js'

var version, champions
async function preload() {
    version = await getCurrentGameVersion()
    champions = await getChampionsData(version)
}

// Champions page
export default function Champions({version, champions}) {
    return (
        <div>
            <Head>
                <title>ADCHell - campeões</title>
                <link rel="icon" href="/adchell-logo.ico" />
            </Head>

            {Object.entries(champions).map((champion, i) => {
                return(
                    <Champion key={'champion-list-' + champion[0]} version={version} champion={champion[0]} />
                )
            })}
        </div>
    )
}

export async function getServerSideProps() {
    await preload()
    return {
        props: {
            champions,
            version
        }
    }
}