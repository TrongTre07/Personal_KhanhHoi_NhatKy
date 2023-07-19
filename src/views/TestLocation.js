import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const TestLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Get the current location when the component mounts
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      error => {
        console.log('Error getting location: ', error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  return (
    <View>
      {location ? (
        <Text>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </Text>
      ) : (
        <Text>Loading location...</Text>
      )}
    </View>
  );
};

export default TestLocation;
