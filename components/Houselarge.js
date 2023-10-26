import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import tw from "twrnc"
const Houselarge = () => {
  return (
    <View>
    <ScrollView horizontal={true}>
      <Image
        source={require('../assets/Dreamsvile_House.png')}
        style={tw``}
      />
      <Image
        source={require('../assets/Dreamsvile_House.png')}
        style={tw``}
      />
      <Image
        source={require('../assets/Dreamsvile_House.png')}
        style={tw``}
      />
      <Image
        source={require('../assets/Dreamsvile_House.png')}
        style={tw``}
      />
      <Image
        source={require('../assets/Dreamsvile_House.png')}
        style={tw``}
      />
    </ScrollView>
    </View>
  )
}

export default Houselarge