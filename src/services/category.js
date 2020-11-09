import {get} from 'config/fetchBlob';

export const fetchCategoriesById = (subjectId) => {
  return get(`Category/GetAllCategoriesBySubject?subjectId=${subjectId}`);
};
