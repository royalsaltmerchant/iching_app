import * as React from 'react';
import { Text, View, Container, Content } from 'native-base';
import {TouchableOpacity} from 'react-native'
import {getAllHexagrams} from '../components/HexagramUtilities'

export default function Hexagrams() {

  function renderAllHexagrams() {
    const allHexagrams = getAllHexagrams()
    const allHexagramsList = allHexagrams.map(hexagram => (
      <TouchableOpacity style={{width: '100%', borderWidth: 1, marginVertical: 5, padding: 5, backgroundColor: 'white'}}>
        <Text style={{fontSize: 30, textAlign: 'center'}} key={hexagram.number}>{`${hexagram.number} ${hexagram.names[0]}, ${hexagram.character}`}</Text>
      </TouchableOpacity>
    ))
    return allHexagramsList
  }

  return (
    <Container style={{backgroundColor: '#e6e2fc'}}>
      <Content>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {renderAllHexagrams()}
        </View>
      </Content>
    </Container>
  )
}
