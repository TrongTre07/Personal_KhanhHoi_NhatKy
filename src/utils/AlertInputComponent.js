import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';

const AlertInputComponent = ({ visible, onClose, onSubmit, initialValue, actionPopup }) => {
  const [inputText, setInputText] = useState('');
  const [action, setAction] = useState('Tạo')

  useEffect(() => {
    setInputText(initialValue || ''); // Set initial value when the popup appears
  }, [initialValue]);

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleSubmit = () => {
    if (inputText.trim() !== '') {
      onSubmit(inputText); // Send data back to the parent component
    }
    setInputText('');
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Nhập tên biểu mẫu</Text>
          <TextInput
            value={inputText}
            onChangeText={handleInputChange}
            style={styles.input}
            placeholder="Biểu mẫu..."
            placeholderTextColor="#777"
          />
          <View style={styles.buttonContainer}>
            <Button title="Hủy" onPress={onClose} color="#FF6347" />
            <Button title={action} onPress={handleSubmit} color="#007BFF" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AlertInputComponent;
