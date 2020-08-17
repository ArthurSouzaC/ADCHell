import style from './styles.module.css'

export default function TeamPlayer({version, participant, side}) {
    return (
        <div className={side}>
            <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${participant.championId}.png`} />&nbsp;&nbsp;
            <a href={`/summoner?summonerName=${participant.participantId.summonerName}&region=br1`}> 
            {participant.participantId.summonerName} </a> &nbsp;&nbsp;&nbsp;
            <strong>
                {participant.stats.kills}/{participant.stats.deaths}/{participant.stats.assists}
            </strong>
        </div>
    )
}