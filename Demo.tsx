import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

class MyScreen extends Component {
  componentDidMount() {
    this.checkSQLiteConnection();
  }

  async checkSQLiteConnection() {
    const db = SQLite.openDatabase({ name: 'yourDatabase.db', location: 'default' });
    (await db).transaction((tx) => {
      tx.executeSql(
        'SELECT 1 FROM sqlite_master',
        [],
        () => console.log('Kết nối thành công với SQLite'),
        (error) => console.log('Lỗi kết nối với SQLite: ', error)
      );
    });
  }

  render() {
    return (
      <View>
        {/* Các thành phần và giao diện khác */}
        <Text>Kiểm tra kết nối SQLite</Text>
      </View>
    );
  }
}

export default MyScreen;
