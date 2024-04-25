import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'article/addArticle';

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    payload: article
  }
}

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE: {
      const newArticle = action.payload;
      const newState = { ...state, entries: [...state.entries]};
      newState.entries.push(newArticle);
      return newState
    }
      //* return {...state, entries: [...state.entries, newArticle]} //alt solution
    default:
      return state;
  }
};

export default articleReducer;
