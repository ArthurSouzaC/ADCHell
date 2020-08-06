// modules for request
import https from 'https'
import http from 'http'

// data Language
const lang = 'pt_BR'


// get current League of Legends version
export function getCurrentGameVersion() {
    const url = `https://ddragon.leagueoflegends.com/api/versions.json`
    return new Promise( (resolve, reject) => {
        https.get(url, res => {
        
            let data = ''

            res.on('data', chunk => {
                data += chunk
            })

            res.on('end', () => {
                resolve(Object.entries(JSON.parse(data))[0][1])
            })
        })
        .on('error', err => {
            reject(err)
        })
    })
}

// get a list of champions with a brief summary
export function getChampionsData(version) {
    const url = `http://ddragon.leagueoflegends.com/cdn/${version}/data/${lang}/champion.json`
    return new Promise( (resolve, reject) => {
        http.get(url, res => {

            let data = ''

            res.on('data', chunk => {
                data += chunk
            })

            res.on('end', () => {
                resolve(JSON.parse(data).data)
            })
        })
        .on('error', err => {
            reject(err)
        })
    })
}

// get the summoner spell list
export function getSummonerSpells(version) {
    const url = `http://ddragon.leagueoflegends.com/cdn/${version}/data/${lang}/summoner.json`
    return new Promise( (resolve, reject) => {
        http.get(url, res => {

            let data = ''

            res.on('data', chunk => {
                data += chunk
            })

            res.on('end', () => {
                resolve(JSON.parse(data).data)
            })
        })
        .on('error', err => {
            reject(err)
        })
    })
}

// get summoner profile data
export function getSummoner(region, summonername) {
    const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${decodeURI(summonername)}?api_key=${process.env.RIOT_API_KEY}`
    return new Promise( (resolve, reject) => {
        https.get(url, res => {
        
            let data = ''

            res.on('data', chunk => {
                data += chunk
            })

            res.on('end', () => {
                resolve(JSON.parse(data))
            })
        })
        .on('error', err => {
            reject(err)
        })
    })
}

// get ranking of the summoner masteries
export function getMasteries(region, summonerId, champions) {
    const url = `https://${region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${process.env.RIOT_API_KEY}`
    return new Promise( (resolve, reject) => {
        https.get(url, res => {

            let data = ''

            res.on('data', chunk => {
                data += chunk
            })

            res.on('end', () => {
                var masteries = JSON.parse(data)

                for (var mastery of masteries) {
                    Object.entries(champions).forEach(champion => {
                        if(mastery.championId == champion[1].key)
                            mastery.championName = champion[1].id
                    })
                }

                resolve(masteries)
            })
        })
        .on('error', err => {
            reject(err)
        })
    })
}

// get summoner rank
export function getElo(region, summonerId) {
    const url = `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${process.env.RIOT_API_KEY}`
    return new Promise( (resolve, reject) => {
        https.get(url, res => {

            let data = ''

            res.on('data', chunk => {
                data += chunk
            })

            res.on('end', () => {
                let eloArray = JSON.parse(data)

                eloArray.forEach(element => {
                    switch(element.queueType){
                        case 'RANKED_SOLO_5x5': 
                            element.queueType = 'Solo/Duo'
                            break
                        case 'RANKED_FLEX_SR':
                            element.queueType = 'Flexível'
                            break
                    }

                    switch(element.tier){
                        case 'IRON':
                            element.tier_pt = 'Ferro'
                                break
                        case 'BRONZE':
                            element.tier_pt = 'Bronze'
                                break
                        case 'SILVER':
                            element.tier_pt = 'Prata'
                                break
                        case 'GOLD':
                            element.tier_pt = 'Ouro'
                                break
                        case 'PLATINUM':
                            element.tier_pt = 'Platina'
                                break
                        case 'DIAMOND':
                            element.tier_pt = 'Diamante'
                                break
                        case 'MASTER':
                            element.tier_pt = 'Mestre'
                                break
                        case 'GRANDMASTER':
                            element.tier_pt = 'Grão-Mestre'
                                break
                        case 'CHALLENGER':
                            element.tier_pt = 'Desafiante'
                                break
                    }
                })

                
                if(eloArray.length == 0){
                    eloArray[0] = {}
                    eloArray[0].queueType = "Flexível"
                    eloArray[0].tier = "Unranked"
                    eloArray[0].rank = "Unranked"
        
                    eloArray[1] = {}
                    eloArray[1].queueType = "Solo/Duo"
                    eloArray[1].tier = "Unranked"
                    eloArray[1].rank = "Unranked"
                } else if(eloArray.length == 1){
                    if(eloArray[0].queueType == 'Solo/Duo'){
                        eloArray.push(
                            {
                                queueType: "Flexível",
                                tier: "Unranked",
                                rank: "Unranked"
                            }
                        )
                } else if(eloArray[0].queueType == 'Flexível'){
                    eloArray.push({
                        queueType: 'Solo/Duo',
                        tier: 'Unranked',
                        rank: 'Unranked',
                        tier_pt: ''
                    })
        
                    let tmp = eloArray[0]
                    eloArray[0] = eloArray[1]
                    eloArray[1] = tmp
                }  
                } else if(eloArray[0].queueType == "Flexível"){
                    let tmp = eloArray[0]
                    eloArray[0] = eloArray[1]
                    eloArray[1] = tmp
                }

                resolve(eloArray)
            })
        })
        .on('error', err => {
            reject(err)
        })
    })
}

