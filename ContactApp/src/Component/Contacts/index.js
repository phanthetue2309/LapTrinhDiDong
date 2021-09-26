import React, {useState} from 'react';

import {Text, TouchableOpacity, View, Image} from 'react-native';
import styles from './styles';
import menu from '../Images/menu.png';

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      name: 'vien',
    },
    {
      name: 'Vu',
    },
    {
      name: 'Quoc',
    },
    {
      name: 'Quy',
    },
    {
      name: 'An',
    },
    {
      name: 'Ang',
    },
  ]);
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.viewContainer}>
          <Image source={menu} />
        </Text>
        <Text style={styles.viewContainer}>Contact</Text>
        <TouchableOpacity style={styles.viewContainer}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>

      {contacts.map((contact, index) => {
        return (
          <View style={styles.itemContainer} key={index}>
            <View style={styles.keyContainer}>
              <Text>Key</Text>
            </View>
            <View style={styles.coverContainer}>
              <Text>V</Text>
            </View>
            <View>
              <Text>{contact.name}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Contacts;