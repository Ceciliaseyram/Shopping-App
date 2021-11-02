import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity, } from "react-native";

export default function Welcome({navigation}) {

    return <View style={{flex: 1}}>
        <ImageBackground
        style={styles.img}
        source={{uri:
            "https://media.istockphoto.com/photos/abstract-gold-award-background-picture-id1321202914?b=1&k=20&m=1321202914&s=170667a&w=0&h=BZNEZJrEBcfjG7iMo92VGSwJTK-K1KRkwLtmU-_u_uM="
        }}>

            <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{color: "white", fontSize: 40, }}>Welcome</Text>
                <Text style={{color: "white", fontSize: 40, }}>to</Text>
                <Text style={{color: "white", fontSize: 60, }}>Classic Collections</Text>
                <Text style={{color: "white", fontSize: 25, }}>Where dressup is fun!</Text>
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

