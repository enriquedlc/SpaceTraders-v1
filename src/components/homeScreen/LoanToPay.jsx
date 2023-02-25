import { Image, View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const LoanToPay = ({ loanToPay, profile }) => {
    return (
        <View style={styles.viewLoansToPayContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
                <Image source={require('../../../assets/appIcons/HomeIcons/loanToPayIcons/money-bag.png')} style={styles.loanToPayIcon} ></Image>
                <Text style={styles.loansToPayText}>Loan To Pay</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={loanToPay.loans}
                renderItem={(loan) => {
                    return (
                        <View style={styles.loanToPayDescriptionContainer}>
                            <View style={styles.loanToPayItem}>
                                <Text style={styles.loansToPayIntemText}>Your credits: {profile.user.credits}</Text>
                            </View>
                            <View style={styles.loanToPayItem}>
                                <Image source={require('../../../assets/appIcons/HomeIcons/loanToPayIcons/currency.png')} style={styles.individualIconLoanCharacteristic} ></Image>
                                <Text style={styles.loansToPayIntemText}>Amount: {loan.item.repaymentAmount}</Text>
                            </View>
                            <View style={styles.loanToPayItem}>
                                <Image source={require('../../../assets/appIcons/HomeIcons/loanToPayIcons/status.png')} style={styles.individualIconLoanCharacteristic} ></Image>
                                <Text style={styles.loansToPayIntemText}>Status: {loan.item.status}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewLoansToPayContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '46%',
        height: 240,
        backgroundColor: 'lightgrey',
        marginTop: 25,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5
    },
    loanToPayDescriptionContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 155,
        backgroundColor: 'lightgrey',
    },
    loanToPayIcon: {
        marginTop: 10,
        width: 40,
        height: 40,
    },
    loanToPayItem: {
        flexDirection: 'row',
        width: 165,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        backgroundColor: 'lightgrey',
        width: '96%',
    },
    individualIconLoanCharacteristic: {
        width: 30,
        height: 30,
        marginRight: 7
    },
    loansToPayText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 9,
        marginTop: 9
    },
    loansToPayIntemText: {
        fontSize: 14,
    }
})

export default LoanToPay