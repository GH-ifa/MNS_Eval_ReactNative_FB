import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const Cam = ({navigation}) => {
  const devices = useCameraDevices();
  const device = devices.back;

  const [imgUrl, setImgUrl] = useState('');

  const camera = useRef(null);
  const onCapture = async () => {
    const photo = await camera.current.takePhoto({
      flash: flashActivated ? 'on' : 'off',
    });
    setImgUrl('file://' + photo.path);
  };

  const [flashActivated, setFlashActivated] = useState(true);

  const onFlash = async () => {
    setFlashActivated(!flashActivated);
  };

  if (device == null) {
    <>
      <ScrollView style={[{backgroundColor: 'black'}]}>
        <View style={[{display: 'flex', alignItems: 'center'}]}>
          <Text style={[{color: '#F00'}]}>Chargement</Text>
        </View>
      </ScrollView>
    </>;
  } else
    return (
      <>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          photo={true}
          ref={camera}
        />
        <Pressable style={styles.butt} onPress={onCapture}>
          <View style={styles.circ}></View>
        </Pressable>
        {imgUrl != '' ? (
          <Image style={styles.pic} source={{uri: imgUrl}}></Image>
        ) : (
          <></>
        )}

        <Pressable onPress={onFlash}>
          {flashActivated != '' ? (
            <Image
              style={styles.flash}
              source={require('../img/flashon.png')}></Image>
          ) : (
            <Image
              style={styles.flash}
              source={require('../img/flashoff.png')}></Image>
          )}
        </Pressable>
      </>
    );
};

var styles = StyleSheet.create({
  flash: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  pic: {
    width: 100,
    height: 200,
    padding: 0,
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 60,
  },
  butt: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 5,
  },
  circ: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: 'white',
    backgroundColor: '#CCC',
  },
});

export default Cam;
