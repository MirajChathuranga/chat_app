import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, FlatList, SafeAreaView } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { allUsersRoute } from '../utils/APIRoutes';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Contacts = ({ navigation }) => {

  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrnetUser] = useState(undefined);

  useEffect(async() => {
    if(!AsyncStorage.getItem("chat-app-user")){
      navigation.navigate('Login');
    }
    else{
      setCurrnetUser(await JSON.parse(AsyncStorage.getItem("chat-app-user")));
    }
  }, []);

  useEffect(async() => {
    if(currentUser) {
      const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
      setContacts(data.data);
    }
  }, [currentUser]);

 


  return (
    <View>
      <Text>{currentUser._id}</Text>
    </View>
  )
}

export default Contacts

const styles = StyleSheet.create({

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})