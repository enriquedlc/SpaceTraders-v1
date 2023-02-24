import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { takeOutLoan } from '../../services/spaceTraders'

const AvailableLoans = ({ availableLoans, userToken }) => {

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
        <Image style={styles.availableLoansTitleIcon} source={require('../../../assets/appIcons/HomeIcons/loanToPayIcons/money-bag.png')} ></Image>
        <Text style={styles.availableLoansTitletext}>Available Loans</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={availableLoans.loans}
        renderItem={(loan) => {
          return (
            <View style={styles.loanToPayDescriptionContainer}>
              <View style={styles.loanToPayItem}>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', width: '100%', height: 50, backgroundColor: 'lightgrey' }}>
                  <Text style={styles.loansToPayItemText}>Type: {loan.item.type}</Text>
                  <Text style={styles.loansToPayItemText}>Rate: {loan.item.rate} %</Text>
                  <Text style={styles.loansToPayItemText}>Amount: {loan.item.amount}</Text>
                  <Text style={styles.loansToPayItemText}>Term: {loan.item.termInDays}</Text>
                  <Pressable
                    onPress={() => takeOutLoan(userToken, loan.item.type)}
                    style={styles.takeOutLoanButton}>
                    <Text style={styles.takeOutLoanButtonText}>Take Out Loan</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  takeOutLoanButton: {
    width: 130,
    height: 50,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10,
    alignSelf: 'center',
  },
  takeOutLoanButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  loanToPayDescriptionContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 230,
    backgroundColor: 'lightgrey',
    borderRadius: 7,
  },
  loanToPayItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    backgroundColor: 'lightgrey',
  },
  loansToPayItemText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    padding: 4,
  },
  availableLoansTitleIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  availableLoansTitletext: {
    fontSize: 18,
    fontWeight: 'bold',

  },
})

export default AvailableLoans