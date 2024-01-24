import React from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import tw from "twrnc"
import { useNavigation } from '@react-navigation/native';

const Houselarge = () => {
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView horizontal={true}>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Image
            source={require('../assets/Dreamsvile_House.png')}
          />
        </TouchableOpacity>
        <Image
          source={require('../assets/Dreamsvile_House.png')}
        />
        <Image
          source={require('../assets/Dreamsvile_House.png')}
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
