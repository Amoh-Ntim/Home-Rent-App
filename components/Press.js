import React from 'react'
import { Pressable, Text, View,ScrollView } from 'react-native'
import tw from "twrnc"

const Press = () => {
  return (
    <View>
    <ScrollView horizontal={true}>
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? tw.color('blue-200') : 'white',
        },
        tw`rounded-lg p-4 m-2`,
      ]}
    >
      <Text style={tw`text-black`}>
        House
      </Text>
    </Pressable>


    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? tw.color('blue-200') : 'white',
        },
        tw`rounded-lg p-4 m-2`,
      ]}
    >
      <Text style={tw`text-black`}>
        Apartment
      </Text>
    </Pressable>

    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? tw.color('blue-200') : 'white',
        },
        tw`rounded-lg p-4 m-2`,
      ]}
    >
      <Text style={tw`text-black`}>
        Hotel
      </Text>
    </Pressable>

    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? tw.color('blue-200') : 'white',
        },
        tw`rounded-lg p-4 m-2`,
      ]}
    >
      <Text style={tw`text-black`}>
        Villa
      </Text>
    </Pressable>

    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? tw.color('blue-200') : 'white',
        },
        tw`rounded-lg p-4 m-2`,
      ]}
    >
      <Text style={tw`text-black`}>
        Guest House
      </Text>
    </Pressable>

    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? tw.color('blue-200') : 'white',
        },
        tw`rounded-lg p-4 m-2`,
      ]}
    >
      <Text style={tw`text-black`}>
        Mansion
      </Text>
    </Pressable>
    </ScrollView>
    </View>
  )
}
export default Press