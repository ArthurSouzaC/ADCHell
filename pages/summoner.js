import Head from 'next/head'

// Riot API request functions
import { 
    getCurrentGameVersion,
    getChampionsData,
    getSummonerSpells,
    getSummoner,
    getMasteries,
    getElo,
    getMatchList,
    getMatch
} from '../requests/apiRequests.js'


// Page components
import Elo from '../components/Elo'
import TopMastery from '../components/TopMastery'
import Match from '../components/Match'


var version, champions, spells
async function preload() {
    version = await getCurrentGameVersion()
    champions = await getChampionsData(version)
    spells = await getSummonerSpells(version)
}

// Summoner info page
export default function Summoner({summoner, version}) {
    return (
        <>
           <div>
                <div>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${summoner.profile.profileIconId}.png`} />
                    <div>{summoner.profile.summonerLevel}</div>
                </div>

                <div>
                    {summoner.profile.name}
                </div>
            </div>

            <div>
                <div>
                    {summoner.rank.map((rank, i) => {
                        return <Elo key={'elo-' + rank.queueType}{...rank}/>
                    })}
                </div>

                <div>
                    {summoner.masteries.map((mastery, i) => {
                        if(i < 3){
                            return <TopMastery key={'topmastery-' + mastery.championId} version={version} {...mastery}/>
                        }
                    })}
                </div>
            </div>

            <div>
                {summoner.games.map((game, i) => {
                    return <Match key={'match-' + game.gameId} version={version} {...game}/>
                })}
            </div>

        </>
    )
}

export async function getServerSideProps(ctx) {
    await preload()
    const region = ctx.query.region
    const summonerName = ctx.query.summonerName
    const profile = await getSummoner(region, summonerName)
    const masteries = await getMasteries(region, profile.id, champions)
    const rank = await getElo(region, profile.id)
    const matchList = await getMatchList({
        region,
        accountId: profile.accountId,
        beginIndex: 0,
        endIndex: 5
    })
    const games = []

    for(let match of matchList){
        games.push(await getMatch(region, match.gameId, profile.id, champions, spells))
    }
    
    return {
        props: {
            summoner: {
                profile,
                masteries,
                rank,
                games
            },
            version
        }
    }
}