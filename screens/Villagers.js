import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import ListItem from '../components/ListItem';

const Villagers = ({route, navigation}) => {
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    fetch('https://acnhapi.com/v1/villagers/')
      .then(json => json.json())
      .then(res => setVillagers(Object.keys(res).map(key => res[key])));
  }, []);

  const renderItem = ({item}) => (
    <>
      <ListItem item={item} villagers={villagers}></ListItem>
    </>
  );

  return (
    <>
      <FlatList
        data={villagers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.bglist}
      />

      <View style={styles.bg}>
        <Text style={styles.text}>Il y a {villagers.length} villageois !</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  bg: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  bglist: {
    backgroundColor: '#FFFFDD',
  },
});

export default Villagers;
