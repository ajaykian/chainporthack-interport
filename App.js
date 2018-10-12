import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Arrivals from './components/Arrivals'
import ArrivalsDetails from './components/ArrivalsDetails'
import Departures from './components/Departures'
import DeparturesDetails from './components/DeparturesDetails'

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
export class Tab extends React.Component {
  render(){
    return (
      {tabNavigation}
    )
  }
}

const RootStack = createStackNavigator(
  {
    Arrivals: {
      screen: Arrivals,
    },
    ArrivalsDetails: {
      screen: ArrivalsDetails,
    },
      Departures: {
        screen: Departures,
      },
      DeparturesDetails: {
        screen: DeparturesDetails,
      }
  },
  {
    initialRouteName: 'Arrivals',
  }
);

