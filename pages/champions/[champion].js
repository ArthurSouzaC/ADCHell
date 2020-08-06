import {useRouter} from 'next/router'

export default function Champion() {
    const router = useRouter()
    const {champion} = router.query
    
    return <p> {champion} </p>
}