import * as React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native'
import { Text, View, Container, Content, Grid, Col, Row, Button } from 'native-base';

export default function Oracle() {
  return (
    <Container>
      <Content contentContainerStyle={{flexGrow: 1, alignItems: 'center', justifyContent: 'space-between'}} style={{padding: 10, backgroundColor: '#e6e2fc'}}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
          <TouchableOpacity>
            <Image style={styles.coin} source={require('../images/chinese_coin01.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.coin} source={require('../images/chinese_coin01.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.coin} source={require('../images/chinese_coin01.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.coin} source={require('../images/chinese_coin01.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.coin} source={require('../images/chinese_coin01.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.coin} source={require('../images/chinese_coin01.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <Button block bordered primary>
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
