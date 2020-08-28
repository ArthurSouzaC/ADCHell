import css from './styles.module.css'

export default function Elo({queueType, tier, tier_pt, rank}) {
    return (
        <div className={css.card}>
            <span>{queueType}</span>
            <img src={`ranked_emblems/Emblem_${tier}.png`} />
            <span>{tier_pt}&nbsp;{rank}</span>
        </div>
    )
}