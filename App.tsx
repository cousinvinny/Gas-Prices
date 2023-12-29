import React from 'react';
import { Linking } from 'react-native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type GreetingProps = {
  name: string;
};

const Header = () => {
  return (
    <View>
      <Text style={styles.appTitle}>Gas Prices</Text>
    </View>
  );
};

const Card = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.websiteLink} onPress={() => Linking.openURL('https://www.quikstop.com/find-us/generic-store-page/?id=550034')}>QuikStop</Text>
      <Text style={styles.name}>123 Lane Street 95116</Text>
      <View style={styles.pricesContainer}>
        <View style={styles.unleadedContainer}>
          <Text style={styles.name}>Unleaded</Text>
          <Text style={styles.name}>$3.49</Text>
        </View>
        <View style={styles.leadedContainer}>
          <Text style={styles.name}>Leaded</Text>
          <Text style={styles.name}>$6.49</Text>
        </View>
      </View>

    </View>
  );
};

function App() {
  return (
    <View style = {{flex: 1}}>
      <Header />
      <ScrollView style = {{flex: 1}}>
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
    fontSize: 40,
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
  name: {
    fontSize: 25,
    color: 'black',
  },
  pricesContainer: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 15,
    color: 'black',

  },
  unleadedContainer: {
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
  leadedContainer: {
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
  },
});

export default App;
