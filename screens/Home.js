import React, {useState} from 'react';
import {
  Linking,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Camera} from 'react-native-vision-camera';

import DocumentPicker, {types} from 'react-native-document-picker';

import notifee from '@notifee/react-native';

const Home = ({route, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const openCamera = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();

    console.log(cameraPermission);
    if (cameraPermission === 'authorized') {
      setModalVisible(false);
      navigation.navigate('Camera');
    } else {
      const newPermission = await Camera.requestCameraPermission();
      if (newPermission == 'denied') {
        console.log('c ded', newPermission);
        setModalVisible(true);
      } else {
        console.log('c ok', newPermission);
        setModalVisible(false);
        navigation.navigate('Camera');
      }
    }
  };

  const sendNotif = async () => {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notif pour Franck',
      body: 'Vous êtes notifiés de cette notification',
      android: {
        channelId,
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  };

  const [fileResponse, setFileResponse] = useState([]);
  const openPicker = async () => {
    console.log('pick');
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [types.images],
      });
      setFileResponse(response);

      {
        fileResponse.map((file, index) => console.log(file.uri));
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <>
      <Modal visible={modalVisible} transparent={false} animation={'slide'}>
        <Text style={[{margin: 10}]}>
          Vous avez besoin d'autoriser la caméra de votre appareil pour utiliser
          cette fonctionnalité.
        </Text>
        <TouchableOpacity
          onPress={async () => {
            await Linking.openSettings();
            setModalVisible(false);
          }}
          style={styles.button}>
          <Text style={[{margin: 10, alignSelf: 'center'}]}>
            Ouvrir les paramètres
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={styles.button}>
          <Text style={[{margin: 10, alignSelf: 'center'}]}>
            Revenir au menu
          </Text>
        </TouchableOpacity>
      </Modal>

      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.bg}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Villagers')}
          style={styles.button}>
          <Text style={styles.buttontext}>Villageois</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openCamera} style={styles.button}>
          <Text style={styles.buttontext}>Camera 📷</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={sendNotif} style={styles.button}>
          <Text style={styles.buttontext}>Notif ✉</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openPicker} style={styles.button}>
          <Text style={styles.buttontext}>Pick 📑</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#FFFFDD',
    height: '100%',
  },
  button: {
    backgroundColor: '#FCFCFC',
    elevation: 8,
    shadowColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    width: 300,
    alignSelf: 'center',
    margin: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  buttontext: {
    lineHeight: 80,
    fontSize: 40,
    alignSelf: 'center',
  },
});

export default Home;
