import { StyleSheet, Text, View, Image, TouchableOpacity,Alert } from 'react-native'
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import UpdatePassword from '../ProfileScreen/UpdatePassword';
import UpdateProfile from '../ProfileScreen/UpdateProfile';
import Faq from '../ProfileScreen/Faq';
import Login from '../StackScreen/Login';
import {firebase} from '../database/config';
function logout(navigation) {
  Alert.alert(
    'Logout',
    'Are you sure you want to log out?',
    [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'OK',
        onPress: () => {
          firebase.auth().signOut()
            .then(() => {
              navigation.replace('Login')
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }
    ],
    { cancelable: false }
  );
}
//....................................
const handleDeleteAccount = () => {
  const user = firebase.auth().currentUser;

  if (user) {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            user.delete()
              .then(() => {
                console.log('Account deleted successfully.');
              })
              .catch((error) => {
                console.log('Error deleting account:', error.message);
              });
          },
        },
      ],
      {cancelable: true},
    );
  }
};

//....................................


const Separator = () => {
  return <View style={styles.separator} />;
};
const Profile = ({ navigation }) => {
  return (
    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#87CBB9', '#87CBB9', '#009D8B']}
      style={styles.linearGradient}>
      <Image source={require('../images/salogo.png')} style={{ height: 60, width: 60, margin: 20 }} />
      <Separator />

      <View style={styles.mainView}>

        <View style={styles.cardDesign}>
          <Image source={require('../images/profile.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Profile</Text>

          <TouchableOpacity onPress={() => { navigation.navigate('UpdateProfile') }}>
            <Image source={require('../images/next.png')}
              style={styles.goToProfile}
            />
          </TouchableOpacity>

        </View>

        <View style={styles.cardDesign}>
          <Image source={require('../images/padlock.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Password</Text>
          <TouchableOpacity onPress={() => { navigation.navigate('UpdatePassword') }}>
            <Image source={require('../images/next.png')}
              style={styles.goToPassword}
            />
          </TouchableOpacity>

        </View>

        <View style={styles.cardDesign} >
          <Image source={require('../images/faq.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>FAQs</Text>

          <TouchableOpacity onPress={() => { navigation.navigate('Faq') }}>
            <Image source={require('../images/next.png')}
              style={styles.goToFaq}
            />
          </TouchableOpacity>
        </View>


        <View style={styles.cardDesign}
         
        >
          <Image source={require('../images/logout.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Logout</Text>
          <TouchableOpacity onPress={() => logout(navigation)}>
            <Image source={require('../images/next.png')}
              style={styles.goToLogout}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.cardDesign}>
          <Image source={require('../images/trash.png')} style={styles.cardImage}/>
          <Text style={styles.cardText}>Delelte Account</Text>
          <TouchableOpacity onPress={() => handleDeleteAccount()}>
            <Image source={require('../images/next.png')}
              style={styles.goToDelete}
            />
          </TouchableOpacity>
        </View>

      </View>

    </LinearGradient>
  )
}

export default Profile

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  cardDesign: {
    backgroundColor: '#009D8B',
    flexDirection: 'row',
    width: '100%',
    height: 70,
    borderRadius: 12,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    alignSelf: 'center'

  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
  mainView: {
    margin: 20,

  },
  cardText: {
    margin: 12,
    marginTop: 20,
    color: 'white',
    fontSize:16
  },
  cardImage:{
    height: 40,
    width: 40,
    tintColor: 'white',
    marginTop: 15, 
    marginBottom: 15,
    marginLeft: 7 
  },
  goToProfile: {
    height: 40,
    width: 40,
    marginLeft: '65%',
    marginTop: 13,
    tintColor: 'white'
  },
  goToPassword: {
    height: 40,
    width: 40,
    marginLeft: '59%',
    marginTop: 13,
    tintColor: 'white'
  },
  goToFaq: {
    height: 40,
    width: 40,
    marginLeft: '67%',
    marginTop: 13,
    tintColor: 'white'
  },
  goToLogout: {
    height: 40,
    width: 40,
    marginLeft: '64%',
    marginTop: 13,
    tintColor: 'white'
  },
  goToDelete: {
    height: 40,
    width: 40,
    //marginLeft: '64%',
    marginLeft:'47%',
    marginTop: 13,
    tintColor: 'white'
  }
})