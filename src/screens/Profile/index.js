import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import BasicInfoSection from './BasicInfoSection';
import ProfileMenu from './ProfileMenu';
import ProfileHeader from './ProfileHeader';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {NEON_BLUE, NAVY_BLUE} from 'styles/colors.styles';
import ParallaxScrollAnimation from 'components/ParallaxScrollAnimation';
const HEADER_HEIGHT = 70;
const Profile = ({navigation}) => {
  const onBackPressed = () => {
    navigation.goBack();
  };
  const renderForeground = () => <BasicInfoSection onBack={onBackPressed} />;
  const renderStickyHeader = () => <ProfileHeader onBack={onBackPressed} />;
  const PARRALAX_HEIGHT = Dimensions.get('screen').height * 0.15;

  return (
    <ParallaxScrollAnimation
      contentColor="#FFF"
      foreground={NAVY_BLUE}
      headerHeight={HEADER_HEIGHT}
      bannerHeight={PARRALAX_HEIGHT}
      renderHeader={renderStickyHeader}
      renderBanner={renderForeground}>
      <View style={styles.menuSection}>
        <ProfileMenu />
      </View>
    </ParallaxScrollAnimation>
  );
};

const styles = StyleSheet.create({
  menuSection: {
    backgroundColor: NAVY_BLUE,
    padding: 20,
    paddingTop: HEADER_HEIGHT,
    height: Dimensions.get('screen').height * 0.95,
  },
  container: {
    flex: 1,
    width: Dimensions.get('screen').width,
    backgroundColor: '#fff',
  },
});
export default Profile;
