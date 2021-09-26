import React, {useState} from 'react';
import {TextInput, Text, View, TouchableOpacity} from 'react-native';
const MainView = props => {
  const [text, setText] = useState(props.value.text);
  return (
    <View>
    </View>
  );
};

export default MainView;