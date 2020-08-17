import Head from 'next/head'

// Riot API request functions
import { 
    getCurrentGameVersion,
    getChampionsData,
    getFreeWeek
} from '../requests/apiRequests.js'

// Page components
import ListedChampion from '../components/ListedChampion'

var version, champions, freeWeek
async function preload() {
    version = await getCurrentGameVersion()
    champions = await getChampionsData(version)
    freeWeek = await getFreeWeek(champions)
}

// Free Week list page
export default function FreeWeek({freeWeek, version}) {
    return (
        <div>
            <Head>
                <title>ADCHell - League of Legends info</title>
                <link rel="icon" href="/adchell-logo.ico" />
            </Head>
            
            {freeWeek.map((champion, i) => {
                return <ListedChampion key={'fwchampion-' + champion} version={version} champion={champion} link={`/champions/${champion}`}/>
            })}
        </div>
)
}

export async function getServerSideProps() {
    await preload()
    return {
        props: {
            freeWeek,
            version
        }
    }
}