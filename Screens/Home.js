import React, { Component, PropTypes } from "react";
import { View, search, Text,Image,ListView,StyleSheet,Dimensions, } from "react-native";
import { SearchBar } from 'react-native-elements';
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";


export default function Home () {
    return <View 
    style={{
        backgroundColor: "white", 
        flex: 1, 
        paddingTop: 55, 
        paddingHorizontal: 20,
        }}
        >
              <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                  <Ionicons name="ios-menu-outline" size={24} color="black"></Ionicons>
                  <FontAwesome name="shopping-cart" size={24} color="black" />
                  <View style={{flexDirection: "row", backgroundColor: "white", borderRadius: 10, height: 20, }}>
                      <SearchBar style= {{
                          
                          
                          
                      }}
                        placeholder="Type Here..."
                        value={search}
                     />
                  </View>
              </View>
           </View>
   
}