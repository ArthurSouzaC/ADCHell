import style from './styles.module.css'

export default function Item({version, itemId}) {
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