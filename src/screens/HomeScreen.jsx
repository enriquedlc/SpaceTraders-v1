import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import TopPlayerList from '../components/homeScreen/TopPlayerList';
import PlanetsNearbyList from '../components/homeScreen/PlanetsNearbyList';
import LoanToPay from '../components/homeScreen/LoanToPay';

const HomeScreen = ({ profile, setProfile, serverStatus, planetsNearby, setPlanetsNearby, topPlayers, setTopPlayers, loanToPay, setLoanToPay }) => {
    const [loanStatus, setLoanStatus] = useState(false)

    useEffect(() => {
        if (loanToPay.loans[0] && loanToPay.loans[0].status !== "") {
            setLoanStatus(true)
        } else {
            setLoanStatus(false)
        }
    }, [loanToPay])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Server: {serverStatus ? 'online 🟢' : 'offline 🛑'} </Text>
                <Text style={styles.headerText}>Username: {profile.user.username}</Text>
            </View>
            <TopPlayerList
                topPlayers={topPlayers}
                setTopPlayers={setTopPlayers}
            />
            <View style={styles.planetsLoansContainer}>
                <PlanetsNearbyList
                    planetsNearby={planetsNearby}
                    setPlanetsNearby={setPlanetsNearby}
                />
                {
                    loanStatus ?
                        <LoanToPay
                            loanToPay={loanToPay}
                            setLoanToPay={setLoanToPay}
                            profile={profile}
                            setProfile={setProfile}
                        />
                        :
                        null
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    headerText: {
        marginTop: 25,
        fontSize: 17,
    },
    planetsLoansContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '98%',
    },
})

export default HomeScreen