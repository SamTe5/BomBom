import React from 'react'
import {View,Image, TextInput, SafeAreaView,StyleSheet, Button} from 'react-native';
import styles from "./loginStyle"

function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View></View>
      <View style={styles.centerContainer}>
        <View>
          <Image style={styles.logo} source={require("../../../src/images/logo.png")}/>
        </View>       
        <View style={styles.inputText}>
          <Image style={styles.kucukLogo} source={require("../../../src/images/user.png")}/>
          <TextInput style={styles.textInp} placeholder='Kullanıcı İsmi'></TextInput>
        </View>
        <View style={styles.inputText}>
          <Image style={styles.kucukLogo} source={require("../../../src/images/phone.png")}/>
          <TextInput placeholder='Telefon Numarası'></TextInput>
        </View>
        <View>
          <Button color={"#ff969a"} title='Giriş Yap'  onPress={() => Alert.alert('Simple Button pressed')}/>
        </View>        
      </View>
    </SafeAreaView>
  )
}

export default Login