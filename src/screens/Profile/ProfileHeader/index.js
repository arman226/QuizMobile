import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {NAVY_BLUE} from 'styles/colors.styles';
import UserAvatar from 'components/UserAvatar';
import profileSample from '../profileSample';

const ProfileHeader = ({onBack}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={onBack}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.profileText}>Profile</Text>
      <View style={styles.avatarContainer}>
        <UserAvatar url={profileSample.url} style={styles.avatar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    width: Dimensions.get('screen').width * 0.65,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  avatar: {
    height: 35,
    width: 35,
    justifyContent: 'flex-end',
    padding: 10,
  },
  profileText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  iconContainer: {
    marginRight: 15,
  },
  container: {
    padding: 25,
    flexDirection: 'row',
    width: Dimensions.get('screen').width,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default ProfileHeader;
