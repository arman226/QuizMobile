import {all, fork} from 'redux-saga/effects';
import fetchItem from './fetchItem';

export default function* main() {
  yield all([fork(fetchItem)]);
}
