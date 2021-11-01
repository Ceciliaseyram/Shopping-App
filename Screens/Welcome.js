import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity, } from "react-native";

export default function Welcome({navigation}) {

    return <View style={{flex: 1}}>
        <ImageBackground
        style={styles.img}
        source={{uri:
            "https://images.unsplash.com/photo-1617791160588-241658c0f566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMzkyNTZ8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        }}>

            <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{color: "white", fontSize: 40, }}>Welcome</Text>
                <Text style={{color: "white", fontSize: 40, }}>to</Text>
                <Text style={{color: "white", fontSize: 60, }}>Classic Collections</Text>
            </View>
            <View>
            <TouchableOpacity 

        onPress={() => {
            navigation.navigate("Login")
        }}
        
        >
            
            <Text style={{fontSize: 17, color: "white", textAlign: "center", top: 10 }}>Tap to Continue</Text>

        </TouchableOpacity>
            </View>

        </ImageBackground>
        </View>;
}




const styles = StyleSheet.create({
    img: {
        flex: 1
    }

})

