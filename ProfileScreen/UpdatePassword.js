import React, { useState } from 'react';
import { View, Button, Alert,TouchableOpacity,StyleSheet,Text} from 'react-native';
import { TextInput } from 'react-native-paper';
import {firebase} from '../database/config';
const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const user = firebase.auth().currentUser;

  const updatePassword = () => {
    const credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );

    user.reauthenticateWithCredential(credential)
      .then(() => {
        if (newPassword === confirmPassword) {
          user.updatePassword(newPassword)
            .then(() => {
              Alert.alert('Success', 'Password updated successfully!');
            })
            .catch(error => {
              Alert.alert('Error', error.message);
            });
        } else {
          Alert.alert('Error', 'New password and confirm password do not match!');
        }
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Current Password"
        secureTextEntry
        onChangeText={setCurrentPassword}
        value={currentPassword}
        style={{margin:10}}
      />
      <TextInput
        placeholder="New Password"
        secureTextEntry
        onChangeText={setNewPassword}
        value={newPassword}
        style={{margin:10}}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        style={{margin:10}}
      />
        <TouchableOpacity style={styles.updateBtn} onPress={updatePassword}>
          <Text style={styles.updateText}>Update</Text>
        </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  updateBtn: {
    backgroundColor:'#009D8B',
    alignItems:'center',
    alignSelf:'center',
    borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width:'90%',
      height:45,
      margin:40,
  
  },
  updateText:{
    color:'#FFFFFF',
    paddingTop:8,
    paddingBottom:4,
    fontSize:18,
    fontWeight:'bold',
  },
  labelText:{
    margin:10,
    fontSize:18
  }
  })
export default UpdatePassword;
