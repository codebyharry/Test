import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {data} from '../data';
import {useNavigation} from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();
  const [apiData, setApiData] = useState(data);

  const gatherData = text => {
    const searchData = apiData.filter(e => e.title.includes(text));
    setApiData(searchData);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigation.navigate('Video', {item: item})}>
        <Image source={{uri: item.thumbnailUrl}} style={styles.thumbnail} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <Text style={styles.textContainer}>Videos</Text>
      <TextInput
        style={{
          height: 30,
          width: '100%',
          borderWidth: 2,
          marginRight: 10,
          padding: 5,
          marginBottom: 10,
        }}
        onChangeText={gatherData}
        placeholder={'Search'}
      />
      <FlatList
        data={apiData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    fontSize: 32,
    margin: 10,
    fontWeight: 'bold',
  },
  thumbnail: {
    width: 80,
    height: 60,
    marginHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
  },
});

export default HomePage;
