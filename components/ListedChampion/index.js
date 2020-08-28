import css from './styles.module.css'

export default function ListedChampion({version, champion, link}) {
    return (
        <a className={css.card} href={link}>
            <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion}.png`} />
            <span> {champion} </span>
        </a>
    )
}