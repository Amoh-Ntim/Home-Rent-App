import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc'
import Home from './components/Home';

export default function App() {
  return (
    <View style={tw`flex-1`}>
      <Home />
    </View>
  );
}

