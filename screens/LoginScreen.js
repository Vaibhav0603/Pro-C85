import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Text
} from "react-native";
import  firebase from "firebase";


import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";

export default class LoginScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        fontsLoaded: false,
        userSignedIn: false
      };
    }
    async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
    }
  
    componentDidMount() {
      this._loadFontsAsync();
    }
  register = (email,password,confirmPassword,first_name,last_name)
  if(password=confirmPassword){
    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then((userCredential)=>{
        Alert.alert("User registered!!");

    })
    .catch(error=>{
        Alert.alert(error.message);
    });
    
  }
 
  
    render() {
      if (this.state.fontsLoaded) {
        SplashScreen.hideAsync();
        const { email, password } = this.state;
  
        return (
          <View >
              <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ email: text })}
            placeholder={"Enter Email"}
            placeholderTextColor={"#FFFFFF"}
            autoFocus
          />
          <TextInput
            style={[styles.textinput, { marginTop: 20 }]}
            onChangeText={text => this.setState({ password: text })}
            placeholder={"Enter Password"}
            placeholderTextColor={"#FFFFFF"}
            secureTextEntry
          />

            
          </View>
        );
      }
    }
  }