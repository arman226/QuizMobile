import apiRequest from 'config/axios';

export const getAllSubjects = () => {
  return apiRequest.get('Subject/GetAllSubjects');
};
