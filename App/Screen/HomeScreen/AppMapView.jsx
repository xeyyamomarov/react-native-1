import { View, Text, StyleSheet } from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from "react-native-maps"
import MapViewStyle from "./../../Utils/MapViewStyle.json"

import React, { useContext } from 'react'
import { UserLocationContext } from '../../Context/UserLocationContext';

export default function AppMapView() {
  const {location,setLocation} = useContext(UserLocationContext)
  return location?.latitude &&  (
    <View>
      <MapView
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      customMapStyle={MapViewStyle}
      region={{
        latitude:location?.latitude,
        longitude:location?.longitude,
        latitudeDelta:40.6306300839918,
        longitudeDelta:7.426757812500001
      }}
       style={styles.map} >
        <Marker
        coordinate={{
          latitude:location?.latitude,
          longitude:location?.longitude
        }}
        />
        </MapView>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });