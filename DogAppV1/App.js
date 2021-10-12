/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const getMovies = async () => {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/DevTides/DogsApi/master/dogs.json?fbclid=IwAR2RHOKEgwR1RS3iiVXVNY7KDlt4kdFQ0COdPDgfxe4iIfkVk7PRCAA5Lh8',
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, [data]);

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.textstyles}>DogApp</Text>
      </View>
      {data.map((item, index) => (
        <View key={index}>
          <Image
            style={styles.dogImage}
            source={{
              uri: item.url,
            }}
          />
          <Text>{item.name}</Text>
          <Text>{item.bred_for}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  dogImage: {
    width: 180,
    height: 180,
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
    fontWeight: "bold",
  },
});

export default App;
