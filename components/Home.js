import React from 'react'
import { SafeAreaView, Text, View,Image, TextInput, TouchableOpacity } from 'react-native'
import tw from "twrnc"


const Home = () => {
  return (
    <SafeAreaView style={tw`p-2 pt-8`}>
      <Text>Location</Text>
      <Text style={tw`font-bold text-2xl`}>Accra</Text>
      {/* serach bar */}
      <View style={tw`flex flex-row items-center bg-gray-100 p-2`}>
      <TouchableOpacity>
      <Image
        source={require('../assets/vectorsearch.png')}
        style={tw`w-5 h-5 mr-2`}
      />
      </TouchableOpacity>
      <TextInput
        style={tw`flex-grow`}
        placeholder="Search address or near you"
      />
      {/* button */}
      <TouchableOpacity>
        <Image source={require('../assets/IC_Filter.png')}/>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default Home