import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";


import Feather from "react-native-vector-icons/Feather";
const HomeScreen = () => {
  const [showSearch, setShowSearch] = useState(false)
  let Location = [1, 2, 3, 45, 5]
  return (
    <ImageBackground source={require('../assets/images/bg.png')} className="flex-1" blurRadius={70}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ position: "relative" }}>
          <View style={[styles.inputContainer, showSearch ? { backgroundColor: "rgba(255,255,255,0.2)" } : { backgroundColor: 'transparent' }]}>
            {
              showSearch && <TextInput placeholder='Search city' placeholderTextColor={'lightgray'} style={styles.searchInput} />
            }
            <TouchableOpacity onPress={() => setShowSearch(!showSearch)} style={{ backgroundColor: "rgba(255,255,255,0.3)", height: 40, width: 40, borderRadius: 20, justifyContent: "center", alignItems: "center", margin: 5 }}>
              <Feather name='search' size={25} color="#fff" />
            </TouchableOpacity>

          </View>
          <View style={{ position: "absolute", top: 50, margin: 20, width: '100%', zIndex: 100 }}>
            {
              Location.length > 0 && showSearch ? (
                Location.map((value, index) => {
                  return <TouchableOpacity key={index} style={{ flexDirection: "row", margin: 4, paddingHorizontal: 10, gap: 10, backgroundColor: "black", width: '90%', height: 45, alignItems: "center", borderRadius: 10 }}>
                    <FontAwesome name="map-marker" size={20} color='white' />
                    <Text style={{ fontFamily: "" }}>London,India</Text>
                  </TouchableOpacity>
                })

              ) : null

            }
          </View>
        </View>
        <View style={styles.mainContent}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 22, fontWeight: "bold", color: "white" }}>London, </Text>
            <Text style={{ fontSize: 22, fontWeight: "300" }}>United Kingdom</Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={require('../assets/images/cloud.png')} style={{ height: 300, width: 300 }} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>30&#176;</Text>
            <Text style={{ fontSize: 30, fontWeight: "300", color: "white" }}>Paritly Cloud</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", marginVertical: 20 }}>
            <View style={{ flexDirection: "row", gap: 5, justifyContent: "center", alignItems: "center" }}>
              <Image source={require("../assets/icons/wind.png")} style={{ width: 30, height: 30 }} />
              <Text style={{ fontFamily: "", fontSize: 20, color: 'white' }}>4Km</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 5, justifyContent: "center", alignItems: "center" }}>
              <Image source={require("../assets/icons/drop.png")} style={{ width: 30, height: 30 }} />
              <Text style={{ fontFamily: "", fontSize: 20, color: 'white' }}>55%</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 5, justifyContent: "center", alignItems: "center" }}>
              <Image source={require("../assets/icons/sun.png")} style={{ width: 30, height: 30 }} />
              <Text style={{ fontFamily: "", fontSize: 20, color: 'white' }}>05:15 AM</Text>
            </View>

          </View>
          <View style={styles.dialyForcastContainer}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginHorizontal: 20 }}>
              <AntDesign name="calendar" size={20} color="white" />
              <Text style={{ fontWeight: "500", color: "white" }}>Daily Forecast</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
              <View style={{ margin: 10, justifyContent: 'center', alignItems: "center", padding: 10, gap: 5, backgroundColor: "rgba(256,256,256,0.2)", height: 120, width: 80, borderRadius: 20 }}>
                <Image source={require('../assets/images/mist.png')} style={{ width: 45, height: 45 }} />
                <Text style={{ fontSize: 15, fontWeight: "300", color: "white" }}>Sunday</Text>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>14&#176;</Text>
              </View>
              <View style={{margin:10,justifyContent:'center',alignItems:"center",padding:10,gap:5,backgroundColor:"rgba(256,256,256,0.2)",height:120,width:80,borderRadius:20}}>
                  <Image source={require('../assets/images/mist.png')} style={{width:45,height:45}}/>
                  <Text style={{fontSize:15,fontWeight:"300",color:"white"}}>Sunday</Text>
                  <Text  style={{fontSize:15,fontWeight:"bold",color:"white"}}>14&#176;</Text>
                </View>
                <View style={{margin:10,justifyContent:'center',alignItems:"center",padding:10,gap:5,backgroundColor:"rgba(256,256,256,0.2)",height:120,width:80,borderRadius:20}}>
                  <Image source={require('../assets/images/mist.png')} style={{width:45,height:45}}/>
                  <Text style={{fontSize:15,fontWeight:"300",color:"white"}}>Sunday</Text>
                  <Text  style={{fontSize:15,fontWeight:"bold",color:"white"}}>14&#176;</Text>
                </View>
                <View style={{margin:10,justifyContent:'center',alignItems:"center",padding:10,gap:5,backgroundColor:"rgba(256,256,256,0.2)",height:120,width:80,borderRadius:20}}>
                  <Image source={require('../assets/images/mist.png')} style={{width:45,height:45}}/>
                  <Text style={{fontSize:15,fontWeight:"300",color:"white"}}>Sunday</Text>
                  <Text  style={{fontSize:15,fontWeight:"bold",color:"white"}}>14&#176;</Text>
                </View>
                <View style={{margin:10,justifyContent:'center',alignItems:"center",padding:10,gap:5,backgroundColor:"rgba(256,256,256,0.2)",height:120,width:80,borderRadius:20}}>
                  <Image source={require('../assets/images/mist.png')} style={{width:45,height:45}}/>
                  <Text style={{fontSize:15,fontWeight:"300",color:"white"}}>Sunday</Text>
                  <Text  style={{fontSize:15,fontWeight:"bold",color:"white"}}>14&#176;</Text>
                </View>
            </ScrollView>

          </View>

        </View>

      </SafeAreaView>
    </ImageBackground>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    color: "white"

  },
  inputContainer: {
    flexDirection: "row",
    position: "relative",
    margin: 20,
    justifyContent: "flex-end",
    borderRadius: 20,
    alignItems: "center",
    height: 50

  },
  mainContent: {
    flex: 1,
    gap: 10
  },
  dialyForcastContainer: {
    flex: 1, gap: 20
  }
})