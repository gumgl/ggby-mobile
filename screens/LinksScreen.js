import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { MapView } from 'expo';
import { LocalTile, Overlay } from 'react-native-maps';
import fruitbowl from '../assets/images/fruit-bowl.png';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  constructor(props) {
    super(props);

    this.state = {
      overlay_bounds: [[47.643854,-122.308841],[47.640853,-122.303558]],
    };
    
    Expo.Permissions.getAsync(Expo.Permissions.LOCATION);
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: 47.642234,
          longitude: -122.305725,
          latitudeDelta: 0.004,
          longitudeDelta: 0.005,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
      <Overlay
        image={fruitbowl}
        bounds={this.state.overlay_bounds}
      />
      </MapView>
      
      /*
      */
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
