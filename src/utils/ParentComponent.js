import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import AlertInputComponent from './AlertInputComponent';

const ParentComponent = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [receivedData, setReceivedData] = useState('');

  const handleTriggerButtonClick = () => {
    setPopupVisible(true);
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  const handleDataSubmit = (data) => {
    setReceivedData(data);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Trigger Popup" onPress={handleTriggerButtonClick} />

      {receivedData !== '' && (
        <Text style={{ marginTop: 20 }}>Received data: {receivedData}</Text>
      )}

      <AlertInputComponent
        visible={isPopupVisible}
        onClose={handlePopupClose}
        onSubmit={handleDataSubmit}
      />
    </View>
  );
};

export default ParentComponent;
