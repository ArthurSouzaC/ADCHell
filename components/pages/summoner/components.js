export function ProfileHeader({version, profile}) {
    return (
        <div>
            <div>
                <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${profile.profileIconId}.png`} />
                <div>{profile.summonerLevel}</div>
            </div>

            <div>
                {profile.name}
            </div>
        </div>
    )
}

export function Elo({queueType, tier, tier_pt, rank}) {
    return (
        <div>
            {queueType}
            <img src={`ranked_emblems/Emblem_${tier}.png`} />
            {tier_pt} {rank}
        </div>
    )
}

export function TopMastery({championName, championLevel, version}) {
    return (
        <div>
            <div>
                {championName}
                <img src={`mastery_icons/mastery-${championLevel}.png`} />
            </div>
            <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championName}.png`} />
        </div>  
    )  
}

export function Match({version, currentPlayer, participants}) {
    let status
    if(currentPlayer.win){
        status = ['matchWon;', 'Vitória']
    } else {
        status = ['matchLost;', 'Derrota']
    }

    return (
        <div className={status[0]}>
            {status[1]}
            <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${currentPlayer.champion}.png`} /> 
        
            <div>
                <span>{currentPlayer.kills}/{currentPlayer.deaths}/{currentPlayer.assists}</span>
                <span>{currentPlayer.farm}</span>
            </div>

            <div>
                <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${currentPlayer.spell1}.png`} />
                <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${currentPlayer.spell2}.png`} />
            </div>

            <div>
                {currentPlayer.items.map((item, i) => {
                    return <Item key={'item-' + item}version={version} itemId={item}/>
                })}
            </div>

            <div>
                <div>
                    {participants.map((player, i) => {
                        if(i < 5){
                            return <BlueTeamPlayer key={'participant-' + i} version={version} participant={player}/>
                        }
                    })}
                </div>
                <div>
                {participants.map((player, i) => {
                        if(i >= 5 || i < 10){
                            return <RedTeamPlayer key={'participant-' + i} version={version} participant={player}/>
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export function Item({version, itemId}) {
    if(itemId){
        return (
            <img  src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${itemId}.png`} />
        )
    } else {
        return (
            <div style={{width: '70px', height: '70px', background: 'gray'}} />
        )
    }
}

export function BlueTeamPlayer({version, participant}) {
    return (
        <div className="blueTeamPlayer">
            <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${participant.championId}.png`} />&nbsp;&nbsp;
            <a href={`/summoner?summonerName=${participant.participantId.summonerName}&region=br1`}> 
            {participant.participantId.summonerName} </a> &nbsp;&nbsp;&nbsp;
            <strong>
                {participant.stats.kills}/{participant.stats.deaths}/{participant.stats.assists}
            </strong>
        </div>
    )
}

export function RedTeamPlayer({version, participant}) {
    return (
        <div className="redTeamPlayer">
            <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${participant.championId}.png`} />&nbsp;&nbsp;
            <a href={`/summoner?summonerName=${participant.participantId.summonerName}&region=br1`}> 
            {participant.participantId.summonerName} </a> &nbsp;&nbsp;&nbsp;
            <strong>
                {participant.stats.kills}/{participant.stats.deaths}/{participant.stats.assists}
            </strong>
        </div>
    )
}