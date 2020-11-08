import apiRequest from 'config/axios';

export const getDummy = () => {
  return apiRequest.get('todos');
};
