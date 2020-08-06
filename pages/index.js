// Next.js
import Head from 'next/head'
import { useRouter } from 'next/router'

// Home CSS
import styles from '../styles/Home.module.css'

// React-Bootstrap
import { Button, Form } from 'react-bootstrap'

export default function Home() {

	const router = useRouter()
	const [summonerName, setSummonerName] = React.useState('')
	const [region, setRegion] = React.useState('br1')

	function handleSubmit(event) {
		router.push({
		pathname: '/summoner',
		query: {
			summonerName,
			region
		}
		})

		event.preventDefault()
	}

	return (
		<>

		<div>
			<Head>
				<title>ADCHell - League of Legends info</title>
				<link rel="icon" href="/adchell-logo.ico" />
			</Head>

			<div className={styles.container}>
			<div className={styles.header}>
				<img className={styles.header_brand} src="brand/adchell-logo.svg" title="ADCHell" alt="Brand" />
				<h1 className={styles.header_name}>ADCHell</h1>
			</div>

			<Form className={styles.summoner_search_form} onSubmit={handleSubmit} >

				<Form.Group controlId="summonerName">
				<Form.Label>Nome de Invocador</Form.Label>
				<Form.Control name="summonerName" size="lg" type="text" value={summonerName} onChange={e => setSummonerName(e.target.value)} required/>
				</Form.Group>

				<Form.Group controlId="region">
				<Form.Label>Região</Form.Label>
				<Form.Control name="region" as="select" value={region} onChange={e => setRegion(e.target.value)}>
					<option value="br1">BR1</option>
					<option value="eun1">EUN1</option>
					<option value="euw1">EUW1</option>
					<option value="jp1">JP1</option>
					<option value="kr">KR</option>
					<option value="la1">LA1</option>
					<option value="la2">LA2</option>
					<option value="na1">NA1</option>
					<option value="oc1">OC1</option>
					<option value="tr1">TR1</option>
					<option value="ru">RU</option>
				</Form.Control>
				</Form.Group>

				<Button variant="primary" type="submit">Buscar</Button>
			</Form>
			</div>
		</div>

		</>
	)
}
