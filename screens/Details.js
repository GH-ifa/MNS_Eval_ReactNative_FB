import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Details = ({route}) => {
  const {villagers, id} = route.params;

  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.bg}>
        <View style={styles.box}>
          <Text style={styles.title}>{villagers[id].name['name-EUfr']}</Text>
          <Image
            style={styles.img}
            source={{
              uri: villagers[id].image_uri,
            }}
          />
          <Text style={styles.text}>
            {villagers[id].gender == 'Male' ? 'Il' : 'Elle'} adore dire "
            {villagers[id]['catch-translations']['catch-EUfr']}"
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#FFFFDD',
  },
  title: {
    padding: 20,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 32,
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FCFCFC',
    margin: 10,
    borderRadius: 10,
    elevation: 8,
    shadowColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#AAAAAA',
  },
  img: {
    width: 256,
    height: 256,
    alignSelf: 'center',
  },
  text: {
    margin: 30,
    alignSelf: 'center',
    fontSize: 16,
  },
});

export default Details;
