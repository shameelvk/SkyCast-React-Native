import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";


import Feather from "react-native-vector-icons/Feather";
import { fetchForecast, searchLocation } from '../api/weatherapi';
import { weatherImages } from '../constants';
const HomeScreen = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [location, setLocation] = useState([])
  const [weatherData, setWeatherData] = useState({})
  useEffect(() => {
    handleLocation({ name: "london" });
  
  
  }, [])
  

const handleSearch=async (value)=>{
  if(value.length>2){
   let location= await searchLocation(value)
    setLocation(location)
  }
  else{
    setLocation([])
  }
}

const handleLocation=async(value)=>{
  
  let forecast= await fetchForecast(value.name,7)
  setShowSearch(false)
  setLocation([])
  setWeatherData(forecast)
 
 

}


  return (
    <ImageBackground source={require('../assets/images/bg.png')} className="flex-1" blurRadius={70}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ position: "relative" }}>
          <View style={[styles.inputContainer, showSearch ? { backgroundColor: "rgba(255,255,255,0.2)" } : { backgroundColor: 'transparent' }]}>
            {
              showSearch && <TextInput onChangeText={handleSearch} placeholder='Search city' placeholderTextColor={'lightgray'} style={styles.searchInput} />
            }
            <TouchableOpacity onPress={() => setShowSearch(!showSearch)} style={{ backgroundColor: "rgba(255,255,255,0.3)", height: 40, width: 40, borderRadius: 20, justifyContent: "center", alignItems: "center", margin: 5 }}>
              <Feather name='search' size={25} color="#fff" />
            </TouchableOpacity>

          </View>
          <View style={{ position: "absolute", top: 50, margin: 20, width: '100%', zIndex: 100 }}>
            {
              location.length > 0 && showSearch ? (
                location.map((value, index) => {
                  return <TouchableOpacity onPress={()=>handleLocation(value)} key={index} style={{ flexDirection: "row", margin: 4, paddingHorizontal: 10, gap: 10, backgroundColor: "black", width: '90%', height: 45, alignItems: "center", borderRadius: 10 }}>
                    <FontAwesome name="map-marker" size={20} color='white' />
                    <Text style={{ fontFamily: "" }}>{value.name},{value.country}</Text>
                  </TouchableOpacity>
                })

              ) : null

            }
          </View>
        </View>
        <View style={styles.mainContent}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 22, fontWeight: "bold", color: "white" }}>{weatherData.location?.name}, </Text>
            <Text style={{ fontSize: 22, fontWeight: "300" }}>{weatherData.location?.country}</Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={weatherImages[weatherData.current?.condition.text]} style={{ height: 300, width: 300 }} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>{weatherData.current?.temp_c}&#176;</Text>
            <Text style={{ fontSize: 30, fontWeight: "300", color: "white" }}>{weatherData.current?.condition.text}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", marginVertical: 20 }}>
            <View style={{ flexDirection: "row", gap: 5, justifyContent: "center", alignItems: "center" }}>
              <Image source={require("../assets/icons/wind.png")} style={{ width: 30, height: 30 }} />
              <Text style={{ fontFamily: "", fontSize: 20, color: 'white' }}>{weatherData.current?.wind_kph}Km</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 5, justifyContent: "center", alignItems: "center" }}>
              <Image source={require("../assets/icons/drop.png")} style={{ width: 30, height: 30 }} />
              <Text style={{ fontFamily: "", fontSize: 20, color: 'white' }}>{weatherData.current?.humidity}%</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 5, justifyContent: "center", alignItems: "center" }}>
              <Image source={require("../assets/icons/sun.png")} style={{ width: 30, height: 30 }} />
              <Text style={{ fontFamily: "", fontSize: 20, color: 'white' }}>{weatherData.forecast?.forecastday[0].astro.sunrise}</Text>
            </View>

          </View>
          <View style={styles.dialyForcastContainer}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginHorizontal: 20 }}>
              <AntDesign name="calendar" size={20} color="white" />
              <Text style={{ fontWeight: "500", color: "white" }}>Daily Forecast</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
              {
                weatherData.forecast?.forecastday.map((value,index)=>{
                  let date = new Date(value.date);
                  let options = {weekday:'long'};
                  let dayName =date.toLocaleDateString('en-US', options);

                  
                  return  <View key={index} style={{ margin: 10, justifyContent: 'center', alignItems: "center", padding: 10, gap:2, backgroundColor: "rgba(256,256,256,0.2)", height: 120, width: 100, borderRadius: 20 }}>
                  <Image source={{uri:`https://${value.day.condition.icon}`}} resizeMode='contain' style={{ width: 45, height: 45 }} />
                  <Text style={{ fontSize: 12, fontWeight: "300", color: "white" }}>{dayName}</Text>
                  <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>{value.day.avgtemp_c}&#176;</Text>
                </View>
                })
              }


             
             
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