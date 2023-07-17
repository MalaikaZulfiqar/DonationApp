import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, Button, TouchableOpacity, ImageBackground, Alert, DrawerLayoutAndroidBase } from 'react-native';
import { color } from 'react-native-reanimated';
import React, { useState, useEffect } from 'react';
import Signup from './Signup';
import TabNavigation from '../TabScreens/TabNavigation';
import { firebase } from '../database/config'
export default function Login({ navigation }) {
  const [useremail, setEmail] = useState('');
  const [userpassword, setPassword] = useState('');
  LoginUser = async (useremail, userpassword) => {
    if (useremail == " " && userpassword == " ") {
      Alert.alert("Error", "Please enter your credentials!");
    }
    else {

      try {
        await firebase.auth().signInWithEmailAndPassword(useremail, userpassword)
          .then(() => {
            setEmail('')
            setPassword('')
            navigation.replace('TabNavigation');
          })
      }
      catch (error) {
        Alert.alert(error.message);
      }


    }
  }

  return (


    <SafeAreaView>
      <Image
        source={require('../images/img.png')} style={styles.imageStyle}
      />

      <View>
        <Text style={styles.emailStyle}>Email</Text>
        <TextInput style={styles.emailInput}
          name="email"
          onChangeText={(useremail) => setEmail(useremail)}
          value={useremail}
          keyboardType="email-address"
        />

      </View>

      <View>
        <Text style={styles.passwordStyle}>Password</Text>
        <TextInput style={styles.passwordInput}
          name="password"
          onChangeText={(password) => setPassword(password)}
          
          value={userpassword}
          secureTextEntry={true}

        />

      </View>

      <TouchableOpacity onPress={() => LoginUser(useremail, userpassword)}
        style={styles.LoginButtonStyle}
      >

        <Text style={styles.LoginTextStyle}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.SignupStyle}>Don't have account? Signup</Text>
      </TouchableOpacity>



    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  emailStyle: {
    marginLeft: 15,
    marginTop: 25,
    fontSize: 20
  },
  emailInput: {
    borderColor: "#E1E1E1",
    marginLeft: 15, borderWidth: 2,
    borderRadius: 15, width: 320, height: 40, paddingLeft: 12
  },

  passwordStyle: {
    marginLeft: 15, marginTop: 25, fontSize: 20

  },
  passwordInput: {
    borderColor: "#E1E1E1", marginLeft: 15, borderWidth: 2,
    borderRadius: 15, width: 320, height: 40, paddingLeft: 12

  },
  LoginButtonStyle: {
    backgroundColor: "#009D8B",
    borderRadius: 15,
    height: 40,
    width: 320,
    marginLeft: 18,
    marginTop: 40
  },
  LoginTextStyle: {
    color: "#ffffff",
    textAlign: 'center',
    fontSize: 20,
    marginTop: 3

  },

  SignupStyle: {
    color: "#009D8B",
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5

  },
  imageStyle: {
    alignSelf: 'center',
    height: 120,
    marginTop: 100

  }

});