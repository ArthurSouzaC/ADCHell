import Head from 'next/head'

// Home CSS
import styles from '../styles/home.module.css'

// Homepage
export default function Home() {

	const [summonerName, setSummonerName] = React.useState('')
	const [region, setRegion] = React.useState('br1')

	return (
		<div>
			<Head>
				<title>ADCHell - League of Legends info</title>
				<link rel="icon" href="/adchell-logo.ico" />
			</Head>

			<div>
			<div>
				<img src="brand/adchell-logo.svg" title="ADCHell" alt="Brand" />
				<h1>ADCHell</h1>
			</div>

			<form action="/summoner" method="get">

				<label htmlFor="summonerName">Nome de Invocador</label>
				<input name="summonerName" type="text" value={summonerName} onChange={e => setSummonerName(e.target.value)} required/>

				<label htmlFor="region">Região</label>
				<select name="region" value={region} onChange={e => setRegion(e.target.value)}>
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
				</select>

				<button type="submit">Buscar</button>
			</form>
			</div>
		</div>
	)
}
