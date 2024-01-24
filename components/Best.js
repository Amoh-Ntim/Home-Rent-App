import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import tw from "twrnc"
const Best = () => {
  return (
    <ScrollView>

    <View>
    {/* first view */}
    <View style={tw`flex flex-row`}>
    <View>
      <Image
        source={require('../assets/Image6.png')}
      />
    </View>
    {/* text beside image */}
    <View>
      <Text style={tw`font-bold text-xl`}>Orchad House</Text>
      <Text style={tw`font-bold text-blue-400`}>Rp. 2.500.000.000 / Year</Text>

      <View style={tw`flex flex-row`}>
      {/* bed view */}
      <View style={tw`flex flex-row`}>
      <Image
        source={require('../assets/IC_Bed.png')}
      />
      <Text>6 Bedroom</Text>
      </View>

      <View style={tw`flex flex-row`}>
      <Image
        source={require('../assets/IC_Bath.png')}
      />
      <Text>2 bathroom</Text>
      </View>
      </View>
    </View> 
    </View>

    {/* second view */}
    <View style={tw`flex flex-row mb-4`}>
    <View>
      <Image
        source={require('../assets/Image4.png')}
      />
    </View>
    {/* text beside image */}
    <View>
      <Text style={tw`font-bold text-xl`}>The Hollies House</Text>
      <Text style={tw`font-bold text-blue-400`}>Rp. 2.000.000.000 / Year</Text>

      <View style={tw`flex flex-row`}>
      {/* bed view */}
      <View style={tw`flex flex-row`}>
      <Image
        source={require('../assets/IC_Bed.png')}
      />
      <Text>5 Bedroom</Text>
      </View>

      <View style={tw`flex flex-row`}>
      <Image
        source={require('../assets/IC_Bath.png')}
      />
      <Text>2 bathroom</Text>
      </View>
      </View>
    </View> 
    </View>

    </View>
    </ScrollView>
  )
}

export default Best