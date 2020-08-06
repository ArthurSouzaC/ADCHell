export default function Champion({version, champion}) {
    return (
        <div>
            <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion}.png`} />
            <span> {champion} </span>
        </div>
    )
}