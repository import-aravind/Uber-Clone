import { FlatList,StyleSheet, Text, View,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setdestination } from '../slices/navslice';
import NavFavorites from './NavFavorites';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
    const dispatch  = useDispatch();
    const navigation = useNavigation();
  return (
    
    <SafeAreaView style={tw`bg-white flex-1`}>
        <Text style={tw`text-center py-3 text-xl`}>Hello</Text>
        <View style={tw`border-t border-gray-200 flex-shrink`}>
            <View>
            <GooglePlacesAutocomplete
                placeholder = "Search area"
                minLength={2}
                autoFocus = {false}
                fetchDetails = {true}
                returnKeyType = {'search'}
                keyboardAppearence = {'light'}
                listViewDisplayed = 'auto'
                getDefaultValue ={()=> ''}
                textInputHide ={false}
                renderDescription ={row=>row.description}
                enablePoweredByContainer = {false}
                onPress={(data,details=null)=>{
                    console.log(data)
                     console.log(details)
                     dispatch(setcurr_loaction({
                         location:details.geometry.location,
                         description:data.description,
                     }))
                    dispatch(setdestination(null))
                }}
                textInputProps = {{
                    onFocus: () => focusInput(),
                  onBlur: () => blurInput(),
                }}
                keyboardShouldPersistTaps="handled"
                style = {{
                container:{
                    flex:0,
                },
                textInput:{
                   fontSize:18
                },
                }}
                query = {{
                    key:GOOGLE_MAPS_APIKEY,
                    language:"en"
                }}

                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
            />
            </View>
         
                
        </View>
        <View>
        
        </View>
        <View style={tw`pt-7`}><NavFavorites/></View>
        <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
            <TouchableOpacity style ={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
                <Icon name="car" type="font-awesome" color="white" size={16}/>
                <Text style={tw`text-white text-center`}>Rides</Text>
            </TouchableOpacity>
            <TouchableOpacity style ={tw`flex flex-row justify-between bg-white w-24 px-4 py-3 rounded-full`}>
                <Icon name="fast-food-outline" type="ionicon" color="black" size={16}/>
                <Text style={tw`text-center`}>Eats</Text>
            </TouchableOpacity>
 
        </View>
        
    </SafeAreaView>
  )
}

export default NavigateCard

const InputBox = StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingTop:20,
        flex:0,
    },
    textInput:{
        backgroundColor:"#DDDDDF",
        borderRadius:0,
        fontSize:10,
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0,
    },
});