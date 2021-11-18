import React, {Component} from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

   

export default class Home extends Component  {
  render() {
    return (
      <View>
        <View style={{
        backgroundColor: "blueviolet", 
        flex: 1, 
        paddingTop: 55, 
        paddingHorizontal: 20,
        }}

        >
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                  <Ionicons name="ios-menu-outline" size={50} color="black"></Ionicons>
                  <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Cart")}
                  >
                  <FontAwesome name="shopping-cart" size={50} color="black" />
                  </TouchableOpacity>
        </View>
      </View>
      
      </View>
    );
  }
}






 

 

