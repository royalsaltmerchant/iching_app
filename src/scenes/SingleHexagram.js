import React from 'react'
import { View, Text } from 'react-native'

export default function SingleHexagram({navigation, route}) {
  return (
    <View>
      <Text>{route.params.hexagram.names[0]}</Text>
    </View>
  )
}
