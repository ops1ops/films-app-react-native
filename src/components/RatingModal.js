import React, { useState, useCallback } from 'react';
import { ActivityIndicator, Modal, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/Entypo';
import theme from '../theme';
import { rateCinematograph } from '../api';

export const RatingModal = ({ isVisible, setVisible, filmId, setUserRating, startRating, setTotalInfo }) => {
  const [rating, setRating] = useState(startRating);
  const [isLoading, setLoading] = useState(false);

  const handleRate = useCallback(() => {
    if (rating) {
      rateCinematograph(filmId, rating, setLoading, setVisible, setUserRating, setTotalInfo);
    }
  }, [filmId, rating, setUserRating, setVisible]);

  const handleClose = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <Modal visible={isVisible} animationType="fade" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modelContentContainer}>
          <Text style={styles.rating}>{rating ? rating : <Text style={{ fontSize: 25 }}>No Rate yet</Text>}</Text>
          <AirbnbRating
            reviews={[]}
            onFinishRating={setRating}
            count={10}
            defaultRating={rating}
            size={23}
          />
          <TouchableNativeFeedback onPress={handleRate} background={TouchableNativeFeedback.SelectableBackground()}>
            {
              isLoading ? <ActivityIndicator size="large" color="#fff" style={{ marginTop: 10 }}/>
              : <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Rate</Text>
                </View>
            }
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={handleClose}
            background={TouchableNativeFeedback.SelectableBackground()}
          >
            <View style={styles.crossContainer}>
              <Icon name="cross" color="#fff" size={30} />
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  rating: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
  modelContentContainer: {
    flex: 1,
    marginHorizontal: '10%',
    backgroundColor: theme.sectionBackground,
    borderRadius: 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  crossContainer: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  modalContainer: {
    flex: 1,
    paddingVertical: '30%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  buttonText: {
    padding: 10,
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    width: 120,
    borderRadius: 4,
    marginTop: 30,
  },
});

export default RatingModal;
