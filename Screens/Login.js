import React from "react";
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Login() {
    
    return <View style={{flex: 1}} >
        <ImageBackground
        style={styles.img}
        source={{uri:
            "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }}>

            <View style={{alignItems: 'center'}}>
                <Text style={{color: "grey", fontSize: 50,  textAlignHorizontal: "top"}}> Login Page</Text>
            </View>

                <View style={{alignItems: "center", padding: 10, position: "absolute",  top:190, right:235 }}>
                   <TextInput
                      style={{height: 40, backgroundColor:"azure", fontSize: 25, fontStyle:"italic" }}
                      placeholder= "Username" 
                   />
                </View>
           
            
        </ImageBackground>
    </View>
}


const styles = StyleSheet.create({
    img: {
        flex: 1
    }

})