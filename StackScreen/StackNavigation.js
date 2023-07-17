import { View, Text, StatusBar, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from '../TabScreens/TabNavigation';
import Login from './Login';
import Signup from './Signup';
import Splash from './Splash';
import Search from '../HeaderScreen/Search';
import DetailScreen from './DetailScreen';
import CategoryDetails from './CategoryDetails';
import UpdatePassword from '../ProfileScreen/UpdatePassword';
import { firebase } from '../database/config'
import DonationScreen from './DonationScreen';
import Faq from '../ProfileScreen/Faq';
import UpdateProfile from '../ProfileScreen/UpdateProfile';
import OnboardingScreen from './OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage'
const Stack = createStackNavigator();
const StackNavigation = ({ navigation }) => {
  const [showSplashScreen, setSplashScreen] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  useEffect(() => {
    setTimeout(() => { setSplashScreen(false) }, 4000);
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true')
        setIsFirstLaunch(true)
      }
      else {
        setIsFirstLaunch(false)
      }
    })

  }, []);

  if (isFirstLaunch === null) {
    return null;
  }
  else if (isFirstLaunch === true) {
    return (
      <NavigationContainer>
        <StatusBar
          backgroundColor="#009D8B"
        />
        <Stack.Navigator>

          {showSplashScreen ?
            <Stack.Screen
              name='Splash'
              component={Splash}
              options={{ headerShown: false }}
            />
            : null}

          <Stack.Screen name='OnboardingScreen' component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={Login} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Signup" component={Signup} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Search" component={Search} options={{
            headerShown: false
          }} />

          <Stack.Screen name="TabNavigation" component={TabNavigation}
            options={{ headerShown: false }} />
          <Stack.Screen name="DonationScreen" component={DonationScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen name="UpdatePassword" component={UpdatePassword}
            options={{
              headerShown: false
            }} />
          <Stack.Screen name="Faq" component={Faq}
            options={{
              headerShown: true,
              headerTitle: 'Frequently Asked Questions',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              },
              headerStyle: {
                backgroundColor: '#009D8B'
              },
              headerBackImage: () => (
                <Image
                  source={require('../images/return.png')}
                  style={{ width: 30, height: 30, tintColor: 'white' }}
                />
              )
            }} />

          <Stack.Screen name="UpdateProfile" component={UpdateProfile}
            options={{
              headerShown: true,
              headerTitle: 'Update Profile',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              },
              headerStyle: {
                backgroundColor: '#009D8B'
              },
              headerBackImage: () => (
                <Image
                  source={require('../images/return.png')}
                  style={{ width: 30, height: 30, tintColor: 'white' }}
                />
              )
            }} />

          <Stack.Screen name="DetailScreen" component={DetailScreen}
            options={{
              headerShown: true,
              headerTitle: 'Details',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              },
              headerStyle: {
                backgroundColor: '#009D8B'
              },
              headerBackImage: () => (
                <Image
                  source={require('../images/return.png')}
                  style={{ width: 30, height: 30, tintColor: 'white' }}
                />
              )
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#009D8B"
      />
      <Stack.Navigator>

        {showSplashScreen ?
          <Stack.Screen
            name='Splash'
            component={Splash}
            options={{ headerShown: false }}
          />
          : null}

        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Signup" component={Signup} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Search" component={Search} options={{
          headerShown: false
        }} />

        <Stack.Screen name="TabNavigation" component={TabNavigation}
          options={{ headerShown: false }} />
        <Stack.Screen name="DonationScreen" component={DonationScreen}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="UpdatePassword" component={UpdatePassword}
          options={{
            headerShown: true,
            headerTitle: 'Update Password',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
              color: 'white'
            },
            headerStyle: {
              backgroundColor: '#009D8B'
            },
            headerBackImage: () => (
              <Image
                source={require('../images/return.png')}
                style={{ width: 30, height: 30, tintColor: 'white' }}
              />
            )
          }} />
        <Stack.Screen name="Faq" component={Faq}
          options={{
            headerShown: true,
            headerTitle: 'Frequently Asked Questions',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
              color: 'white'
            },
            headerStyle: {
              backgroundColor: '#009D8B'
            },
            headerBackImage: () => (
              <Image
                source={require('../images/return.png')}
                style={{ width: 30, height: 30, tintColor: 'white' }}
              />
            )
          }} />

        <Stack.Screen name="UpdateProfile" component={UpdateProfile}
          options={{
            headerShown: true,
            headerTitle: 'Update Profile',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
              color: 'white'
            },
            headerStyle: {
              backgroundColor: '#009D8B'
            },
            headerBackImage: () => (
              <Image
                source={require('../images/return.png')}
                style={{ width: 30, height: 30, tintColor: 'white' }}
              />
            )
          }} />

<Stack.Screen name="DetailScreen" component={DetailScreen}
            options={{
              headerShown: true,
              headerTitle: 'Details',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              },
              headerStyle: {
                backgroundColor: '#009D8B'
              },
              headerBackImage: () => (
                <Image
                  source={require('../images/return.png')}
                  style={{ width: 30, height: 30, tintColor: 'white' }}
                />
              )
            }} />

<Stack.Screen name="CategoryDetails" component={CategoryDetails}
            options={{
              headerShown: true,
              headerTitle: 'Details',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              },
              headerStyle: {
                backgroundColor: '#009D8B'
              },
              headerBackImage: () => (
                <Image
                  source={require('../images/return.png')}
                  style={{ width: 30, height: 30, tintColor: 'white' }}
                />
              )
            }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default StackNavigation