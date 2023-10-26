import React from 'react'
import { SafeAreaView, Text, View,Image, TextInput, TouchableOpacity, ScrollView, } from 'react-native'
import tw from "twrnc"
import Press from './Press'
import Houselarge from './Houselarge'
import Best from './Best'

const Home = () => {
  return (
    <View style={tw`flex-1`}>
    <SafeAreaView style={tw`p-4 pt-12`}>
    <View style={tw`flex flex-row justify-between`}>
      <View>
        <Text>Location</Text>
        <Text style={tw`font-bold text-2xl`}>Accra</Text>
      </View>
      <View>
      <TouchableOpacity>
      <Image
        source={require('../assets/IC_Notification.png')}
      />
      </TouchableOpacity>
      </View>
    </View>
      {/* search bar */}
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

    {/* horizontal scroll view */}
    <View>
      <Press />
    </View>

    <View style={tw`flex flex-row justify-between`}>
    <View>
        <Text style={tw`font-bold text-lg`}>Near from you</Text>
    </View>
    <View>
        <Text style={tw`text-gray-500`}>See more</Text>
    </View>
    </View>

     <View>
      <Houselarge />
     </View>

     <View style={tw`flex flex-row justify-between`}>
    <View>
        <Text style={tw`font-bold text-lg`}>Best for you</Text>
    </View>
    <View>
        <Text style={tw`text-gray-500`}>See more</Text>
    </View>
    </View>

    <ScrollView>
        <Best />
    </ScrollView>
    </SafeAreaView>
    </View>
  )
}

export default Home