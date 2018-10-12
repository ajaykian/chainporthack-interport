import React from 'react';
import{StyleSheet,Text, View, Button} from 'react-native'


export default class Arrivals extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Arrivals</Text>
          <Button
            color= 'green'
            title="Show Details"
            onPress={() => this.props.navigation.navigate('ArrivalsDetails')}
          />
          <Button
            title=" Go to Departures yeah"
            onPress={() => this.props.navigation.navigate('Departures')}
          />
        </View>
      );
    }
  }


