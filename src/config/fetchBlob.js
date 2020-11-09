import RNFetchBlob from 'rn-fetch-blob';

const BASE_URL = 'https://192.168.43.246/TriviaApp/api/';

export const get = (endpoint) => {
  return RNFetchBlob.config({
    trusty: true,
  })
    .fetch('GET', `${BASE_URL}${endpoint}`)
    .then((resp) => {
      return resp;
    });
};
