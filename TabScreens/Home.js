import {
  StyleSheet, Text, View, Image, FlatList, ScrollView,
  Dimensions, ImageBackground, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback
} from 'react-native'
import VideoPlayer from './Video'
import React, { useState, useEffect } from 'react'
import DonationScreen from '../StackScreen/DonationScreen';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { firebase } from '../database/config';
import Lottie from '../Animations/Lottie';
import MyCarousel from '../componets/Carousel';
import DetailScreen from '../StackScreen/DetailScreen';
import Donation from './Donation';
const Home = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0);
  const { width, height } = Dimensions.get('window');
  const containerHeight = height * 0.3 - 2 * 12 - 2 * 12;
  const handleButtonClick = (image, title, story, total_amount, raised_amount) => {
    navigation.navigate('DetailScreen', { image, title, story, total_amount, raised_amount });
  };
  const flatList1Data = [
    {
      id: 'uid 1',
      image: require('../images/floodpic3.jpg'),
      title: 'Amidst the floodwaters, hope rises as resilient hearts stand united.',
      d_prgress: '0.09',
      story: "In a small village nestled along the banks of a mighty river, a relentless downpour unleashed a devastating flood, leaving its inhabitants grappling with despair and loss. Homes were submerged, livelihoods swept away, and dreams drowned in the swirling currents.",
      total_amount: 2.0,
      raised_amount: 0.0
    },
    {
      id: 'uid 2',
      image: require('../images/md2.jpg'),
      title: 'In the face of rising tides, courage prevails and communities endure',
      d_prgress: '0.01',
      story: 'In the spirit of helping children like Alex, we kindly ask for your support. Your donation can bring smiles to the faces of young cancer patients, providing them with the care they desperately need. Together, lets make a difference and bring hope to those fighting their toughest battles. Join us in our mission to bring comfort, love, and healing to these brave little warriors. Your generosity can change lives and create a brighter future for them.',
      total_amount: 2.0,
      raised_amount: 0.0
    },
    {
      id: 'uid 3',
      image: require('../images/poor.jpg'),
      title: 'Through the deluge, compassion flows, lifting spirits in its wake.',
      d_prgress: '0.01',
      story: 'Every small act of kindness can make a big difference in the lives of struggling families. Your donation can provide food, shelter, and hope to those facing poverty. Join us in supporting these resilient families, helping them build a brighter tomorrow. Together, we can bring smiles and create opportunities for a better future. Your generosity has the power to transform lives and restore hope in the hearts of those in need.',
      total_amount: 3.0,
      raised_amount: 0.0
    },
    {
      id: 'uid 4',
      image: require('../images/ds3.jpg'),
      title: 'Amidst the watery chaos, humanitys strength shines bright.',
      d_prgress: '0.02',
      story: 'In the aftermath of devastating earthquakes, countless lives have been shattered. Your donation can provide urgent relief and aid to those affected, offering shelter, food, and medical assistance. Together, we can help rebuild communities and restore hope for those who have lost everything. Join us in making a difference by extending a helping hand to those in desperate need. Your support can bring strength and resilience to those striving to rebuild their lives after the devastation.',
      total_amount: 2.0,
      raised_amount: 0.0
    },

  ];

  const flatList2Data = [
    {
      id: 'uid 1',
      image: require('../images/floodpic1.jpg'),
      title: 'Together, we can bring hope and healing to flood-affected communities.',
      d_prgress: '0.09',
      story: 'In a quiet village nestled near a river, life was simple and peaceful. But one fateful day, dark clouds gathered, and torrential rains poured down relentlessly. The river swelled, bursting its banks, and the village was engulfed by a devastating flood.Homes were destroyed, livelihoods washed away, and families left stranded. Amidst the chaos and despair, a ray of hope emerged. Volunteers from far and wide rushed to help, offering their support and bringing much-needed relief to the flood-affected areas.',
      total_amount: 2.0,
      raised_amount: 0.0
    },
    {
      id: 'uid 2',
      image: require('../images/floodpic2.jpg'),
      title: 'In the face of rising tides, courage prevails and communities endure',
      d_prgress: '0.01',
      story: 'In a tiny coastal town, a devastating hurricane wreaked havoc, leaving families stranded and homes destroyed. In the midst of the chaos, a group of volunteers emerged, selflessly braving the storm to rescue those in danger. With their unwavering determination, they brought solace and relief to the hurricane-affected community, reminding them that they were not alone in their darkest hour.',
      total_amount: 2.0,
      raised_amount: 0.0
    },
    {
      id: 'uid 3',
      image: require('../images/floodpic3.jpg'),
      title: 'Through the deluge, compassion flows, lifting spirits in its wake.',
      d_prgress: '0.01',
      story: 'A wildfire raged through a dense forest, leaving a trail of destruction in its wake. Firefighters and volunteers united, battling the inferno with unwavering courage. Their tireless efforts protected lives, wildlife, and the environment. Through their bravery, the wildfire-affected region began to heal, showcasing the resilience of nature and the indomitable spirit of those who safeguard it.',
      total_amount: 2.0,
      raised_amount: 0.0
    },
    {
      id: 'uid 4',
      image: require('../images/floodpic4.jpg'),
      title: 'Amidst the watery chaos, humanitys strength shines bright.',
      d_prgress: '0.02',
      story: 'Deep in a remote village, heavy monsoon rains triggered severe flooding, displacing families and causing widespread devastation. A compassionate organization swiftly responded, providing emergency aid and setting up relief camps. Their quick action saved lives, restored hope, and allowed the flood-affected families to rebuild their shattered homes and dreams.',
      total_amount: 2.0,
      raised_amount: 0.0
    },

  ];
  const flatList3Data = [
    {
      id: 'uid 1',
      image: require('../images/new1.jpg'),
      title: 'Together, we can be the light in a poor ill child darkest days.',
      d_prgress: '0.09',
      story: 'In a small village, there lived a poor ill child named Lily, whose laughter could light up the gloomiest of days. Despite her fragile health and financial struggles, she possessed an unwavering spirit that inspired those around her. The community rallied together, raising funds and providing emotional support, ensuring that Lily received the medical care and love she deserved. Through their collective efforts, they turned Lilys world from one of hardship to one filled with hope and boundless possibilities.',
      total_amount: 2.0,
      raised_amount: 0.0
    },
    {
      id: 'uid 2',
      image: require('../images/new2.jpg'),
      title: 'Donate from the heart and help save a life',
      d_prgress: '0.01',
      story: 'Meet Jack, a brave heart patient with an unwavering spirit. Despite his life-threatening condition, he dreams of a future filled with love, laughter, and the joy of each heartbeat. Your donation can provide life-saving treatments and surgeries, giving Jack and others like him a second chance at life. Together, lets make a difference and be the heartbeat of hope for those battling heart diseases.',
      total_amount: 2.0,
      raised_amount: 0.0
    },
    {
      id: 'uid 3',
      image: require('../images/new3.jpg'),
      title: 'Rebuilding lives, one brick at a time',
      d_prgress: '0.01',
      story: 'In the aftermath of a devastating earthquake, the Silva family lost everything they held dear. Their home crumbled, leaving them shattered and displaced. Your donation can provide them with shelter, relief, and the support they need to rebuild their lives. Lets stand together and be the foundation of hope for earthquake-affected families, helping them rise stronger than ever before.',
      total_amount: 3.0,
      raised_amount: 0.0
    },
    {
      id: 'uid 4',
      image: require('../images/new4.jpg'),
      title: 'Extending a helping hand in times of floods.',
      d_prgress: '0.02',
      story: 'When floods ravaged their community, the Garcia family found themselves in a desperate situation. Their home was submerged, their belongings washed away. Your donation can provide essential aid, including food, clean water, and emergency supplies, to flood-affected families like the Garcias. Together, lets bring hope and relief to those in need and help them rebuild their lives after the devastating floods.',
      total_amount: 3.0,
      raised_amount: 0.0
    },

  ];
  const flatList4Data = [
    {
      id: 'uid 1',
      image: require('../images/md3.jpg'),
      title: 'Help Overcome Malnutrition..',
      d_prgress: '0.09',
      story: 'ff',
      total_amount: 0.9,
      raised_amount: 0.0
    },
    {
      id: 'uid 2',
      image: require('../images/pop1.jpg'),
      title: 'Help Overcome Malnutrition..',
      d_prgress: '0.01',
      story: 'ff',
      total_amount: 0.9,
      raised_amount: 0.0
    },
    {
      id: 'uid 3',
      image: require('../images/pop2.jpg'),
      title: 'Overcome Malnutrition..',
      d_prgress: '0.01',
      story: 'ff',
      total_amount: 0.9,
      raised_amount: 0.0
    },
    {
      id: 'uid 4',
      image: require('../images/pop3.jpg'),
      title: 'Help Overcome Malnutrition..',
      d_prgress: '0.02',
      story: 'ff',
      total_amount: 0.9,
      raised_amount: 0.0

    },

  ];


  const renderFlatList = (data) => (
    <ScrollView horizontal contentContainerStyle={styles.flatListContainer}>
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.container}
          onPress={() => handleButtonClick(item.image, item.title, item.story, item.total_amount, item.raised_amount)}
        >
          <ImageBackground source={item.image} style={styles.image}>
            <Text style={styles.title}>{item.title}</Text>
            <Progress.Bar
              progress={parseFloat(item.d_prgress)}
              width={230}
              color="#009D8B"
              unfilledColor="#E5E5E5"
              borderWidth={0}
              borderRadius={5}
              height={5}
              style={styles.progressBar}
            />
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const [name, setName] = useState('');
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, fetch user data from database
        const databaseRef = firebase.database().ref('users/' + user.uid);
        databaseRef.on('value', (snapshot) => {
          const userData = snapshot.val();
          setName(userData.name);
        });
      } else {
        // No user is signed in
        setName('');
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe from the onAuthStateChanged listener
    };
  }, []);
  return (

    <View style={{ flex: 1, height: '100%' }}>
      <View style={styles.mainheader}>
        <View style={styles.headerDesign}>
          {name ? (
            <Text style={styles.headText}>{name}!</Text>
          ) : (
            <Text style={styles.headText}>Welcome</Text>
          )}
          <Text style={styles.greetingText}>Let's start spreading goodness..</Text>

        </View>
        <View style={{ padding: 12 }}>
          {/* <Image source={require('../images/user.png')} style={{ height: 60, width: 60 }} /> */}
        </View>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <MyCarousel />
        <Text style={styles.titleText}>Urgent Fundraising</Text>
        {renderFlatList(flatList1Data)}
        
        <Text style={styles.titleText}>Flood</Text>
        {renderFlatList(flatList2Data)}

        <Text style={styles.titleText}>New Here</Text>
        {renderFlatList(flatList3Data)}

        <Text style={styles.titleText}>Most Popular</Text>
        {renderFlatList(flatList4Data)}

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Donation')}>
          <Text style={styles.buttonText}>See All</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>

  )
}

export default Home

const styles = StyleSheet.create({
  mainheader: {
    backgroundColor: "#009D8B",
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  headerDesign: {

    flexDirection: 'column',
    padding: 12
  },
  headText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  greetingText: {
    color: 'white',
  },
  container: {
    borderRadius: 12,
    shadowColor: '#009D8B',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: 12,
    padding: 12,
    height: 250,
    width: 270,
    marginTop: -10
  },
  image: {
    height: 200,
    width: 247,
    borderRadius: 12,
    marginTop: 5

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 2,
    alignSelf: 'flex-start',
    color: '#fff',
    marginTop: 100
  },
  progressBar: {
    marginLeft: 8,
    marginTop: 220,
    position: 'absolute'

  },
  button: {
    backgroundColor: '#009D8B',
    margin: 20,
    //width: '80%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    padding: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },

  flatListContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',

  },
  titleText: {
    fontSize: 20,
    //textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
    margin: 12
  }
})