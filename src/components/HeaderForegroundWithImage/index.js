import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HeaderForegroundWithImage = ({
  url,
  title,
  description,
  noOfCategories,
  height,
}) => {
  const colorProgression = ['#0007', '#0002', '#0004', '#0009', '#000'];
  return (
    <ImageBackground source={{uri: url}} style={styles.container}>
      <LinearGradient colors={colorProgression} style={styles.linearGradient}>
        <View style={styles.content}>
          <View style={styles.headingStyle}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.categoriesText}>
              {noOfCategories} Categories
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <View>
              <Text style={styles.descriptionText}>{description}</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 10,
    height: '100%',
    justifyContent: 'space-between',
  },
  overviewTextContainer: {
    paddingBottom: 10,
  },
  descriptionContainer: {
    padding: 10,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  container: {
    width: Dimensions.get('screen').width,
    flex: 1,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90,
  },
  linearGradient: {
    flex: 1,
    paddingBottom: 10,
    borderRadius: 5,
  },
  headingStyle: {
    padding: 10,
    paddingBottom: 15,
    alignSelf: 'flex-start',
  },
  titleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  categoriesText: {
    color: '#FFF',
    fontSize: 16,
  },
  overviewText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FFF',
  },
  descriptionText: {
    color: 'white',
    fontSize: 15,
  },
});

export default HeaderForegroundWithImage;
