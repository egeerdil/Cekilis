import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, FlatList, View, Image, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './HomeScreen';
import Deneme from './Deneme';
import Moda from './Moda';
import Teknoloji from './Teknoloji';
import Kozmetik from './Kozmetik';
import Profile from './Profile';


class App extends React.Component {

    

    render() {
        return <SafeAreaProvider>
            <AppContainer />
        </SafeAreaProvider>;
    }
}



const AppSwitchNavigator = createSwitchNavigator(
    {
        HomeScreen,
        Deneme,
        Moda,
        Teknoloji,
        Kozmetik,
        Profile,
               
    });



const AppContainer = createAppContainer(AppSwitchNavigator);



export default App;
