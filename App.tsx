import React from 'react';
import { useState } from 'react';
import { Linking } from 'react-native';
import DropdownComponent from './components/DropdownComponent';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={styles.appTitle}>Gas Prices</Text>
      <DropdownComponent />
    </View>
  );
};

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeaderContainer}>
        <Text style={styles.websiteLink} onPress={() => Linking.openURL('https://www.quikstop.com/find-us/generic-store-page/?id=550034')}>QuikStop</Text>
        <Text style={styles.distance}>3.7 miles</Text>
      </View>

      <Text style={styles.stationAddress}>2704 S Bascom Ave, San Jose, CA, 95124</Text>
      <View style={styles.pricesContainer}>
        <View style={styles.regularContainer}>
          <Text style={styles.name}>Regular</Text>
          <Text style={styles.name}>$3.49</Text>
        </View>
        <View style={styles.regularPlusContainer}>
          <Text style={styles.name}>Plus</Text>
          <Text style={styles.name}>$6.49</Text>
        </View>
      </View>

    </View>
  );
};

function App() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView style={{ flex: 1 }}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appTitle: {
    fontWeight: 'bold',
    fontSize: 35,
    marginLeft: 15,
    marginTop: 5,
    color: 'black',
  },
  card: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderWidth: 4,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  cardHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  name: {
    fontSize: 25,
    color: 'black',
  },
  stationAddress: {
    fontSize: 20,
    color: 'black',
  },
  distance: {
    fontSize: 20,
    color: 'black',
    right: 15,
    textDecorationLine: 'underline',
  },
  pricesContainer: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 15,
    color: 'black',

  },
  regularContainer: {
    flexGrow: 1,
    flexBasis: 100,
    padding: 10,
    margin: 4,
    borderWidth: 4,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  regularPlusContainer: {
    flexGrow: 1,
    flexBasis: 100,
    padding: 10,
    margin: 4,
    borderWidth: 4,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  websiteLink: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    flexGrow: 1,
    flexBasis: 100,
  },
});

export default App;
