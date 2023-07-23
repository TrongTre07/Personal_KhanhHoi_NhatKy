import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {openDatabase} from 'react-native-sqlite-storage';
import NetInfo from "@react-native-community/netinfo";

const db = openDatabase({
  name: 'rn_sqlite',
});

const test_sqlite = () => {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log('DB Created Successfully');
        },
        error => {
          console.log('ERROR HAPPENED: ', error.message);
        },
      );
    });
  };

  useEffect(() => {
    createTables();
    getCategory();
  }, []);

  const addCategory = () => {
    if (!category) {
      Alert.alert('Enter Category');
      return false;
    }

    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO categories (name) VALUES (?)`,
        [category],
        (sqlTxn, res) => {
          console.log(`${category} has added successfully`);
          getCategory();
        },
        error => {
          error.log('Fail to add category: ', error.message);
        },
      );
    });
  };

  const getCategory = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM categories ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log('Category retrieved successfully');
          let len = res.rows.length;

          if (len > 0) {
            let result = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              result.push({id: item.id, name: item.name});
            }
            setCategories(result);
          }
        },
        error => {
          console.log('ERROR to get Category: ', error.message);
        },
      );
    });
  };

  const RenderCategories = ({item}) => {
    return (
      <View>
        <Text>{item.id}</Text>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View>
      <StatusBar backgroundColor="orange" />
      <Text>test_sqlite</Text>
      <TextInput
        placeholder="input something"
        value={category}
        onChangeText={setCategory}
      />

      <Button title="Submit" onPress={() => addCategory()} />

      <FlatList
        data={categories}
        renderItem={({item}) => <RenderCategories item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default test_sqlite;

const styles = StyleSheet.create({});
