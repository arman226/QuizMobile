import React from 'react';
import {StyleSheet, TouchableOpacity, Dimensions, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const Header = ({title, scrollY}) => {
  const navigation = useNavigation();
  const opacity = scrollY.y.interpolate({
    inputRange: [0, 20, 20],
    outputRange: [0, 0.3, 1],
    extrapolate: 'clamp',
  });

  const elevation = scrollY.y.interpolate({
    inputRange: [0, 20, 20],
    outputRange: [0, 0.3, 1],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.container, {elevation}]}>
      {navigation.canGoBack() && (
        <Animated.View style={{opacity}}>
          <TouchableOpacity
            style={[styles.iconContainer, {opacity}]}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-left" size={16} color="#000" />
          </TouchableOpacity>
        </Animated.View>
      )}
      <Animated.Text style={[styles.profileText, {opacity}]}>
        {title}
      </Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  profileText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
    opacity: 0,
    width: Dimensions.get('screen').width * 0.75,
    textAlign: 'center',
  },
  iconContainer: {
    marginRight: 15,
  },
  container: {
    paddingRight: 10,
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    width: Dimensions.get('screen').width,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 0,
    position: 'absolute',
    display: 'flex',
    zIndex: 999,
  },
});

export default Header;
