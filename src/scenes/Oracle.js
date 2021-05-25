import React, { useState, useEffect, useRef } from 'react';
import {Image, StyleSheet, TouchableOpacity, Modal} from 'react-native'
import { Text, View, Container, Content, Grid, Col, Row, Button } from 'native-base';
import images from '../images'

export default function Oracle() {
  const [coin1Side, setCoin1Side] = useState('yin')
  const [coin2Side, setCoin2Side] = useState('yin')
  const [coin3Side, setCoin3Side] = useState('yin')
  const [coinTossCount, setCoinTossCount] = useState(0)
  const [hexagramRan, setHexagramRan] = useState(false)
  const [hexagramLineList, setHexagramLineList] = useState([])
  const [hexagramLine, setHexagramLine] = useState(null)
  const [hexagramFinished, setHexagramFinished] = useState(false)

  useEffect(() => {
    if(coinTossCount === 6 && hexagramLineList.length === 6) {
      setHexagramFinished(true)
    }
  })
  
  useEffect(() => {
    if(coinTossCount > 0 && coinTossCount < 7) {
      setHexagramLineList(prevList => [...prevList, hexagramLine])
    }
  }, [hexagramRan])

  useEffect(() => {
    if(!hexagramFinished) {
      setHexagramLine(getHexagramLine())
    }
  }, [coinTossCount])

  function getHexagramLine() {
    setHexagramRan(!hexagramRan)
    const coinSides = [coin1Side, coin2Side, coin3Side]
    const yinLength = []
    coinSides.forEach(coin => {
      if(coin === 'yin') {
        yinLength.push(1)
      }
    })
    switch(yinLength.length) {
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
    setCoinTossCount(prevCoinTossCount => prevCoinTossCount < 7 ? prevCoinTossCount + 1 : 0)
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

  function renderHexagramLines() {
    return hexagramLineList.map(line => {
      switch(line) {
        case 0:
          return <View style={{flexDirection: 'row', marginVertical: 10}}><View style={{marginRight: 25, width: 75, height: 10, backgroundColor: 'black'}}/><View style={{marginLeft: 25, width: 75, height: 10, backgroundColor: 'black'}}/></View>
        case 1:
          return <View style={{marginVertical: 10, width: 200, height: 10, backgroundColor: 'black'}}/>
        case 2:
          return <View style={{marginVertical: 10, flexDirection: 'row'}}><View style={{marginRight: 25, width: 75, height: 10, backgroundColor: 'red'}}/><View style={{marginLeft: 25, width: 75, height: 10, backgroundColor: 'red'}}/></View>
        case 3:
          return <View style={{marginVertical: 10, width: 200, height: 10, backgroundColor: 'red'}}/>
      }
    })
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
    <Container style={{backgroundColor: '#e6e2fc'}}>
      <Content contentContainerStyle={{flexGrow: 1, alignItems: 'center', justifyContent: 'space-between'}} style={{padding: 10}}>
        {renderCoinAnimation()}
        <View style={{flexDirection: 'column-reverse'}}>
          {renderHexagramLines()}
        </View>
        <View>
          <Button block bordered primary
            disabled={hexagramFinished === true}
            onPress={() => handleCoinPressAll()}>
            <Text>Throw Coins</Text>  
          </Button>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={hexagramFinished}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button block success full>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>Read</Text>
            </Button>
          </View>
        </Modal>
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