// get summoner match history
export function getMatchList(options) {
    const url = `https://${options.region}.api.riotgames.com/lol/match/v4/matchlists/by-account/${options.accountId}?endIndex=${options.endIndex}&beginIndex=${options.beginIndex}&api_key=${process.env.RIOT_API_KEY}`
    return new Promise( (resolve, reject) => {
        https.get(url, res => {

            let data = ''

            res.on('data', chunk => {
                data += chunk
            })

            res.on('end', () => {
                resolve(JSON.parse(data).matches)
            })
        })
        .on('error', err => {
            reject(err)
        })
    })
}

// get a match
export function getMatch(region, gameId, summonerId, champions, spells) {
    const url = `https://${region}.api.riotgames.com/lol/match/v4/matches/${gameId}?api_key=${process.env.RIOT_API_KEY}`
    return new Promise( (resolve, reject) => {
        https.get(url, res => {

            let data = ''

            res.on('data', chunk => {
                data += chunk
            })

            res.on('end', () => {
                var match = JSON.parse(data)
                match.currentPlayer = {
                    teamId: null,
                    champion: null,
                    spell1: null,
                    spell2: null,
                    items: [],
                    win: null,
                    items: null,
                    kills: null,
                    deaths: null,
                    assists: null,
                    farm: null
                }

                
                match.participants.forEach(player => {
                    match.participantIdentities.forEach(participant => {
                        if(player.participantId == participant.participantId && participant.player.summonerId == summonerId){
                            
                            Object.entries(champions).forEach( champion => {
                                if(player.championId == champion[1].key){
                                    match.currentPlayer.champion = champion[1].id
                                }
                            })

                            Object.entries(spells).forEach(spell => {
                                if(player.spell1Id == spell[1].key){
                                    player.spell1Id = spell[1].id
                                }
        
                                if(player.spell2Id == spell[1].key){                  
                                    player.spell2Id = spell[1].id
                                }
                            })

                            match.currentPlayer.championId = player.championId
                            match.currentPlayer.items = [
                                player.stats.item0,
                                player.stats.item1,
                                player.stats.item2,
                                player.stats.item3,
                                player.stats.item4,
                                player.stats.item5,
                                player.stats.item6,
                            ]
                            match.currentPlayer.spell1 = player.spell1Id
                            match.currentPlayer.spell2 = player.spell2Id
                            match.currentPlayer.win = player.stats.win
                            match.currentPlayer.kills = player.stats.kills
                            match.currentPlayer.deaths = player.stats.deaths
                            match.currentPlayer.assists = player.stats.assists
                            match.currentPlayer.farm = player.stats.totalMinionsKilled
                        }
                    })

                    player.participantId = match.participantIdentities[player.participantId - 1].player

                    Object.entries(champions).forEach( champion => {
                        if(player.championId == champion[1].key){
                            player.championId = champion[1].id
                        }
                    }) 

                    Object.entries(spells).forEach( spell => {
                        if(player.spell1Id == spell.key){
                            player.spell1Id = spell.id
                        }

                        if(player.spell2Id == spell.key){
                            player.spell2Id = spell.id
                        }
                    })
                }) 
                resolve(match)
            })
        })
        .on('error', err => {
            reject(err)
        })
    })
}

// get high-level free week
export function getFreeWeek(champions) {
    const url = `https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${process.env.RIOT_API_KEY}`
    return new Promise( (resolve, reject) => {
        https.get(url, response => {
            let data = ''
            var freeWeek = []

            response.on('data', chunk => {
                data += chunk
            })

            response.on('end', () => {
                let freeWeek_ids = JSON.parse(data)
                freeWeek_ids.freeChampionIds.forEach(fw_champion => {
                    Object.entries(champions).forEach(champion => {
                        if(champion[1].key == fw_champion){
                            freeWeek.push(champion[1].id)
                        }
                    })
                })
                resolve(freeWeek)                
            })
        }).on('error', (err) => {
            reject(err)
        })
    })
}