
 import React from 'react';
 import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
 
 import {useNavigation} from '@react-navigation/native';
 
 const Home = () => {
   const navigation = useNavigation();
   return (
     <View>
       <View style={styles.header}>
         <Text style={styles.textstyles}>MidTerm - Phan The Tue</Text>
       </View>
       <View
         style={{
           flexDirection: 'row',
           flexWrap: 'wrap',
           margin: 20,
           justifyContent: 'center',
           alignItems: 'center',
         }}>
         <View style={styles.items}>
           <Text>Game</Text>
         </View>
         <View style={styles.items}>
           <Text>Puzzle</Text>
         </View>
         <View style={styles.items}>
           <Text>Study</Text>
         </View>
         <View style={styles.items}>
           <Text>Practice</Text>
         </View>
       </View>
       <TouchableOpacity
         style={styles.button}
         onPress={() => {
           navigation.navigate('Calculation');
         }}>
         <Text>Calculation</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.button}>
         <Text>Call</Text>
       </TouchableOpacity>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   TopContainer: {
     height: 50,
     width: '100%',
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 20,
   },
   header: {
     height: 60,
     flexDirection: 'row',
     backgroundColor: 'blue',
     padding: 10,
     alignItems: 'center',
     justifyContent: 'space-between',
   },
   textstyles: {
     color: 'white',
     fontSize: 30,
     fontWeight: 'bold',
   },
   button: {
     height: 50,
     width: '90%',
     borderWidth: 1,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: 10,
     marginLeft: 20,
   },
   items: {
     height: 150,
     width: 150,
     borderWidth: 1,
     margin: 10,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
   },
 });
 
 export default Home;
 