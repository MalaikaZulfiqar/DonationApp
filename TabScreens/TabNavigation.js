import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Donation from './Donation';
import Fundraising from './Fundraising';
import Profile from './Profile';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
       
            <Tab.Navigator initialRouteName='Home'
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: { borderTopLeftRadius:16,borderTopRightRadius:16},
                    headerShown:false
                    
                }}
            >
                <Tab.Screen name='Home' component={Home}
                    options={{
                        headerShown:false,
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <Image source={require('../images/home.png')}
                                    style={{ height: 30, width: 30 ,tintColor:focused?'#009D8B':'#7DB9B6'}}
                                />
                            </View>
                        )
                    }}
                />
                <Tab.Screen name='Donation' component={Donation} options={{
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <Image source={require('../images/heart.png')}
                                    style={{ height: 30, width: 30,tintColor:'#009D8B',tintColor:focused?'#009D8B':'#7DB9B6' }}
                                />
                            </View>
                        )
                    }}/>
                {/* <Tab.Screen name='Fundraising' component={Fundraising} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={require('../images/fundraising.png')}
                                style={{ height: 30, width: 30,tintColor:'#009D8B',tintColor:focused?'#009D8B':'#7DB9B6' }}
                            />
                        </View>
                    )
                }}/> */}
                <Tab.Screen name='Profile' component={Profile} options={{
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <Image source={require('../images/user_profile.png')}
                                    style={{ height: 30, width: 30 ,tintColor:'#009D8B',tintColor:focused?'#009D8B':'#7DB9B6'}}
                                />
                            </View>
                        )
                    }}/>
            </Tab.Navigator>
        
    )
}

export default TabNavigation

const styles = StyleSheet.create({})