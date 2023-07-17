import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
import { firebase } from '../database/config';
import { TextInput, DefaultTheme, ThemeProvider } from 'react-native-paper';
import axios from 'axios';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isEnabled, setIsEnabled] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [balance, setBalance] = useState(null);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  const validateName = (name) => {
    const regex = /^[a-zA-Z ]+$/;
    return regex.test(name);
  };

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'blue',
      background: '#f8f8f8',
      underlineColor: isFocused ? 'green' : 'gray',
    },
  };

  useEffect(() => {
    const userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`users/${userId}`)
      .once('value')
      .then((snapshot) => {
        const userData = snapshot.val();
        setName(userData.name);
        setEmail(userData.email);
        setPhone(userData.phone);
      })
      .catch((error) => {
        console.error(error);
      });

    const fetchData = async () => {
      console.log("Fetching data...");
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://94ea-111-119-190-17.in.ngrok.io/web3/get-balance/0x13eFB36E0667EdAAD63d534B3B7c60105cf69C5F',
        headers: {}
      };

      axios.request(config)
        .then((response) => {
         // console.log(JSON.stringify(response.data));
          setBalance(response.data["balance"])
        })
        .catch((error) => {
          console.log(error);
        });
      // try {
      //   fetch('http://172.20.224.1:9910/web3/get-balance/0x13eFB36E0667EdAAD63d534B3B7c60105cf69C5F',{method: 'GET'})
      //   .then((response)=>{
      //   console.log(JSON.stringify(response))
      //   })
      //   .catch((error)=>{
      //     console.log(error)
      //   })
      // } catch (error) {
      //   console.log(error);
      // }
    };

    fetchData();
  }, []);

  const handleUpdateProfile = () => {
    if (!validateName(name)) {
      Alert.alert('Invalid name', 'Please enter a valid name containing only alphabets and spaces');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Invalid email', 'Please enter a valid email address');
      return;
    }

    if (!validatePhone(phone)) {
      Alert.alert('Invalid phone number', 'Please enter a valid 10-digit phone number');
      return;
    }

    const userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`users/${userId}`)
      .update({
        name,
        email,
        phone,
      })
      .then(() => {
        console.log('Profile updated successfully!');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ThemeProvider>
      <View>
        {/* {balance !== null ? (
          <Text style={styles.balanceText}>
            Account Balance: {balance !== "0" ? balance : "No balance available"}
          </Text>
        ) : (
          <Text style={styles.loadingText}>Loading...</Text>
        )} */}
        <Text style={styles.labelText}>Email</Text>
        <TextInput placeholder="Name" value={name} onChangeText={setName} theme={theme} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />

        <Text style={styles.labelText}>Name</Text>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />

        <Text style={styles.labelText}>Phone Number</Text>
        <TextInput placeholder="Phone Number" value={phone} onChangeText={setPhone} />

        <TouchableOpacity style={styles.updateBtn} onPress={handleUpdateProfile}>
          <Text style={styles.updateText}>Update</Text>
        </TouchableOpacity>
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  updateBtn: {
    backgroundColor: '#009D8B',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    height: 45,
    margin: 50,
    
    
  },
  updateText: {
    color: '#FFFFFF',
    paddingTop: 8,
    paddingBottom: 4,
    fontSize: 18,
   fontWeight: 'bold',
  },
  labelText: {
    margin: 10,
    fontSize: 18,
  },
  balanceText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 16,
  },
});

export default UpdateProfile;
