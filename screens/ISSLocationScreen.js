import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Alert,
    Platform, 
    Image
} from 'react-native';

import axios from 'axios' 
import MapView, {Marker} from 'react-native-maps';

export default class IssLocationScreen extends Component {
    constructor(){
        super()
        this.state={
            location:{}
        }
    }

    getIssLocation = ()=>{
        axios
        .get("https://api.wheretheiss.at/v1/satellites/25544")
        .then(response =>{
            this.setState({
                location: response.data
            })
        })
        .catch(error =>{
            Alert.alert(error.message)
        })
    }

    componentDidMount(){
        this.getIssLocation()
    }


    render() {
        if(Object.keys(this.state.location).length === 0){
            return(
                <View style ={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'white', fontWeight:'bold'}}>Loading</Text>
                      <Image source={{uri:"https://www.wpfaster.org/wp-content/uploads/2013/06/loading-gif.gif"}}
                      style={{width:50,height:50}}></Image>
                </View>
            )
        }
        else{
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundImage}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>ISS Location</Text>
                    </View>
                    <View style = {styles.mapContainer}>
                        <MapView style = {styles.map}
                        region={{
                            latitude: this.state.location.latitude,
                            longitude: this.state.location.longitude,
                            latitudeDelta: 100,
                            longitudeDelta: 100
                        }}
                        >
                            <Marker 
                            coordinate = {{latitude:this.state.location.latitude, longitude: this.state.location.longitude}}
                            >
                                <Image source={require('../assets/iss_icon.png')} style={{width:50, height:50}}/>
                            </Marker>

                        </MapView>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style = {styles.infoText}>Latitude: {this.state.location.latitude}</Text>
                        <Text style = {styles.infoText}>Longitude: {this.state.location.longitude}</Text>
                        <Text style = {styles.infoText}>Altitude (Km): {this.state.location.altitude}</Text>
                        <Text style = {styles.infoText}>Velocity (Km/h): {this.state.location.velocity}</Text>

                    </View>
                </ImageBackground>
            </View>
        )
    }
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#C0BED1"
    },
    mapContainer: {
        flex:0.6
    },
    map: {
        width:'100%',
        height:'100%'

    },
    infoContainer: {
        flex: 0.2,
        backgroundColor: 'white',
        marginTop: -10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    }
})