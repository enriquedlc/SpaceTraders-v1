import * as credentials from '../../credentials.json'

import { createNavigationContainerRef } from '@react-navigation/native'

const endPoints = {
    userProfileInfo: `https://api.spacetraders.io/my/account?token=${credentials.token}`,
    serverStatus: `https://api.spacetraders.io/game/status`,
    viewAvaliableLoans: `https://api.spacetraders.io/types/loans`,
    viewShipsToPurchaseByClass: `https://api.spacetraders.io/systems/OE/ship-listings?token=${credentials.token}&class=MK-I`,
    viewPlanetsNearby: `https://api.spacetraders.io/systems/OE/locations?token=${credentials.token}&type=PLANET`,
    viewTopPlayers: `https://api.spacetraders.io/game/leaderboard/net-worth`,
    viewLoansToPay: `https://api.spacetraders.io/my/loans`,
    viewYourShips: `https://api.spacetraders.io/my/ships`,
    viewAvaliableShips: `https://api.spacetraders.io/types/ships`
}

export const navigationRef = createNavigationContainerRef()

export function navigate(screen) {
    if (navigationRef.isReady()) {
        screen && navigationRef.navigate(screen)
    }
}

export const registerUser = async (username) => {
    try {
        const response = await fetch(`https://api.spacetraders.io/users/${username}/claim`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username
            })
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        return {}
    }
}

export const getUserProfileInfo = async (token) => {
    try {
        const response = await fetch(`https://api.spacetraders.io/my/account?token=${token}`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
        return {}
    }
}

export const getServerStatus = async () => {
    try {
        const response = await fetch(endPoints.serverStatus)
        const data = await response.json()
        return data.status === 'spacetraders is currently online and available to play'
    } catch (error) {
        console.error(error)
        return {}
    }
}

export const getAvailableLoans = async (token) => {
    try {
        const response = await fetch(`https://api.spacetraders.io/types/loans?token=${token}`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        return {}
    }
}

export const getTopPlayers = async (token) => {
    try {
        const response = await fetch(endPoints.viewTopPlayers, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        return {}
    }
}

export const getShipsToPurchase = async () => {
    try {
        const response = await fetch(endPoints.viewShipsToPurchase)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        return {}
    }
}

export const getPlanetsNearby = async (token) => {
    try {
        const response = await fetch(`https://api.spacetraders.io/systems/OE/locations?token=${token}&type=PLANET`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        return {}
    }
}

export const getLoansToPay = async (token) => {
    try {
        const response = await fetch(endPoints.viewLoansToPay, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        return {}
    }
}

export const getUserShips = async (token) => {
    try {
        const response = await fetch(endPoints.viewYourShips, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export const getAvailableShipsToPurchase = async (token) => {
    try {
        const response = await fetch(endPoints.viewAvaliableShips, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const takeOutLoan = async (token, loanType) => {
    try {
        const response = await fetch(`https://api.spacetraders.io/my/loans?token=${token}&type=${loanType}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                type: loanType
            })
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
