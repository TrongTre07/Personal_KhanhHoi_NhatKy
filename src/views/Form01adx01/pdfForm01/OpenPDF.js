import React from 'react';
import { useState, useCallback } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Pressable, Linking } from 'react-native';
import DocumentPicker, { types } from 'react-native-document-picker';
import FileViewer from "react-native-file-viewer";
import { StatusBar } from 'react-native';
import ViewPDF, { openPDFDocument } from './ViewPDF';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


const OpenPDF = ({ navigation }) => {
    const [fileResponse, setFileResponse] = useState([]);

    const handleDocumentSelection = useCallback(async () => {

        try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.allFiles],
            });
            console.log('resssss', res);
            await FileViewer.open(res[0].uri);
          } catch (e) {
            console.log('error', e);
          }
    }, []);

    return (
        <SafeAreaView style={styles.container} >
            <StatusBar barStyle={'dark-content'} />
           
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