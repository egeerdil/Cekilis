import React from 'react';
import { FlatList, Linking, TouchableOpacity, ActivityIndicator, ScrollView, StyleSheet, ImageBackground, Text, TextInput, View, Button, Image } from 'react-native';
import axios from './axios';
import { Header } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';


export default class PersonList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            count: 0,
            isLoading: true,
        }
    }




    componentDidMount() {
        axios.get(`https://rocky-gorge-97831.herokuapp.com/cekilis/moda`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            }).then(res => {
                this.setState({ isLoading: false });
            })
    }

    incrementMe = () => {
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
    }

    list = () => {
        return this.state.persons.map((element) => {
            return (

                <View key={element._id} style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <ImageBackground source={{
                        uri: (element.imgUrl),
                    }} style={{
                        width: 300, height: 300, margin: 0, shadowColor: 'pink',
                        shadowOffset: {
                            width: 5,
                            height: 9,
                        },
                        shadowOpacity: 0.48,
                        shadowRadius: 11.95,

                        elevation: 18,
                        borderWidth: 0.5,
                        borderBottomWidth: 0,
                        borderColor: 'pink'
                    }} >
                        {/* <Button onPress={() => this.incrementMe()} /> */}
                    </ImageBackground>
                    <View style={styles.container}>
                        <FontAwesome5 name="link" size={24} color="black" style={{ marginRight: 10 }} />
                        <Text style={{ color: 'blue' }}
                            onPress={() => Linking.openURL(element.name)}>
                            Instagram.com/cekilis{Math.floor(Math.random() * 1000) + 1}
                        </Text>
                    </View>
                    <View style={styles.container2}>

                        <Text style={{ color: 'black', fontSize: 12 }}>

                            Aciklama:  {element.expla}
                        </Text>
                    </View></View>

            );
        });
    };

    render() {
        return (

            <View style={{ flex: 1, backgroundColor: '#F1F1F1' }}>


                <Header
                    leftComponent={{
                        icon: 'menu',
                        color: '#fff',
                        onPress: () => alert('Guncelleme yapiliyor,yakin zamanda kullanima acilacak'),
                    }}
                    centerComponent={{ text: 'Instagram Cekilisleri', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff', onPress: () => this.props.navigation.navigate('Deneme') }}
                    backgroundColor="pink"
                />
                <View style={{ backgroundColor: '#F1F1F1', marginTop: 0, backgroundColor: '#F1F1F1', justifyContent: 'center', alignItems: 'center' }}>
                    <ScrollView horizontal={true} >

                        <View style={{ marginRight: 10 }}>
                            <Button
                                onPress={() => this.props.navigation.navigate('Teknoloji')}
                                title="Teknoloji"
                                color="pink"
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </View>

                        <View style={{ marginRight: 10 }}>
                            <Button
                                onPress={() => this.props.navigation.navigate('Moda')}
                                title="Moda"
                                color="pink"
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </View>

                        <View style={{ marginRight: 10 }}>
                            <Button
                                onPress={() => this.props.navigation.navigate('Kozmetik')}
                                title="Kozmetik"
                                color="pink"
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </View>
                        



                    </ScrollView>
                </View>

                {this.state.isLoading && <ActivityIndicator color={"#fff"} />}

                <SafeAreaView style={{ flex: 1,  backgroundColor: '#F1F1F1' }}>
                    <ScrollView>
                        <View>
                            {this.list()}
                        </View>
                        <View style={{ backgroundColor: 'pink', textAlign: 'center', justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ paddingTop: 15, color: 'white', height: 50, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}> Çekilişlerin sonuna ulaştınız! </Text>

                        </View>
                    </ScrollView>
                </SafeAreaView>
              
            </View>

        )
    }
}

const styles = StyleSheet.create({
    textInputt: {
        height: 40,
        width: "90%",
        borderColor: "gray",
        borderWidth: 1,
        marginTop: 8
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    containeeeer: {
        flex: 1,
        flexDirection: 'row',

        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 500,
        width: 400,
    },
    containerrr: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },


    box: {
        flex: 1,
        backgroundColor: 'blue',
    },
    tiny5: {
        height: 50,
        width: 50,
        borderRadius: 30
    },
    white2: {
        fontSize: 24,

    },
    white3: {
        fontSize: 20,

    },
    container: {
        justifyContent: 'center', alignItems: 'center',
        flex: 1,
        shadowColor: 'pink',
        flexDirection: 'row',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 2,

        width: 300,
        backgroundColor: 'white',
        borderColor: 'pink',
        borderWidth: 0.5,
        borderBottomWidth: 0,
    },

    container2: {
        justifyContent: 'center', alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        shadowColor: 'pink',

        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 11,
        marginBottom: 30,
        width: 300,
        backgroundColor: 'white',
        borderColor: 'pink',
        borderWidth: 0.5,
        borderTopWidth: 0,
    },

    word: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 20,

    },
    as: {

        fontSize: 50,


    },
    containerr: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },


    word3: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 15,

    },
    word2: {
        marginLeft: 10,
        marginRight: 20,
        marginTop: 5,
        fontSize: 10,

    },
    white2: {
        fontSize: 20,

    },
});
