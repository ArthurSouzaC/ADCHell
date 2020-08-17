import styles from './styles.module.css'

export default function ListedChampion({version, champion, link}) {
    return (
        <a href={link}>
            <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion}.png`} />
            <span> {champion} </span>
        </a>
    )
}