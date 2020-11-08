import * as screens from 'constants/screens';
import Home from 'screens/Home';
import Subjects from 'screens/Subjects';
import Categories from 'screens/Categories';
import GamePlay from 'screens/GamePlay';
import Profile from 'screens/Profile';

export const Routes = [
  {
    key: 1,
    screen: screens.HOME,
    component: Subjects,
  },
  {
    key: 2,
    screen: screens.SUBJECTS,
    component: Subjects,
  },
  {
    key: 3,
    screen: screens.CATEGORIES,
    component: Categories,
  },
  {
    key: 4,
    screen: screens.GAME_PLAY,
    component: GamePlay,
  },
  {
    key: 5,
    screen: screens.PROFILE,
    component: Profile,
  },
];
