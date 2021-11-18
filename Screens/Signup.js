import React, { Component } from "react";
import { StyleSheet, ImageBackground, Text, View, TextInput, Button, TouchableHighlight, Image, Alert } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
        style={styles.img}
        source={{uri:
            "https://4kwallpapers.com/images/walls/thumbs_3t/6671.jpg"
        }}>
          <View style={{alignItems: 'center'}}>
                <Text style={{color: "grey", fontSize: 50,  textAlignHorizontal: "top"}}> Sign Up Page </Text>
            </View>
      <View style={{ 
        alignItems: 'center',
        }}>
        <View style={{ borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center', padding: 10, position: "absolute",  top:190,  }}>
          
          <TextInput style={{ height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1, }}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </View>

        <View style={{ borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center', position: "absolute",  top:250 }}>
          
          <TextInput style={{ height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1, }}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={{ borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center', position: "absolute", top: 310, }}>
          
          <TextInput style={{ height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1, }}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
       <View style={{ alignItems:'center', position: "absolute", top: 370, }}> 
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate("Home")}
         style={{height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30, backgroundColor: "#FF4DFF", }}>
          <Text style={{color: 'white'}}>Sign up</Text>
        </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
      flex: 1
  }

})