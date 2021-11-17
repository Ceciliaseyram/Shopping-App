import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';


   

const Home = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
<View >
    <View style={{
        backgroundColor: "blueviolet", 
        flex: 1, 
        paddingTop: 55, 
        paddingHorizontal: 20,
        }}
        >
        <View style={{position:"absolute", right:100}}>
            <Searchbar 
              placeholder="Search for products"
              onChangeText={onChangeSearch}
              value={searchQuery}
           />
        </View>
        
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                  <Ionicons name="ios-menu-outline" size={50} color="black"></Ionicons>
                  <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Cart")
                }}
                  >
                  <FontAwesome name="shopping-cart" size={50} color="black" />
                  </TouchableOpacity>
        </View>
       
    </View>   
         
</View>  
  );
}

export default Home;



