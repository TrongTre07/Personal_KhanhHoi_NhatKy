import React from 'react';
import { useState, useCallback } from 'react';
import { StyleSheet, Text, SafeAreaView, Button,Pressable } from 'react-native';
import DocumentPicker, { types } from 'react-native-document-picker';
import { StatusBar } from 'react-native';
import ViewPDF from './ViewPDF';


const OpenPDF = () => {
    const [fileResponse, setFileResponse] = useState([]);

    const handleDocumentSelection = useCallback(async () => {
        try {
            console.log('handleDocumentSelection');
            const response = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
                type: [types.pdf],
            });
            console.log('response', response);
            console.log('response.uri', response[0].uri);
            console.log('response.type', response);
            
            setFileResponse(response);
            return (
                <SafeAreaView style={{ flex: 1 }}>
                  <ViewPDF pdfPath={response[0].uri} />
                </SafeAreaView>
              );
        } catch (err) {
            console.warn(err);
        }
    }, []);

    return (
        <SafeAreaView style={styles.container} >
            <StatusBar barStyle={'dark-content'} />
            {fileResponse.map((file, index) => (
                <Text
                    key={index.toString()}
                    style={styles.uri}
                    numberOfLines={1}
                    ellipsizeMode={'middle'}>
                    {file?.uri}
                </Text>
                
            ))}
            <Button title="Select 📑" onPress={handleDocumentSelection} />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
export default OpenPDF;