import AsyncStorage from '@react-native-async-storage/async-storage';

const Storage = {
    setItem: async (key, data) => {
        try {
            await AsyncStorage.setItem(key, data);
        } catch (e) {
            console.log(e);
        }
    },

    getItem: async (key) => {
        try {
            const data = await AsyncStorage.getItem(key);
            return data;
        } catch (e) {
            console.log(e);
        }
    },

    removeItem: async (key) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (e) {
            console.log(e);
        }
    },
}

export default Storage;