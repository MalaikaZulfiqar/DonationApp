import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import {firebase} from '../database/config'
import { v4 as uuidv4 } from 'uuid';
const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    try {
      const snapshot = await firebase
        .database()
        .ref('users')
        .orderByChild('email')
        .equalTo(email)
        .once('value');
      const user = snapshot.val();

      if (!user) {
        Alert.alert('Error', 'User not found');
        return;
      }

      const token = generateUniqueToken();
      await firebase
        .database()
        .ref(`users/${user.id}/resetToken`)
        .set(token);

      const resetPasswordUrl = `https://example.com/reset-password?token=${token}`;
      sendResetPasswordEmail(email, resetPasswordUrl);

      Alert.alert('Success', 'Reset password email sent');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
    </View>
  );
};

const ResetPasswordScreen = ({ route, navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = async () => {
    try {
      const { token } = route.params;
      const snapshot = await firebase
        .database()
        .ref('users')
        .orderByChild('resetToken')
        .equalTo(token)
        .once('value');
      const user = snapshot.val();

      if (!user) {
        Alert.alert('Error', 'Invalid reset token');
        return;
      }

      if (newPassword !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match');
        return;
      }

      await firebase
        .database()
        .ref(`users/${user.id}/password`)
        .set(newPassword);

      Alert.alert('Success', 'Password reset successfully');
      navigation.popToTop();
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
    </View>
  );
};

const generateUniqueToken = () => {
    return uuidv4();
};

const sendResetPassword = async (email) => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      console.log('Password reset email sent successfully.');
    } catch (error) {
      console.error('Error sending password reset email:', error);
    }
  };

export { ForgotPasswordScreen, ResetPasswordScreen };
