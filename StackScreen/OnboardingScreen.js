import { StyleSheet, Text, View ,Button} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import Login from './Login';

const Skip=({...props})=>{
    return(
       
        <Button
          title='Skip'
          backgroundColor="white"
          {...props}
        />
      
    )
}
const OnboardingScreen = ({navigation}) => {
  return (
   
    <Onboarding
    onSkip={()=>navigation.replace('Login')}
    onDone={()=>navigation.replace('Login')}
    SkipButtonComponent={Skip}
    pages={[
      {
        backgroundColor: '#fff',
        //image: <Image source={require('./images/circle.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#fff',
        //image: <Image source={require('./images/circle.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
    ]}
  />
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({})