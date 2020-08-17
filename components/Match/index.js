import style from './styles.module.css'

// Components
import Item from '../Item'
import TeamPlayer from '../TeamPlayer'

export default function Match({version, currentPlayer, participants}) {
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
                            return <TeamPlayer key={'participant-' + i} version={version} participant={player} side="blueside"/>
                        }
                    })}
                </div>
                <div>
                {participants.map((player, i) => {
                        if(i >= 5 || i < 10){
                            return <TeamPlayer key={'participant-' + i} version={version} participant={player} side="redside"/>
                        }
                    })}
                </div>
            </div>
        </div>
    )
}