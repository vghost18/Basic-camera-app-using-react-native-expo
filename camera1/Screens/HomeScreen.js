import React from 'react';
import { StyleSheet, TouchableOpacity, View, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const handleCameraPress = () => {
    navigation.navigate('Camera');
  };

  return (
    <ImageBackground style={styles.background} source={{ uri: 'https://img.talkandroid.com/uploads/2015/08/hd-camera-app-logo.png' }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleCameraPress}>
          <MaterialIcons name="camera-alt" size={48} color="grey" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
