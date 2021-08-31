import React from 'react'
import {View,Text,StyleSheet, SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image,
    TextInput,
    KeyboardAvoidingView} from 'react-native'
    import{WebView} from 'react-native-webview'
 
export default class StarMap extends React.Component{
    constructor(){
        super()
        this.state={
            latitude:'',
            longitude:"",
        }
    }
    render(){
        const {latitude,longitude} = this.state
         const path =`https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false e`
        return(
            
          <View style={{flex:1,backgroundColor:'black'}}>
              
          <SafeAreaView style={styles.droidSafeArea}/>
         
          <View style={{flex: 0.3, marginTop: 6, alignItems: 'center'}}>
          
          <Text style={styles.titleText}>STAR MAP</Text>
          
            <TextInput
            style={styles.inputStyle}
            placeholder='Enter your longitude'
            placeholderTextColor="#fff"
            onChangeText={(text)=>{
                this.setState({
                  longitude:text
                })
            }}
            />
            <TextInput
            style={styles.inputStyle}
            placeholder='Enter your latitude'
            placeholderTextColor="#fff"
            onChangeText={(text)=>{
                this.setState({
                  latitude:text
                })
            }}
            />
            
             
             </View>
             <WebView
            scalesPageToFit={true}
            source={{uri:path}}
            style={{marginTop:0,marginBottom:-10}}
            />
          </View>
         
        )
      }
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        droidSafeArea: {
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        },
        backgroundImage: {
            flex: 1,
            resizeMode: 'cover',
        },
        titleText: {
            fontSize: 25,
            fontWeight: "bold",
            color: "#C0BED1",
            justifyContent: "center",
            alignContent: "center",
        },
        inputStyle: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 20,
            marginTop: 10,
            marginRight: 20,
            marginLeft: 20,
            textAlign: 'center',
            color: 'white',
            width: 200
        }
    })