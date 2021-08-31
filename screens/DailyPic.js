import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, StyleSheet, Alert, Platform, StatusBar, SafeAreaView, Linking, ScrollView } from 'react-native';

import axios from 'axios';

export default class DailyPicScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apod: []
        };
    }

    componentDidMount() {
        this.getAPOD()
    }

    getAPOD = () => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=rsi0TehGMv2TSOfwmcO09SGl53XS7frUHNq0e5ki")
            .then(response => {
                this.setState({ apod: response.data })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }
    render() {
        if (Object.keys(this.state.apod).length === 0) {
            return (
                <View style={styles.container}>
              <ImageBackground source={require('../assets/stars.gif')} style={[styles.backgroundImage,{width:"100%",height:"100%"}]}>
               <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    
                    <Text style={styles.routeText}>Loading</Text>
                    <Image source={{uri:"https://www.wpfaster.org/wp-content/uploads/2013/06/loading-gif.gif"}}
                    style={{width:50,height:50}}></Image>
                </View>
                    </ImageBackground>
              </View>
            )
        }
        else {
            return (
                <View style={styles.container}>
                <ScrollView>
                <SafeAreaView style={styles.droidSafeArea}>
                  <ImageBackground source={require('../assets/stars.gif')}
                  style={styles.backgroundImage}
                  >
                  <Text style={styles.routeText}>Pic of the Day</Text>
                  <TouchableOpacity style={styles.listContainer}
                  onPress={()=>Linking.openURL(this.state.apod.url).catch(err=>console.error("Couldn't Load Page",err))}
                  >
                  <View style={styles.iconContainer}>
                    <Image source={{uri:this.state.apod.url}}
                    style={{width:"100%",height:300,borderRadius:20,borderWidth:4}}
                    ></Image>
                  </View>
                  </TouchableOpacity>
                  <Text style={styles.titleText}>{this.state.apod.title}</Text>
                  <Text style={{color:"#56A4EA",fontSize:20, fontWeight:'bold'}}>{this.state.apod.date}</Text>
                  <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
                  
                  </ImageBackground>
                </SafeAreaView>
                </ScrollView>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width:"100%",
        height:'100%'
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#C0BED1",
        textAlign: 'center',
        alignContent:"center",
        alignSelf:'center'
    },
    titleText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "orange",
    },
    explanationText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginTop: 10,
        lineHeight:30
        // margin: 10,
        // textAlign: 'center'
    },
    listContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",

    }
});

