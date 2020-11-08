import React from 'react';
import {FlatList, ScrollView, Dimensions} from 'react-native';
import {ProfileMenus} from './menus';
import Item from './Item';

const ProfileMenu = () => {
  const renderMenuItem = ({item}) => <Item item={item} />;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, height: Dimensions.get('screen').height}}>
      {ProfileMenus.map((item) => (
        <Item item={item} />
      ))}
    </ScrollView>
  );
};

export default ProfileMenu;
