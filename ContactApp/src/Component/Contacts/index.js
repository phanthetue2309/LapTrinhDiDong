import React, {useState} from 'react';

import {Text, TouchableOpacity, View, Image} from 'react-native';
import styles from './styles';
import menu from '../image/menu.png';

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      name: 'Tue',
      phone: '0948496861',
      email: 'tue@gmail.com',
    },
    {
      name: 'Vien',
      phone: '0123123123',
      email: 'vien@gmail.com',
    },
    {
      name: 'Vu',
      phone: '0123123123',
      email: 'vu@gmail.com',
    },
    {
      name: 'Quoc',
      phone: '0123123123',
      email: 'quoc@gmail.com',
    },
    {
      name: 'Quy',
      phone: '0123123123',
      email: 'quy@gmail.com',
    },
    {
      name: 'An',
      phone: '0123123123',
      email: 'an@gmail.com',
    },
    {
      name: 'Ang',
      phone: '0123123123',
      email: 'an@gmail.com',
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
              <Text>{contact.name[0]}</Text>
            </View>
            <View style={styles.coverContainer}>
              <Text>{contact.name[0]}</Text>
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