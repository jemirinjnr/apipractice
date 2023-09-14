import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [data,setData] = useState(undefined)
  const getAPIdata = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1"
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }
  useEffect(() => {
    getAPIdata()
  },)
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 30 }}> API Call</Text>
      {
        data?
        <View>
          <Text style={{ fontSize: 30 }}> {data.id}</Text>
          <Text style={{ fontSize: 30 }}> {data.userId}</Text>
          <Text style={{ fontSize: 30 }}> {data.title}</Text>
          <Text style={{ fontSize: 30 }}> {data.body}</Text>

        </View>
        : null
      }
    </SafeAreaView>
  );
}


