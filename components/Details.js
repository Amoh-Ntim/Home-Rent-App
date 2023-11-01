import React from 'react'
import { Image, Text, View } from 'react-native'
import tw from "twrnc"

const Details = () => {
  return (
    <View>
    <View style={tw`flex justify-center items-center`}>
      <Image
        source={require('../assets/House.png')}
        style={tw``}
      />
    </View>
    <View>
     <Text style={tw`flex justify-start items-start font-bold text-xl mb-8`}>Description</Text>
     <Text>The 3 level house that has a modern design, has a large pool and a garage that fits up to four cars... <Text style={tw`text-blue-500`}>Show More</Text></Text>
    </View>
    </View>
  )
}

export default Details