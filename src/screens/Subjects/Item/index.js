import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {NAVY_BLUE} from 'styles/colors.styles';
import {useNavigation} from '@react-navigation/native';
import * as screens from 'constants/screens';
import LinearGradient from 'react-native-linear-gradient';
import Title from './Title';

const Item = ({item, index}) => {
  const navigation = useNavigation();
  const {subjectName, description, icon, instructor, categories} = item;
  const colorProgression = ['#0001', '#0002', '#0003', '#0007', '#000'];
  const navigateToCategories = () => {
    if (index === 0) {
      navigation.navigate(screens.CATEGORIES, {
        categories,
        subjectName,
        icon,
        description,
      });
    }
  };

  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={navigateToCategories}
      activeOpacity={index === 1 ? 1 : 0.6}>
      <ImageBackground
        blurRadius={0}
        source={{uri: icon}}
        style={styles.imageBackground}>
        <LinearGradient colors={colorProgression} style={styles.linearGradient}>
          <Title
            subjectName={subjectName}
            numberOfCategories={categories.length}
          />
        </LinearGradient>
      </ImageBackground>

      <View style={styles.overlayingComponentContainer}>
        <View style={styles.numberOfCategoriesContainer}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
            {categories.length}{' '}
            {categories.length > 1 ? 'Categories' : 'Category'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    borderRadius: 5,
  },
  numberOfCategoriesContainer: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
    backgroundColor: 'red',
    width: 100,
    padding: 10,
    paddingHorizontal: 13,
    position: 'absolute',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  overlayingComponentContainer: {
    alignSelf: 'flex-end',
    marginBottom: 90,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width * 0.2,
    padding: 50,
    marginTop: -35,
  },
  imageBackground: {
    width: Dimensions.get('screen').width * 0.5,
    height: Dimensions.get('screen').height * 0.5,
    marginBottom: 7,
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  subjectDescriptionContainer: {
    padding: 15,
  },
  descriptionText: {
    color: '#000',
    fontSize: 15,
  },
  instructorContainer: {
    padding: 15,
    alignItems: 'flex-end',
  },
  instructorText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },

  mainContainer: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    margin: 7,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
    borderRadius: 10,
    width: Dimensions.get('screen').width * 0.5,
    height: Dimensions.get('screen').height * 0.5,
  },
  buttonsContainer: {
    padding: 10,
    backgroundColor: NAVY_BLUE,
  },
});

export default Item;
