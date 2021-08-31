import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,SafeAreaView,Platform,StatusBar, TouchableOpacityBase,
ImageBackground,Image} from 'react-native'
 
export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                <View style={styles.titleBar}>
            
                <Text style={styles.titleText}>Stellar</Text>
                </View>
              
               <TouchableOpacity style={styles.routeCard} onPress={()=> this.props.navigation.navigate('Crafts')}>
                   <Text style={styles.routeText}>Space Crafts</Text>
                   <Text style={styles.knowMore}>{"Know more --->"}</Text>
                   <Text style={styles.bgDigit}>1</Text>
<Image source={require('../assets/space_crafts.png')} style={styles.iconImage}/>
               </TouchableOpacity>

               <TouchableOpacity style={styles.routeCard} onPress={()=> this.props.navigation.navigate('Map')}>
                   <Text style={styles.routeText}>Star Map</Text>
                   <Text style={styles.knowMore}>{"Know more --->"}</Text>
                   <Text style={styles.bgDigit}>2</Text>
                   <Image source={require('../assets/star_map.png')} style={styles.MapiconImage}/>
               </TouchableOpacity>
               
               <TouchableOpacity style={styles.routeCard} onPress={()=> this.props.navigation.navigate('Picture')}>
                   <Text style={styles.routeText}>Daily Picture</Text>
                   <Text style={styles.knowMore}>{"Know more --->"}</Text>
                   <Text style={styles.bgDigit}>3</Text>
                   <Image source={require('../assets/camera.png')} style={styles.MapiconImage}/>
               </TouchableOpacity>

               <TouchableOpacity style={styles.routeCard} onPress={()=> this.props.navigation.navigate('ISSLocation')}>
                   <Text style={styles.routeText}> ISS LOCATION</Text>
                   <Text style={styles.knowMore}>{"Know more --->"}</Text>
                   <Text style={styles.bgDigit}>4</Text>
<Image source={require('../assets/iss_icon.png')} style={styles.iconImage}/>
               </TouchableOpacity>

               <TouchableOpacity style={styles.routeCard} onPress={()=> this.props.navigation.navigate('Meteor')}>
                   <Text style={styles.routeText}>METEORS</Text>
                   <Text style={styles.knowMore}>{"Know more --->"}</Text>
                   <Text style={styles.bgDigit}>5</Text>
                   <Image source={require('../assets/meteor.png')} style={styles.MeteoriconImage}/>
               </TouchableOpacity>

               </ImageBackground>
            </View>
        )
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
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        marginBottom:10,
        borderRadius: 30,
        height:20,
        backgroundColor: '#C0BED1',
       borderWidth:4
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 80,
        fontWeight: "bold",
        color: '#C0BED1',
        textAlign:'center',
       
        
    
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#201962",
        marginTop: 45,
        paddingLeft: 30
    },
    knowMore: {
        paddingLeft: 30,
        color: '#F27435',
        fontSize: 15,
        fontWeight:'bold'
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(255,255,255, 0.6)",
        fontSize: 90,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        height: 95,
        width: 150,
        resizeMode: "contain",
        right: 15,
        top: -45
    },
    MapiconImage: {
        position: "absolute",
        height: 85,
        width: 150,
        resizeMode: "contain",
        right: 10,
        top: -45
    },
    mainicon:{
        position: "absolute",
        height: 95,
        width: 150,
        resizeMode: "contain",
        right: 460,
        top: -10
    },
    MeteoriconImage: {
        position: "absolute",
        height: 115,
        width: 150,
        resizeMode: "contain",
        right: 10,
        top: -50
    }

});
