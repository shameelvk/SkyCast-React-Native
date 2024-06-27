import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const route=useNavigation()
    useEffect(() => {
        setTimeout(() => {
            route.replace('Home')
        }, 3000);
    
     
    }, [])
    
  return (
    <View style={{flex:1,justifyContent:"center", alignItems:"center",backgroundColor:"black"}}>
     <LottieView autoPlay
          loop  style={{width:'80%',height:250}} source={require('../assets/lotties/splasj_lottie.json')}/>
    <Text style={{fontWeight:"bold",fontSize:40,color:"white"}}>SkyCast</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})