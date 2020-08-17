import {useRouter} from 'next/router'

// CSS
import styles from '../../styles/champion.module.css'

// Unique champion page
export default function Champion() {
    const router = useRouter()
    const {champion} = router.query
    
    return <p> {champion} </p>
}