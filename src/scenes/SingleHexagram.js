import React from 'react'
import { View, Text, ScrollView } from 'react-native'

export default function SingleHexagram({navigation, route}) {
  return (
    <ScrollView style={{marginHorizontal: 30}}>
      <Text>{route.params.hexagram.names[0]} {"\n"}</Text>
      <Text style={{fontWeight: 'bold'}}>{route.params.hexagram.tagLine} {"\n"}</Text>
      <Text>{route.params.hexagram.overview}</Text>
    </ScrollView>
  )
}
