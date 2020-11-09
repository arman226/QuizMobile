import {get} from 'config/fetchBlob';

export const fetchQuestionsByCategoryId = (categoryId) => {
  return get(`Question/GetQuestionOptionByCategory?categoryId=${categoryId}`);
};
