import React from 'react';
import{StyleSheet,Text, View, Button} from 'react-native'
export default class Arrivals extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>go to Arrivals</Text>
          <Button
            title="Go to Arrivals"
            onPress={() => this.props.navigation.navigate('Arrivals')}
          />
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('ArrivalsDetails')}
          />
        </View>
      );
    }
  }