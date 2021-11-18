import React from "react";
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";


export default function Login({navigation}) {
    
    return <View style={{flex: 1}} >
        <ImageBackground
        style={styles.img}
        source={{uri:
            "https://4kwallpapers.com/images/walls/thumbs_2t/6652.jpg"
        }}>

            <View style={{alignItems: 'center'}}>
                <Text style={{color: "grey", fontSize: 50,  textAlignHorizontal: "top"}}> Login Page</Text>
            </View>

                <View style={{alignItems: "center", padding: 10, position: "absolute",  top:190, left: 628}}>
                   <TextInput
                      style={{height: 40, backgroundColor:"azure", fontSize: 25, fontStyle:"italic", padding: 10, borderRadius: 10 }}
                      placeholder= "username/email" 
                   />
                </View>
                <View style={{ alignItems: "center", padding: 10, position: "absolute",  top:250, left: 628}}>
                   
                   <TextInput
                      style={{height: 40, backgroundColor:"azure", fontSize: 25, fontStyle:"italic",  padding: 10, borderRadius: 10 }}
                      placeholder= "password" 
                      secureTextEntry="true"
                   />
                </View>
                <TouchableOpacity 
                 onPress={() => {
                    navigation.navigate("Home")
                }}
                style={{
                    
                    backgroundColor: "grey",
                    padding: 15,
                    borderRadius: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    position: "absolute",
                    top: 350,
                    left: 712,
                }}>
                    <Text style={{fontSize: 30, color: "white"}}>Login</Text>
                </TouchableOpacity>
                <View>
                <TouchableOpacity 
                onPress={() => {
                    navigation.navigate("Home")
                }}
                style={{
            backgroundColor: "black", 
            padding: 10, 
            paddingHorizontal: 60,
            borderRadius: 10, 
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            marginTop: 20,
            top:400,
            left: 628,
            }}
        >
              <AntDesign name="google" size={24} color="rgb(256,100,10)" />
            <Text style={{ color: "white", fontSize: 17, marginLeft: 15}}>Login with Gmail</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => {
            navigation.navigate("Home")
        }}
        style={{
            backgroundColor: "black", 
            padding: 10, 
            paddingHorizontal: 60,
            borderRadius: 10, 
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            marginTop: 20,
            top:450,
            left: 628,
        }}
       
        >
            <AntDesign name="apple1" size={24} color="white" />
            <Text style={{fontSize: 17, color: "white", marginLeft: 15,}}>Login with Apple</Text>

        </TouchableOpacity>



                </View>
                
           <TouchableOpacity
           onPress={() => {
            navigation.navigate("Signup")
        }}
           style={{
            position: "absolute",
            top:600,
            left: 700,
           }}
           >

        <Text style={{marginTop: 10, fontWeight: 500, color: "white"}}>Not a member? 
        <Text style={{color: "skyblue", fontWeight: "bold", }}>Signup</Text>
        </Text>
        </TouchableOpacity>
            
        </ImageBackground>
    </View>
}


const styles = StyleSheet.create({
    img: {
        flex: 1
    }

})