import React from 'react'
import { StyleSheet,  View, Text, TouchableOpacity } from 'react-native'
import { Provider, connect } from 'react-redux';
import * as types from "../store/actions/types";

function Home({  appReducer, dispatch, navigation }) {
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={()=> dispatch({ type: types.LOGIN, data: {name: 'Subiyel'} }) }>
       <Text style={styles.text}>Home Screen {appReducer}</Text>
    </TouchableOpacity>  
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  }
})


const HomeContainer = connect(state => ({ appReducer: state.username }))(Home);
export default HomeContainer