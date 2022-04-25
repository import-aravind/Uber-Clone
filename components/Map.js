import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView , {Marker} from 'react-native-maps'
import {useSelector} from "react-redux"
import tw from "tailwind-react-native-classnames"
import { selectcurr_location } from '../slices/navslice'
import MapViewDirections from "react-native-maps-directions";
import {GOOGLE_MAPS_APIKEY} from "@env";

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};

const Map = () => {
    const curr_location = useSelector(selectcurr_location)
  return (
    <MapView
     style = {tw`flex-1`}
     mapType="mutedStandard"
     initialRegions={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0005,
        longitudeDelta: 0.0005,

     }}
    >

      <MapViewDirections
      origin={origin}
      destination={destination}
      apikey={GOOGLE_MAPS_APIKEY}
      strokeWidth = {3}
      strokeColor="black"
      />
        

    <Marker
    coordinate={{latitude:37.3318456,
        longitude:-122.0296002,
    }}
    title="current location"
    identifier="curr_loaction"
    
    />

    </MapView>

  )
}

export default Map

const styles = StyleSheet.create({})