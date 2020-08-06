export default function FwChampion({version, champion}) {
    return (
        <a>
            <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion}.png`} title={champion} />
            <span>{champion}</span>
        </a>
    )
}