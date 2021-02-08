import { createContext, useContext, useState, useEffect } from 'react';
import { newsApi } from '../utils/NewsApi.js';
import { api } from '../utils/MainApi.js';
import { transformArticle } from "../utils/transformArticle";
import {filterArticles} from "../utils/filterArticles";
import {useUser} from "./useUser";
import {useSaveArticles} from "./useSaveArticles";
const ArticlesContext = createContext();

export const ArticlesProvider = ({children}) => {
  const [state, setState] = useState({
    loading: false,
    articles: [],
    error: null,
    notFound: null,
  });

  const [savedArticles, setSavedArticles] = useState([]);

  const { user } = useUser();
  const isLogin = !!user;

  /* получаем карточки из newsApi **/
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

  console.log(savedArticles)
  /* получаем карточки из BD **/
  const getArticles = async () => {
    try {
        const data = await api.getArticles();
        setSavedArticles(data.reverse());
      } catch (err) {
        console.log(err);
      }
  }

  /* сохраняем в BD **/
  const saveArticle = async article => {
    try {
      const data = await api.saveArticle(article);
      article._id = data._id;
      setSavedArticles(state => ([
        data,
        ...state
      ]));
      } catch (err) {
        console.log(err);
      }
  }

  /* удаляем из BD**/
  const deleteArticle = async article => {
      try {
          const data = await api.deleteArticle(article._id);
          const newArticles = savedArticles.filter(a => a._id !== data._id);
          setSavedArticles(newArticles);
          setState(state => {
            const newArticles = state.articles.map(item => {
              if(item._id === data._id) delete item._id;
              return item;
            })

            return ({
              ...state,
              article: newArticles,
            })
          })
        } catch (err) {
          console.log(err);
        }
  }

  useEffect(() => {
    if(isLogin) getArticles();
  }, [isLogin]);

  useSaveArticles(state.articles, isLogin, setState);

  return(
    <ArticlesContext.Provider value={{...state, savedArticles, searchArticles, saveArticle, deleteArticle, getArticles}}>
      {children}
    </ArticlesContext.Provider>
  )
}

export const useArticles = () => {
  const articles = useContext(ArticlesContext);

  return articles;
}
