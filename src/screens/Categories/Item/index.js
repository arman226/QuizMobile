import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {numberOfItemsDisplayText} from '../../../utils/common';
import {useNavigation} from '@react-navigation/native';
import * as screens from '../../../constants/screens';
import LinearGradient from 'react-native-linear-gradient';
import {NAVY_BLUE} from '../../../styles/colors.styles';

const Item = ({item}) => {
  const navigation = useNavigation();
  const {category, categoryId, description} = item;
  const startGamePlay = () => {
    navigation.navigate(screens.GAME_PLAY, {categoryId});
  };
  const colorProgression = ['#FFF1', '#FFF8', '#FFF'];
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={startGamePlay}
      activeOpacity={0.9}>
      <View style={styles.bottomDiv}>
        <View style={{padding: 5}}>
          <Text style={{fontSize: 16, color: '#FFF', fontWeight: 'bold'}}>
            {category}
          </Text>
          {/* <Text style={{color: '#FFF'}}>
            {numberOfItemsDisplayText(
              questions.length,
              'question',
              'questions',
            )}
          </Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2,
    marginTop: 10,
  },
  bottomDiv: {
    marginHorizontal: 3,
    padding: 5,
    backgroundColor: NAVY_BLUE,
  },
  imageStyle: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    resizeMode: 'cover',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  categoryText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  linearGradient: {
    flex: 1,
    paddingBottom: 10,
    borderRadius: 5,
    justifyContent: 'flex-end',
  },
  itemContainer: {
    flex: 1,
    height: Dimensions.get('screen').height * 0.15,
    width: Dimensions.get('screen').width * 0.48,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2,
    marginHorizontal: 3,
  },
});

export default Item;
