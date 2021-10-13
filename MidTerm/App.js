import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from  "@react-navigation/stack";
import 'react-native-gesture-handler';
import Home from './src/Screen/Home';
import Calculation from './src/Screen/Calculation';
// import History from './src/Screen/History';
import{View,Text} from "react-native"

const App = () => {
  const Stack = createStackNavigator();

  return(
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headersShown: false}}>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Calculation" component={Calculation} />
    //     {/* <Stack.Screen name="History" component={History} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View><Text>123S</Text></View>
  );
};

export default App;