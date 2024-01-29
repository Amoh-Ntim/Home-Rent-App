import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import tw from "twrnc"

const Details = () => {
  return (
    <View style={tw`flex-1`}>
    <SafeAreaView style={tw`p-4 pt-12`}>
    <ScrollView>
    <View style={tw`flex justify-center items-center`}>
      <Image
        source={require('../assets/House.png')}
      />
    </View>
    <View>
     <Text style={tw`flex justify-start items-start font-bold text-xl mb-8`}>Description</Text>
     <Text>The 3 level house that has a modern design, has a large pool and a garage that fits up to four cars... <Text style={tw`text-blue-500`}>Show More</Text></Text>
    </View>

      <View style={tw`flex flex-row mt-8 justify-between`}>
      <View style={tw`flex flex-row gap-x-4`}>
        <View>
        <Image
            source={require('../assets/Image_avatar.png')}
            style={tw``}
          />
        </View>
        <View style={tw``}>
          <Text style={tw`font-bold text-xl`}>Garry Allen</Text>
          <Text>Owner</Text>
        </View>
      </View>
        <View style={tw`flex flex-row items-center justify-between gap-x-4`}>
          <Image source={require('../assets/IC_Phone.png')}/>
          <Image source={require('../assets/IC_Message.png')}/>
        </View>
      </View>

      <View style={tw`mt-8`}>
        <Text style={tw`font-bold text-xl`}>Gallery</Text>
        <View style={tw`flex flex-row justify-around items-center`}>
        <Image
            source={require('../assets/Image30.png')}
          />
          <Image
            source={require('../assets/Image36.png')}
          />
          <Image
            source={require('../assets/Image32.png')}
          />
          <Image
            source={require('../assets/Overlay.png')}
          />
        </View>
      </View>
      
      {/* map */}
      <View style={tw`relative`}>
  <Image
    source={require('../assets/Map.png')}
    style={tw`mt-8`}
  />
  <View style={tw`flex flex-row gap-x-4 absolute bottom-0 left-0 p-4`}>
    <View>
      <Text style={tw`text-gray-400`}>Price</Text>
      <Text style={tw`font-bold`}>Rp. 2.500.000.000 / Year</Text>
    </View>
    <View>
    <TouchableOpacity>
      <Image
        source={require('../assets/Btn_rent.png')}
      />
    </TouchableOpacity>
    </View>
  </View>
</View>
    </ScrollView>
    </SafeAreaView>
    </View>
  )
}

export default Details