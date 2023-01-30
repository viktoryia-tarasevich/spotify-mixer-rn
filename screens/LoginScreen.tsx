import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import SpotifyLogo from "../SVG/SVG";

export default function LoginScreen({isLogin,setIsLogin}:{isLogin:boolean,setIsLogin:(arg:boolean)=>void}){
    return(
        <View style={styles.centered}>
                <Button title='Log in with Spotify' onPress={() => setIsLogin(true)}></Button>
        </View>
    );
}
const styles = StyleSheet.create({
    centered: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });