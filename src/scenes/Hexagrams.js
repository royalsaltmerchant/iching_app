import * as React from 'react';
import { Text, View, Container, Content} from 'native-base';
import {getAllHexagrams} from '../components/HexagramUtilities'

export default function Hexagrams() {

  function renderAllHexagrams() {
    const allHexagrams = getAllHexagrams()
    const allHexagramsList = allHexagrams.map(hexagram => (
      <Text key={hexagram.number}>{hexagram.names[0]}</Text>
    ))
    return allHexagramsList
  }

  return (
    <Container>
      <Content>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {renderAllHexagrams()}
        </View>
      </Content>
    </Container>
  )
}
