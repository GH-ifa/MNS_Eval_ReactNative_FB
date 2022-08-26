import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';

const ListItem = ({villagers, item}) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            villagers: villagers,
            id: item.id - 1,
          })
        }
        style={styles.box}>
        <View style={styles.detail}>
          <Image
            style={styles.icon}
            source={{
              uri: item.icon_uri,
            }}
          />
          <Text style={styles.text}>{item.name['name-EUfr']}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  detail: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  box: {
    backgroundColor: '#FCFCFC',
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    elevation: 8,
    shadowColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#AAAAAA',
  },
  icon: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    margin: 10,
  },
  text: {
    lineHeight: 70,
    color: 'black',
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ListItem;
