import {
  StyleSheet, Text, View, Image, TextInput, SafeAreaView, Button, TouchableOpacity,
  ScrollView, Modal, Alert
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import Login from './Login';
import TabNavigation from '../TabScreens/TabNavigation';
import { firebase } from '../database/config'
export default function Signup({ navigation }) {
  const [useremail, setEmail] = useState('');
  const [username, setName] = useState('');
  const [userpassword, setPassword] = useState('');
  const [userphone, setPhone] = useState('');
  const [userID, setuserID] = useState('');
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s:])([^\s]){8,}$/;
    return regex.test(password);
  };
  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  const validateName = (name) => {
    // Name must contain only alphabets and spaces
    const regex = /^[a-zA-Z ]+$/;
    return regex.test(name);
  };




  RegisterUser = async (username, useremail, userpassword, userphone) => {
    if (!validateName(username)) {
      Alert.alert('Invalid name', 'Please enter a valid name containing only alphabets and spaces');
      return;
    }

    if (!validateEmail(useremail)) {
      Alert.alert('Invalid email', 'Please enter a valid email address');
      return;
    }

    if (!validatePassword(userpassword)) {
      Alert.alert(
        'Invalid password',
        'Please enter a valid password containing at least one uppercase letter, one lowercase letter, one number, and one special character'
      );
      return;
    }

    if (!validatePhone(userphone)) {
      Alert.alert('Invalid phone number', 'Please enter a valid 10-digit phone number');
      return;
    }


    await firebase
        .auth()
        .createUserWithEmailAndPassword(useremail, userpassword)
        .then((data) => {
          const user = data.user;
          firebase.database().ref('users/' + user.uid).set({
            name: username,
            email: useremail,
            password: userpassword,
            phone: userphone

          });
          console.log('Signed in user:', user);

          setuserID(data.user.uid);
          Alert.alert('Congratulations!', 'You are registered successfully')
          navigation.navigate('TabNavigation');
        })
        .catch(error => {
          Alert.alert(error.message)
        })

  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ marginTop: 90 }}>
          <Text style={styles.text1}>Create New Account</Text>
        </View>
        <View>
          <Text style={styles.text2}>Full Name</Text>
          <TextInput style={styles.textInput1}
            name="name"
            value={username}
            onChangeText={(username) => setName(username)}
          />
        </View>
        <View>
          <Text style={styles.text3}>Email </Text>
          <TextInput style={styles.textInput2}
            name="email"
            value={useremail}
            onChangeText={(useremail) => setEmail(useremail)}
            keyboardType="email-address"
          />
         

        </View>
        <View>
          <Text style={styles.text4}>Password </Text>
          <TextInput style={styles.textInput3}
            name="password"
            value={userpassword}
            secureTextEntry={true}
            onChangeText={(userpassword) => setPassword(userpassword)}
          />
        </View>
        <View>
          <Text style={styles.text5}>Phone Number</Text>
          <TextInput style={styles.textInput4}
            name="phone"
            value={userphone}
            keyboardType="phone-pad"
            onChangeText={(userphone) => setPhone(userphone)}

          />
        </View>


        <View>
          < TouchableOpacity style={styles.signInstyle}
            onPress={() => RegisterUser(username, useremail, userpassword, userphone)}
          >
            <Text style={styles.signInTextstyle} >Continue</Text>
          </ TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.SignupStyle}>Already have account? Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  text1: {
    position: 'absolute',
    textAlign: 'center',
    marginTop: -30,
    fontStyle: 'normal',
    fontSize: 22,
    color: '#002327',
    flex: 1,
    left: 70
  },
  text2: {
    width: 88,
    height: 21,
    left: 36,
    marginTop: 40,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 17,
    color: '#565656'
  },
  textInput1: {
    width: 320,
    height: 54,
    left: 18,
    marginTop: 20,
    borderColor: '#00BAA4',
    borderRadius: 25,
    borderWidth: 1,
    paddingLeft: 15
  },
  text3: {
    width: 88,
    height: 21,
    left: 36,
    marginTop: 10,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 17,
    color: '#565656'
  },
  textInput2: {
    width: 320,
    height: 54,
    left: 18,
    marginTop: 10,
    borderColor: '#00BAA4',
    borderRadius: 25,
    borderWidth: 1,
    paddingLeft: 15,

  },

  text4: {
    height: 21,
    left: 36,
    marginTop: 10,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 17,
    color: '#565656'
  },
  textInput3: {
    width: 320,
    height: 54,
    left: 18,
    marginTop: 10,
    borderColor: '#00BAA4',
    borderRadius: 25,
    borderWidth: 1,
    paddingLeft: 15
  },

  text5: {
    height: 21,
    left: 36,
    marginTop: 10,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 17,
    color: '#565656'
  },
  textInput4: {
    width: 320,
    height: 54,
    left: 18,
    marginTop: 10,
    borderColor: '#00BAA4',
    borderRadius: 25,
    borderWidth: 1,
    paddingLeft: 15
  },
  signInstyle:
  {
    width: 320,
    height: 54,
    left: 18,
    marginTop: 30,
    textAlign: 'center',
    backgroundColor: '#009D8B',

    borderRadius: 25,

  },
  signInTextstyle: {

    marginTop: 10,
    //left: 105,
    textAlign: 'center',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',
  },

  modal: {
    width: 310,
    height: 54,

    borderColor: '#00BAA4',
    borderRadius: 25,
    borderWidth: 1,

    backgroundColor: '#009D8B',
    marginTop: 50
  },
  ModalText: {
    alignSelf: 'center',
    color: "#ffffff",
    fontSize: 20,
    paddingTop: 10
  },
  SignupStyle: {
    color: "#009D8B",
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5

  },
});