import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id:1,
        title:"Get A Cab",
        image:"https://links.papareact.com/3pn",
        screen : "MapScreen",
    },
    {
        id:2,
        title:"Order Food",
        image:"https://links.papareact.com/28w",
        screen : "EatScreen",
    },
];

const NavOptions = () => {

    const navigation = useNavigation();
  return (
     <FlatList
       data = {data}
       horizontal
       keyExtractor = {(item)=>item.id}
       renderItem={({item})=>(
           <TouchableOpacity 
               onPress={()=> navigation.navigate(item.screen)}
               style = {tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 mt-16`}>
               <Image
                 style = {{width:110,height:110,resizeMode:"contain"}}
                 source={{uri : item.image}}
               />
               <Text style = {tw`mt-1 text-lg font-semibold`}>
                   {item.title}
               </Text>
               <Icon
                style = {tw`p-2 bg-black rounded-full w-10 mt-4`}
                name="arrowright"
                type = "antdesign"
                color = "white"
               />
           </TouchableOpacity>
       )}
     
     />
  );
};

export default NavOptions;

const styles = StyleSheet.create({

})