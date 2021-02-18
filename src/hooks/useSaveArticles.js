import {useEffect} from "react";

import {createMap} from "../utils/createMap";

export const useSaveArticles = (articles, isLogin, callback) => {
  useEffect(() => {
    const newArticles = createMap(articles);
    window.onbeforeunload = () => localStorage.setItem('articles', JSON.stringify(newArticles));
  }, [articles]);

  useEffect(() => {
    let articles = JSON.parse(localStorage.getItem('articles'));
    articles = Object.values(articles || [] );
    callback(state => ({
      ...state,
      articles,
    }))
  }, [isLogin]);
}
