import { View, Text, Image, TouchableOpacity, 
    SafeAreaView, StyleSheet, Button, ImageBackground, Animated,Dimensions } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import React, { useState } from 'react';
  import Profile from '../TabScreens/Profile';
  import DonationScreen from '../StackScreen/DonationScreen';
  import * as Progress from 'react-native-progress';
  const { width, height } = Dimensions.get('window');
  import {floodData} from '../HeaderScreen/dummy'
  const FloodCard = ({ data }) => {
   const navigation = useNavigation();
   const [progress, setProgress] = useState(0);
  
    const handleButtonClick = () => {
  
      navigation.navigate('DonationScreen');
    };
    
    return (
      <View style={[styles.container, { width: width * 0.9, height: height * 0.3 }]}>
        <ImageBackground source={data.image} style={[styles.image, { width: width * 0.9, height: height * 0.3 }]}>
          <Text style={styles.title}>{data.title}</Text>
          <Progress.Bar
            progress={progress}
            width={300}
            color="#009D8B"
            unfilledColor="#E5E5E5"
            borderWidth={0}
            borderRadius={5}
            height={20}
            style={styles.progressBar}
          />
          <TouchableOpacity onPress={handleButtonClick} style={styles.button}>
            <Text style={styles.buttonText}>Donate Now</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      borderRadius: 12,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 12,
      width: 330,
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      margin: 16,
      alignSelf: 'flex-start',
      color: '#fff',
    },
    progressBar: {
      margin: 6,
      alignSelf: 'flex-start',
    },
    button: {
      backgroundColor: '#009D8B',
      margin: 20,
      //width: '80%',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      padding:10
    },
    buttonText: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 20,
    },
  });
  
  export default FloodCard;
  