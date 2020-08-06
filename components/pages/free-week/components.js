export default function FwChampion({version, champion, link}) {
    return (
        <a href={link}>
            <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion}.png`} title={champion} />
            <span>{champion}</span>
        </a>
    )
}