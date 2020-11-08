import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Animated, StatusBar} from 'react-native';
import DefaultHeader from './DefaultHeader';
import {useSafeArea} from 'react-native-safe-area-context';
import {NAVY_BLUE} from '../../styles/colors.styles';

const ParallaxScrollAnimation = ({
  children = () => <View />,
  renderBanner = () => <View />,
  renderHeader = () => <DefaultHeader />,
  headerHeight = 70,
  bannerHeight = 360,
  contentColor = '#FFF',
  foreground = '#FFF1',
}) => {
  const safeArea = useSafeArea();
  const scrollA = useRef(new Animated.Value(0)).current;
  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollA}}}],
    {useNativeDriver: true},
  );
  const isFloating = !!scrollA;
  const [isTransparent, setIsTransparent] = useState(isFloating);
  useEffect(() => {
    if (!scrollA) {
      return;
    }
    const listener = scrollA.addListener((prop) => {
      const {value} = prop;
      const topBarOffSet = bannerHeight - headerHeight - safeArea.top;
      isTransparent != value < topBarOffSet && setIsTransparent(!isTransparent);
    });

    return () => scrollA.removeListener(listener);
  });

  const barStyle = isTransparent ? 'light-content' : 'dark-content';
  return (
    <View>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={onScroll}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView(foreground)}>
        <Animated.View style={styles.banner(safeArea, bannerHeight, scrollA)}>
          {renderBanner()}
        </Animated.View>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.childrenContainer(
            contentColor,
            scrollA,
            bannerHeight,
            headerHeight,
          )}>
          {children}
        </Animated.ScrollView>
      </Animated.ScrollView>

      <Animated.View
        style={styles.headerStyle(
          scrollA,
          bannerHeight,
          safeArea,
          headerHeight,
          isTransparent,
        )}>
        <StatusBar
          barStyle={barStyle}
          backgroundColor="transparent"
          translucent={true}
        />
        {renderHeader()}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: (foreground) => ({
    backgroundColor: foreground,
  }),
  headerStyle: (
    scrollA,
    bannerHeight,
    safeArea,
    headerHeight,
    isTransparent,
  ) => ({
    position: 'absolute',
    height: headerHeight,
    paddingTop: safeArea.top,
    backgroundColor: isTransparent ? '#0001' : '#FFF',
    shadowOffset: {y: 0},
    shadowOpacity: isTransparent ? 0 : 0.5,
    zIndex: 100,
    opacity: scrollA.interpolate({
      inputRange: [-bannerHeight, 0, bannerHeight * 0.75, bannerHeight + 2],
      outputRange: [0, 0.0, 1, 1],
    }),
  }),
  banner: (safeArea, bannerHeight, scrollA) => ({
    marginTop: safeArea.top,
    height: bannerHeight,
    width: Dimensions.get('screen').width,
    opacity: scrollA.interpolate({
      inputRange: [-bannerHeight, 0, bannerHeight * 0.75, bannerHeight + 2],
      outputRange: [1, 1, 0.3, 0],
    }),
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-bannerHeight, 0, bannerHeight, bannerHeight + 1],
          outputRange: [
            -bannerHeight / 2,
            0,
            bannerHeight * 0.5,
            bannerHeight * 0.7,
          ],
        }),
      },
    ],
  }),
  childrenContainer: (contentColor, scrollA, bannerHeight, headerHeight) => ({
    backgroundColor: contentColor,
    paddingBottom: 10,
    // transform: [
    //   {
    //     translateY: scrollA.interpolate({
    //       inputRange: [0, bannerHeight - 3, bannerHeight - 2, bannerHeight],
    //       outputRange: [
    //         0,
    //         headerHeight - 5,
    //         headerHeight - 4,
    //         headerHeight - 1,
    //       ],
    //     }),
    //   },
    // ],
  }),
});

export default ParallaxScrollAnimation;
