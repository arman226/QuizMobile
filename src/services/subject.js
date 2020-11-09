import apiRequest from 'config/axios';
import {get} from 'config/fetchBlob';

export const getAllSubjects = () => {
  return apiRequest.get('Subject/GetAllSubjects');
};

export const fetchSubjects = () => {
  return get('Subject/GetAllSubjects');
};
