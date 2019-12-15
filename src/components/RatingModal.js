import React, { useState } from 'react';
import {Modal, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import {AirbnbRating} from "react-native-ratings";
import theme from '../theme';

export const RatingModal = ({ isVisible, setVisible }) => {
  const [rating, setRating] = useState();

  return (
    <Modal visible={isVisible} animationType="fade" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modelContentContainer}>
          <Text>{ rating }</Text>
          <AirbnbRating
            style={{ height: 10 }}
            reviews={[]}
            onFinishRating={setRating}
            count={10}
            defaultRating={0}
            size={20}
          />
          <TouchableNativeFeedback
            onPress={() => setVisible(false)}
            background={TouchableNativeFeedback.SelectableBackground()}
          >
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Button</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  modelContentContainer: {
    flex: 1,
    marginHorizontal: '10%',
    backgroundColor: theme.sectionBackground,
    borderRadius: 4,
    flexDirection: 'column',
    alignItems: 'center'
  },
  modalContainer: {
    flex: 1,
    paddingVertical: '30%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  buttonText: {
    padding: 10,
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: theme.screenBackground,
    width: 150,
    borderRadius: 4,
    marginTop: 30,
  }
});

export default RatingModal;
