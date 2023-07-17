import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ImageBackground } from 'react-native';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import CategoryDetails from '../StackScreen/CategoryDetails';


const donations = [
  { id: 1, title: 'Healing lives one donation at a time', category: 'Medical', image: require('../images/md1.jpg'), progress: 0.6 ,total_amount:3.3,raised_amount:0.0 },
  { id: 2, title: 'Make a life-saving impact donate to cancer patient', category: 'Medical', image: require('../images/md2.jpg'), progress: 0.6 ,total_amount:3.1,raised_amount:0.0 },
  { id: 3, title: 'Empower cancer patients with your generous donations', category: 'Medical', image: require('../images/md3.jpg'), progress: 0.6 ,total_amount:3.6,raised_amount:0.0 },
  { id: 4, title: 'Bring joy and healing to an ill child with your donation', category: 'Medical', image: require('../images/md4.jpg'), progress: 0.6 ,total_amount:3.0,raised_amount:0.0 },

  { id: 5, title: 'Support earthquake-affected communities', category: 'Disaster', image: require('../images/ds1.jpg'), progress: 0.4 ,total_amount:2.4,raised_amount:0.0 },
  { id: 6, title: 'Help rebuild lives', category: 'Disaster', image: require('../images/ds2.jpg'), progress: 0.4 ,total_amount:2.4,raised_amount:0.0 },
  { id: 7, title: 'Ignite hope amidst adversity', category: 'Disaster', image: require('../images/ds3.jpg'), progress: 0.4 ,total_amount:2.3,raised_amount:0.0 },
  { id: 8, title: 'Restoring hope and rebuilding lives', category: 'Disaster', image: require('../images/floodpic4.jpg'), progress: 0.4 ,total_amount:3.1,raised_amount:0.0},

  { id: 9, title: 'Empower underprvileged children through education', category: 'Education', image: require('../images/edu1.jpg'), progress: 0.8 ,total_amount:2.4,raised_amount:0.0},
  { id: 10, title: 'Bring hope to orphans through support', category: 'Education', image: require('../images/edu2.jpg'), progress: 0.8 ,total_amount:2.5,raised_amount:0.0},
  { id: 11, title: 'Break barriers, build future', category: 'Education', image: require('../images/edu3.jpg'), progress: 0.8 ,total_amount:2.5,raised_amount:0.0},
  { id: 12, title: 'Empower special children with your support', category: 'Education', image: require('../images/edu4.jpg'), progress: 0.8 ,total_amount:2.4,raised_amount:0.0},
  
];


const Donation = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredDonations, setFilteredDonations] = useState(donations);
  const navigation = useNavigation();
  // Filter donations based on selected category

  const handleButtonClick = (image, title,total_amount,raised_amount) => {
    navigation.navigate('CategoryDetails', { image, title,total_amount,raised_amount });
  };
  const filterDonations = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredDonations(donations);
    } else {
      const filtered = donations.filter((donation) => donation.category === category);
      setFilteredDonations(filtered);
    }
  };
  // const renderDonationItem = ({ item }) => (
     
  //         <TouchableOpacity onPress={handleButtonClick(item.image, item.title, item.total_amount, item.raised_amount)}>
  //       <View style={styles.donationItem}>
        
  //     <View style={styles.imageContainer}>
  //       <ImageBackground source={item.image} style={styles.imageBackground} imageStyle={styles.image} />
  //     </View>
  //     <View style={styles.donationDetails}>
  //       <Text style={styles.donationTitle}>{item.title}</Text>
        
  //     </View>
  //     <Progress.Bar
  //       progress={item.progress}
  //       width={null}
  //       height={8}
  //       borderRadius={4}
  //       color="#009D8B"
  //       unfilledColor="#f2f2f2"
  //       borderWidth={0}
  //       style={{ margin: 5 }}
  //     />
  //   </View>
  //      </TouchableOpacity>
    
     
    
  // );
const renderDonationItem = ({ item }) => (
  <View style={styles.donationItem}>
    <View style={styles.imageContainer}>
      <ImageBackground source={item.image} style={styles.imageBackground} imageStyle={styles.image} />
    </View>
    <View style={styles.donationDetails}>
      <Text style={styles.donationTitle}>{item.title}</Text>
    </View>
    <Progress.Bar
      progress={item.progress}
      width={null}
      height={8}
      borderRadius={4}
      color="#009D8B"
      unfilledColor="#f2f2f2"
      borderWidth={0}
      style={{ margin: 5 }}
    />
  </View>
);

  return (
    <View style={styles.container}>
      <View style={styles.categories}>
        <TouchableOpacity
          style={[styles.category, selectedCategory === 'All' && styles.selectedCategory]}
          onPress={() => filterDonations('All')}
        >
          <Text style={styles.categoryText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.category, selectedCategory === 'Medical' && styles.selectedCategory]}
          onPress={() => filterDonations('Medical')}
        >
          <Text style={styles.categoryText}>Medical</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.category, selectedCategory === 'Disaster' && styles.selectedCategory]}
          onPress={() => filterDonations('Disaster')}
        >
          <Text style={styles.categoryText}>Disaster</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.category, selectedCategory === 'Education' && styles.selectedCategory]}
          onPress={() => filterDonations('Education')}
        >
          <Text style={styles.categoryText}>Education</Text>
        </TouchableOpacity>
      </View>
      {/* <FlatList
        data={filteredDonations}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={handleButtonClick(item.image, item.title, item.total_amount, item.raised_amount)}>
          <View style={styles.donationItem}>
          
        <View style={styles.imageContainer}>
          <ImageBackground source={item.image} style={styles.imageBackground} imageStyle={styles.image} />
        </View>
        <View style={styles.donationDetails}>
          <Text style={styles.donationTitle}>{item.title}</Text>
          
        </View>
        <Progress.Bar
          progress={item.progress}
          width={null}
          height={8}
          borderRadius={4}
          color="#009D8B"
          unfilledColor="#f2f2f2"
          borderWidth={0}
          style={{ margin: 5 }}
        />
      </View>
         </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        style={styles.donationList}
        showsVerticalScrollIndicator={false}
      /> */}
      <FlatList
  data={filteredDonations}
  renderItem={({ item }) => (
    <TouchableOpacity onPress={() => handleButtonClick(item.image, item.title, item.total_amount, item.raised_amount)}>
      {renderDonationItem({ item })}
    </TouchableOpacity>
  )}
  keyExtractor={(item) => item.id.toString()}
  style={styles.donationList}
  showsVerticalScrollIndicator={false}
/>

    </View>
  );
};

export default Donation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
   
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  category: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedCategory: {
    backgroundColor: '#7DB9B6',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  donationList: {
    flex: 1,
  },
  donationItem: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
    backgroundColor: 'white',
  },
  imageContainer: {
    height: 200,
  },
  donationTitle: {
    fontSize: 20,
    //fontWeight: 'bold',
    //color: '#333',
    marginBottom: 8,
  },
  donationCategory: {
    //marginTop: 8,
    fontSize: 14,
    color: '#666',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  image: {
    opacity: 0.7,
  },
  donationDetails: {
    padding: 16,
    //backgroundColor: '#f2f2f2',
  },
});

