import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete/GooglePlacesAutocomplete.js';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { setdestination,setcurr_loaction } from '../slices/navslice';
import NavigateCard from '../components/NavigateCard';
import Placesearch from 'react-native-placesearch';
import NavFavorites from '../components/NavFavorites';


const HomeScreen = () => {

    const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
       <View style = {tw`p-5`}>
           <View>
           <Image
            style={{
                width : 100,
                height : 100,
                resizeMode : "contain",
            }}
            source = {{
                uri : "https://links.papareact.com/gzs",
            }}
           />
           </View>
           
           <View style={tw`flex-1`}>
            
           <GooglePlacesAutocomplete
                placeholder = "Where From?"
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
            <NavOptions/>
            <NavFavorites/>
            </View>
            
            
        </SafeAreaView>
    );
};

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})