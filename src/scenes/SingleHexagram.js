import React from 'react'
import { View, Text, ScrollView } from 'react-native'

export default function SingleHexagram({navigation, route}) {

  function renderLines() {
    const lines = Object.values(route.params.hexagram.linesOverview).map((line, index) => (
      <View>
        <Text>Line {index + 1} <Text style={{fontWeight: 'bold'}}>{line.type}</Text>: {"\n"}</Text>
        <Text style={{fontWeight: 'bold'}}>{line.title} {"\n"}</Text>
        <Text>{line.overview} {"\n"}</Text>
      </View>
    ))
    return lines
  }

  return (
    <ScrollView style={{marginHorizontal: 30}}>
      <Text style={{fontSize: 20, textAlign: 'center'}}>{route.params.hexagram.names[0]} {"\n"}</Text>
      <Text style={{fontWeight: 'bold'}}>{route.params.hexagram.tagLine} {"\n"}</Text>
      <Text>{route.params.hexagram.overview} {"\n"}</Text>
      <Text style={{fontWeight: 'bold'}}>Lines Overview: {"\n"}</Text>
      {renderLines()}
    </ScrollView>
  )
}
