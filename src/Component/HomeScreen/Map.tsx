import { useNavigation } from '@react-navigation/core'
import React, { MutableRefObject, useEffect, useState } from 'react'
import { Alert, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Geocoder from 'react-native-geocoding'
import MapView, { Marker } from 'react-native-maps'
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Map = () => {    
    const insets = useSafeAreaInsets()

    let geocoder: any = Geocoder;
    const _map = React.useRef<MapView>(null) as MutableRefObject<MapView>;
    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)
    const [location, setLocation] = useState('')

    const navigate = useNavigation()

    useEffect(() => {
        checkPermission()
        //  geocoder.init('AIzaSyAvS2iFRe5sQdvJBZL4hKzZ54NI5RsdyTk')
    }, [])

    const initialMapState = {
        region: {
            latitude: 11.5775383,
            longitude: 104.9049579,
            latitudeDelta: 0.05864195044303443,
            longitudeDelta: 0.050142817690068,
        },
    };

    const checkPermission = () => {
        request(
            Platform.OS === 'ios'
                ? PERMISSIONS.IOS.LOCATION_ALWAYS
                : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        )
            .then((result) => {
                switch (result) {
                    case RESULTS.UNAVAILABLE:
                        console.log(
                            'This feature is not available (on this device / in this context)',
                        );
                        break;
                    case RESULTS.DENIED:
                        console.log(
                            'The permission has not been requested / is denied but requestable',
                        );
                        break;
                    case RESULTS.GRANTED:
                        // getCurrentLocation();
                        console.log('The permission is granted');
                        break;
                    case RESULTS.BLOCKED:
                        console.log('The permission is denied and not requestable anymore');
                        break;
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const getLocationGeocoding = (lat: any, long: any) => {
        geocoder.from(lat,long)
            .then((json: { results: { address_components: any[]; }[]; }) => {
                var addressComponent: any = json.results[0];
                setLocation(addressComponent.formatted_address);
            })
            .catch((error: any) => console.warn(error));
    }

    return (
        <>
        <SafeAreaView style={styles.safeAreaContainer}>
            <MapView
                ref={_map}
                showsCompass={false}
                showsUserLocation
                style={{flex:1}}>
                <Marker
                    draggable
                    onDragEnd={(value) => {
                        setLat(value.nativeEvent.coordinate.latitude)
                        setLng(value.nativeEvent.coordinate.longitude)
                        getLocationGeocoding(lat, lng)
                    }}
                    coordinate={{
                        latitude: lat,
                        longitude: lng
                    }}
                >
        </Marker>
            </MapView>
            <View style={{
                width: '100%',
                position: 'absolute',
                top: 20,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>{location}</Text>
            </View>
        </SafeAreaView>
        </>
    )
}

export default Map

const styles = StyleSheet.create({
    safeAreaContainer:{
        flex:1
    },
    locationButton: {
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 100,
        right: 25
    },
    button: {
        height: 50,
        width: '100%',
        position: 'absolute',
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0
    },
    backButton: {
        width: 45,
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 45 / 2,
        position: 'absolute',
        zIndex: 1,
        elevation: 1,
        left: 20,
        alignItems: 'center',
        justifyContent: 'center'
      },
})