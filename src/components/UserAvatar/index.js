import React from 'react';
import {Image, StyleSheet} from 'react-native';

const UserAvatar = ({url, style}) => {
  return <Image source={{uri: url}} style={[styles.avatar, style]} />;
};

const styles = StyleSheet.create({
  avatar: {width: 150, height: 150, borderRadius: 100, padding: 10},
});
export default UserAvatar;
