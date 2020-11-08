import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import profileSample from '../profileSample';
import UserAvatar from 'components/UserAvatar';
import {NEON_BLUE, NAVY_BLUE} from 'styles/colors.styles';

const BasicInfoSection = ({onBack}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity>
          <UserAvatar
            url={profileSample.url}
            style={{borderRadius: 5, width: 70, height: 70}}
          />
        </TouchableOpacity>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{profileSample.name}</Text>
          <View style={styles.pointsContainer}>
            <Text style={styles.pointsText}>{profileSample.points} points</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 50,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: Dimensions.get('screen').height * 0.15,
  },
  nameContainer: {
    paddingHorizontal: 25,
    alignItems: 'flex-start',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
  pointsContainer: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 40,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    // elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointsText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#000',
  },
});

export default BasicInfoSection;
