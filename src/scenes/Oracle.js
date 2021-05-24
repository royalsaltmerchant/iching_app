import React, { useState, useEffect, useRef } from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native'
import { Text, View, Container, Content, Grid, Col, Row, Button } from 'native-base';
import images from '../images'

export default function Oracle() {
  const [coin1Side, setCoin1Side] = useState('yin')
  const [coin2Side, setCoin2Side] = useState('yin')
  const [coin3Side, setCoin3Side] = useState('yin')
  const [coinTossCount, setCoinTossCount] = useState(0)
  const [hexagramLineList, setHexagramLineList] = useState(null)
  const [hexagramLine, setHexagramLine] = useState(null) 

  useEffect(() => {
    console.log('coinToss Count',coinTossCount)
    setHexagramLine(getHexagramLine())
    // setHexagramLineList[prevHexagramLineList => [...prevHexagramLineList, hexagramLine]]
  }, [coinTossCount])

  function getHexagramLine() {
    const coinSides = [coin1Side, coin2Side, coin3Side]
    console.log('coinSides', coinSides)
    const yinLength = []
    const yinAmount = coinSides.map(coin => {
      if(coin === 'yin') {
        yinLength.push('yin')
      }
      return yinLength
    })
    console.log('yin amount', yinAmount)
    switch(yinAmount.length) {
      case 1:
        return 0
      case 2:
        return 1
      case 3:
        return 2
      case 0:
        return 3
    }
  }

  function handleCoinPressAll() {
    setCoinTossCount(prevCoinTossCount => prevCoinTossCount + 1)
    const coinNumbers = [1, 2, 3]
    coinNumbers.forEach(coin => {
      handleCoinPress(coin)
    })
  }
  
  function handleCoinPress(coin) {
    const randomBinary = Math.floor(Math.random() * 2)
    if(coin === 1) {
      if(randomBinary === 0) {
        setCoin1Side('yin')
      } else {
        setCoin1Side('yang')
      }
    }
    if(coin === 2) {
      if(randomBinary === 0) {
        setCoin2Side('yin')
      } else {
        setCoin2Side('yang')
      }
    }
    if(coin === 3) {
      if(randomBinary === 0) {
        setCoin3Side('yin')
      } else {
        setCoin3Side('yang')
      }
    }
  }

  function renderCoinImage(coin) {
    if(coin === 1) {
      if(coin1Side === 'yin') {
        return(
          <Image style={styles.coin} source={images.yin} />
        )
      } else {
        return(
          <Image style={styles.coin} source={images.yang} />
        )
      }
    }
    if(coin === 2) {
      if(coin2Side === 'yin') {
        return(
          <Image style={styles.coin} source={images.yin} />
        )
      } else {
        return(
          <Image style={styles.coin} source={images.yang} />
        )
      }
    }
    if(coin === 3) {
      if(coin3Side === 'yin') {
        return(
          <Image style={styles.coin} source={images.yin} />
        )
      } else {
        return(
          <Image style={styles.coin} source={images.yang} />
        )
      }
    }
  }

  function renderCoinAnimation() {
    const coinNumbers = [1, 2, 3]
    const coins = coinNumbers.map(coin => (
      <TouchableOpacity
        key={coin}
        onPress={() => handleCoinPressAll()}>
        {renderCoinImage(coin)}
      </TouchableOpacity>
    ))
    return <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>{coins}</View>
  }

  return (
    <Container>
      <Content contentContainerStyle={{flexGrow: 1, alignItems: 'center', justifyContent: 'space-between'}} style={{padding: 10, backgroundColor: '#e6e2fc'}}>
        {renderCoinAnimation()}
        <Text>{hexagramLine}</Text>
        <View>
          <Button block bordered primary
            onPress={() => handleCoinPressAll()}>
            <Text>Throw Coins</Text>  
          </Button>
        </View>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  coin: {
    height: 120,
    width: 120,
    margin: 20,
    shadowColor: '#111',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1.3,
  }
});
