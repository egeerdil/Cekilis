import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';



export default class WelcomeScreen extends React.Component {
    render() {
       
        return (
            <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>

                    < Text style={styles.white2} >SWEEPY</Text>
                    <Image style={styles.tiny0} source={{
                        uri: 'https://atompremium.com/img/blog/611571.png',
                    }} />

                    <Text style={{textAlign:'center', color: 'white', marginBottom:20}} >Sweepy ile birlikte instagramdaki tüm çekilişleri kolaylıkla görün! Çekiliş kazanma şansınızı arttırın!</Text>

                <Button

                        title="Lets Sweepy"
                        color="#841584"
                        onPress={() => this.props.navigation.navigate('Deneme')}
                />

                    {/* <Button
                    title="Login"
                        onPress={() => this.props.navigation.navigate('LoginScreen')}
                />
                */}


            </View>
            </View>
       
        )
    }
}
const styles = StyleSheet.create({
    white2: {
        fontSize: 40,
        marginBottom: 30,
        color: 'white',
        

    },
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
       
       
       

    },
    tiny0: {

        width: 100,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50,

    },
    word2: {
        marginLeft: 10,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 50,
        fontSize: 20,

    },
});