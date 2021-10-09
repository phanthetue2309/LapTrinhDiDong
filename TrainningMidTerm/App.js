/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useRef, useEffect} from 'react';

import {
  Animated,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';

const Message = props => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(1000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      props.onHide();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View
      style={{
        opacity,
        transform: [
          {
            translateY: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [-20, 0],
            }),
          },
        ],
        margin: 10,
        marginBottom: 5,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 6,
      }}>
      <Text>{props.message}</Text>
    </Animated.View>
  );
};

const App = () => {
  const [valueA, setValueA] = useState();
  const [valueB, setValueB] = useState();
  const [reuslt, setResult] = useState();
  const [reusltAll, setResultAll] = useState([]);
  const [messages, setMessages] = useState([]);

  const handleResult = () => {
    if (valueA && valueB) {
      if (!isNaN(valueA) && !isNaN(valueB)) {
        if (valueB === '0') {
          const message = 'Can not divide for 0';
          setMessages([...messages, message]);
          return;
        }
        const result = valueA + ' / ' + valueB + ' = ' + valueA / valueB
        setResult(result);
        var data = [result];
        setResultAll(data.concat(reusltAll));
      } else {
        const message = 'Please input number';
        setMessages([...messages, message]);
      }
    } else {
      const message = 'Please input data';
      setMessages([...messages, message]);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.TopContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setValueA}
          value={valueA}
        />
        <Text>/</Text>
        <TextInput
          style={styles.input}
          onChangeText={setValueB}
          value={valueB}
        />
        <TouchableOpacity style={styles.BtnResult} onPress={handleResult}>
          <Text> = </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.TextResult}>{reuslt}</Text>
      <View style={{height: 60}}>
        {messages.map((message, index) => (
          <Message
            key={index}
            message={message}
            onHide={() => {
              setMessages(messages =>
                messages.filter(currentMessage => currentMessage !== message),
              );
            }}
          />
        ))}
      </View>

      <ScrollView style={styles.ViewResult}>
        {reusltAll
          ? reusltAll.map((e, index) => (
              <View style={styles.inLineResult} key={index}>
                <Text>{e}</Text>
              </View>
            ))
          : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  TopContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  input: {
    width: 100,
    height: 30,
    padding: 0,
    borderBottomWidth: 2,
    marginHorizontal: 10,
  },
  BtnResult: {
    height: 30,
    width: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 5,
  },
  TextResult: {
    marginTop: 20,
    color: '#C0C0C0',
  },
  inLineResult: {
    height: 40,
    width: '90%',
    borderBottomWidth: 1,
    justifyContent: 'flex-end',
    paddingBottom: 4,
    paddingLeft: 10,
  },
  ViewResult: {
    height: 100,
    width: '100%',
    paddingLeft: 30,
  },
});

export default App;
