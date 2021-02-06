import { createContext, useContext, useState } from 'react';
import { newsApi } from '../utils/NewsApi.js';
import { api } from '../utils/MainApi.js';
import { transformArticle } from "../utils/transformArticle";
import {filterArticles} from "../utils/filterArticles";
const ArticlesContext = createContext();

export const ArticlesProvider = ({children}) => {
  const [state, setState] = useState({
    loading: false,
    articles: null,
    error: null,
    notFound: null,
  });

  const [savedArticles, setSavedArticles] = useState(null);

  const searchArticles = async (keyword) => {
    setState(state => ({...state, loading: true}));
    let fetchedArticles = null;

    try {
      const data = await newsApi.getArticles(keyword);
      fetchedArticles = data.articles.map(item => transformArticle(item, keyword));

      if(data.totalResults === 0) {
        setState(state =>
          ({
            ...state,
            notFound: true,
          })
        );
      }
    } catch (err) {
      setState(state => ({...state, error: err.status}));
    } finally {
      setState(state => ({
        ...state,
        articles: filterArticles(fetchedArticles),
        loading: false,
      }));
    }
  }

  const saveArticle = async (article) => {
    try {
      const data = await api.saveArticle(article);
      article._id = data._id;
      setSavedArticles(data);
      } catch (err) {
        console.log(err);
      } finally {

      }
  }


  return(
    <ArticlesContext.Provider value={{...state, searchArticles, saveArticle}}>
      {children}
    </ArticlesContext.Provider>
  )
}

export const useArticles = () => {
  const articles = useContext(ArticlesContext);

  return articles;
}
