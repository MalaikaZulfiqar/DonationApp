import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = () => {
  return (
    <View style={styles.container}>
      <Video
        source={require('../images/Replication_basic.mp4')}
        style={styles.video}
        muted={true}
      />
      <Video
        source={require('../videos/earthquack.mp4')}
        style={styles.video}
        muted={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius:12,
    borderColor:"white",
    borderWidth:6

  },
  video: {
    width: '100%',
    height: 200,
    borderRadius:10,
    
  },
  button: {
    marginTop: 200,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#3f51b5',
    borderRadius: 12,


  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default VideoPlayer;
