import React, { useState } from 'react';
import { View, Text, FlatList, TouchableHighlight, StyleSheet } from 'react-native';

const faqs = [
  {
    question: 'What is blockchain technology and how does it relate to donations?',
    answer: 'Blockchain technology is a decentralized, distributed ledger that is used to record transactions. In the context of donations, it can be used to create a secure and transparent way to track donations and ensure that they are reaching their intended recipients.'
  },
  {
    question: 'How does this app ensure the security and transparency of donations?',
    answer: 'Our app uses blockchain technology to create a tamper-proof record of all donations, which can be viewed publicly to ensure transparency. Additionally, we use encryption and other security measures to protect user data and prevent fraud.'
  },
  // Add more FAQs here...
];

const FaqItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableHighlight onPress={toggleExpanded} underlayColor='#e6e6e6'>
      <View style={styles.item}>
        <Text style={styles.question}>{item.question}</Text>
        {expanded && <Text style={styles.answer}>{item.answer}</Text>}
      </View>
    </TouchableHighlight>
  );
};

const Faq = () => {
  return (
    <FlatList
      data={faqs}
      renderItem={({ item }) => <FaqItem item={item} />}
      keyExtractor={(item) => item.question}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    padding: 10,
    
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 2,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 20
  },
  question: {
    fontWeight: 'bold',
    fontSize: 16
  },
  answer: {
    marginTop: 5
  }
});

export default Faq;
