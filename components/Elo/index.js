import style from './styles.module.css'

export default function Elo({queueType, tier, tier_pt, rank}) {
    return (
        <div>
            {queueType}
            <img src={`ranked_emblems/Emblem_${tier}.png`} />
            {tier_pt} {rank}
        </div>
    )
}