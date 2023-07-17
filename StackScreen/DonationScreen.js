import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';

const DonationScreen = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleDonate = () => {
    if (donationAmount) {
      // Handle donation logic here
      setModalVisible(true);
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setDonationAmount('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Donate in Ethers</Text>
      <Text style={styles.motivationText}>Your contribution can make a difference!</Text>
      <TextInput
        style={styles.input}
        placeholder="0.1 ETH"
        keyboardType="numeric"
        value={donationAmount}
        onChangeText={setDonationAmount}
      />
      <TouchableOpacity style={styles.button} onPress={handleDonate}>
        <Text style={styles.buttonText}>Donate Now</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={handleModalClose}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Thank you for your donation!</Text>
              <TouchableOpacity style={styles.modalButton} onPress={handleModalClose}>
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  motivationText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#009D8B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#009D8B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    margin:14
  },
});

export default DonationScreen
