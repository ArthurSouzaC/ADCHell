import style from './styles.module.css'

export default function TopMastery({championName, championLevel, version}) {
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