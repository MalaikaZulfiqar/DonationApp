import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DonationScreen from './DonationScreen';
import AsyncStorage  from '@react-native-async-storage/async-storage';
const DetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { image, title, story, total_amount, raised_amount } = route.params;
  const daysLeft = 7; // Number of days left
  const totalDetonators = 100; // Total number of detonators
  const [donatedAmount, setDonatedAmount] = useState(0);

  useEffect(() => {
    const getDonatedAmount = async () => {
      try {
        const storedDonatedAmount = await AsyncStorage.getItem('donatedAmount');
        if (storedDonatedAmount !== null) {
          const parsedDonatedAmount = parseFloat(storedDonatedAmount);
          setDonatedAmount(parsedDonatedAmount);
        }
      } catch (error) {
        console.log('Error retrieving donated amount:', error);
      }
    };

    getDonatedAmount();
  }, []);

  const updateDonatedAmount = async (amount) => {
    try {
      const newDonatedAmount = donatedAmount + amount;
      await AsyncStorage.setItem('donatedAmount', newDonatedAmount.toString());
      setDonatedAmount(newDonatedAmount);
    } catch (error) {
      console.log('Error storing donated amount:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{story}</Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Days Left:</Text>
          <Text style={styles.infoValue}>{daysLeft}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Total Donators:</Text>
          <Text style={styles.infoValue}>{totalDetonators}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Total Amount:</Text>
          <Text style={styles.infoValue}>{total_amount}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Raised Amount:</Text>
          <Text style={styles.infoValue}>{raised_amount + donatedAmount}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {
        const donationAmount = 0.1; // Replace with the actual donation amount
        updateDonatedAmount(donationAmount);
        navigation.navigate('DonationScreen');
      }}>
        <Text style={styles.buttonText}>
          Donate Now
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#f1f1f1',
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    padding:9
  },
  infoContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 16,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#009D8B',
    margin: 20,
    //width: '80%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    padding: 10
  },
});

export default DetailScreen;