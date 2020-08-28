import Head from 'next/head'

// CSS
import css from '../styles/championList.module.css'

// Page components
import ListedChampion from '../components/ListedChampion'

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

// Champion list page
export default function ChampionList({version, champions}) {
    return (
        <>
            <h1 className={css.title}>Campeões</h1>
            <div className={css.container}>
                <Head>
                    <title>ADCHell - campeões</title>
                    <link rel="icon" href="/adchell-logo.ico" />
                </Head>

                {Object.entries(champions).map((champion, i) => {
                    return(
                        <ListedChampion key={'champion-list-' + champion[0]} version={version} champion={champion[0]} link={`/champions/${champion[0]}`}/>
                    )
                })}
            </div>
        </>
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