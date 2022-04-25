import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text} from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import EatScreen from './screens/EatScreen';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";


export default function App() {

  const Stack  = createStackNavigator();
  return (
    <Provider store ={store}>
      <NavigationContainer>
        <SafeAreaProvider >
          <Stack.Navigator>
            <Stack.Screen
            name = "HomeScreen"
            component = {HomeScreen}
            options = {{headerShown:false,}}
            />
            <Stack.Screen
            name = "MapScreen"
            component = {MapScreen}
            options = {{headerShown:false,}}
            />
            <Stack.Screen
            name = "EatScreen"
            component = {EatScreen}
            options = {{headerShown:false,}}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
