import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import AnimatedLottieView from "lottie-react-native";

const Lottie = () => {
  return (
   <View  style={styles.lottieDesign}>

<AnimatedLottieView source={require('./money_donation.json')} autoPlay loop 
   />
   </View>

  )
}

export default Lottie

const styles = StyleSheet.create({
    lottieDesign:{
      marginTop:150,
    }})

