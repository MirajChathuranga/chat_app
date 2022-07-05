import { TextInput,Image,ImageBackground,StyleSheet,View,Text,TouchableOpacity,KeyboardAvoidingView,TouchableWithoutFeedback,ScrollView,Keyboard} from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { loginRoute } from '../utils/APIRoutes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
 
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    
    const handleSubmit = async (event) => {
        console.log("in validation", loginRoute);
        const { data } = await axios.post(loginRoute, {
            username,
            password,
        });
        if (data.status === false){
            alert(data.msg);
        }
        if (data.status === true){
            AsyncStorage.setItem("chat-app-user", JSON.stringify(data.user));
            navigation.navigate('Contacts');
        }

    }

    return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.mainArea}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
            <View style={styles.container}>
                <TextInput value={username} placeholder='Username' onChangeText={setusername} style={styles.input} />
                <TextInput value={password} placeholder='Password' onChangeText={setpassword} style={styles.input} />
                
                <View style={styles.ButtonCont}>
                    <TouchableOpacity style={styles.Touchable} onPress={(e)=>handleSubmit(e)}>
                        <Text style={styles.Text}>Log in</Text>
                    </TouchableOpacity>      
                </View>
                
                <View style={styles.ButtonCont1}>
                    <Text>Haven't an Account?</Text>
                    <TouchableOpacity  onPress={()=>navigation.navigate('Register')}>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({

    mainArea: {
        backgroundColor: "white",
        height:'100%',
    },     
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent:'center'
    },

    input: {
        margin:5,
        borderWidth: 2,
        padding: 2,
     //   borderRadius: 15,
        justifyContent: "center",
        width: 300,
        fontSize: 18,
        height: 60,
        backgroundColor:'white'
    
    },

    ButtonCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop:2

    },

})