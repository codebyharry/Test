import {Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import React from 'react';
import Vid from 'react-native-video';

const Video = ({route}) => {
  const {item} = route.params;
  console.log(item);

  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <Vid
        source={{
          uri: item.videoUrl,
        }}
        style={styles.video}
        controls={true}
        resizeMode="contain"
      />
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        {item.title}
      </Text>
      <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
        {item.description}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  video: {
    height: 300,
    width: '100%',
  },
});

export default Video;
