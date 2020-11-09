import {all, fork} from 'redux-saga/effects';
import fetchItem from './fetchItems';

export default function* main() {
  yield all([fork(fetchItem)]);
}
