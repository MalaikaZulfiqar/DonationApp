import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image } from 'react-native';

const data = [
  {
    id: '1',
    image: require('../images/floodpic4.jpg'),
  },
  {
    id: '2',
    image: require('../images/ds4.jpg'),
  },
  {
    id: '3',
    image: require('../images/md2.jpg'),
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  const keyExtractor = (item) => item.id;

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const index = Math.round(contentOffset.x / screenWidth);

    if (currentIndex !== index) {
      setCurrentIndex(index);
    }
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={handleScroll}
      />
      <View style={styles.indicators}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === currentIndex && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 200,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    marginTop:10
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  indicators: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#009D8B',
  },
});

export default Carousel;
