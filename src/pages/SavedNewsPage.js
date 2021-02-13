import React from 'react';
import { Header } from "../components/Header/Header";
import { SavedNews } from "../components/SavedNews/SavedNews";
import { Navbar } from "../components/Navbar/Navbar";
import { useUser } from "../hooks/useUser";
import { useArticles } from "../hooks/useArticles";
import { getKeywords, getKeywordPhrase, declination } from "../utils/processorArticles";

export const SavedNewsPage = ({logOut}) => {
  const { user } = useUser();
  const name = user?.name;

  const { savedArticles } = useArticles();

  const uniqKeywordsArr = getKeywords(savedArticles);
  const lengthArticles = savedArticles.length;
  const wordSaved = declination(lengthArticles);
  const keywordsObj = getKeywordPhrase(uniqKeywordsArr);
  console.log(keywordsObj.words)
  return (
    <>
      <Header>
        <Navbar
          className={'navbar_theme_white'}
          theme={'black'}
          bgMenu={'white'}
          logOut={logOut}
        />
      </Header>
      <div className={'saved-news__info wrapper__content'}>
        <h2 className={'saved-news__title'}>Сохранённые статьи</h2>
        <p className={'saved-news__statistics'}>{ name }, у вас { savedArticles.length } { wordSaved }</p>
        <p className={'saved-news__keywords'}>
          По ключевым словам:&nbsp;
          <span className="saved-news__span">{ keywordsObj.words || keywordsObj }</span>
          {
            keywordsObj.num &&
            ( <>
              <span>&nbsp;и&nbsp;</span>
              <span className="saved-news__span">
                {
                  keywordsObj.num === 1
                    ? `${keywordsObj.num}-ой другой`
                    : `${keywordsObj.num}-м другим`
                }
              </span>
              </>
            )
          }

        </p>
      </div>
      <SavedNews savedArticles={savedArticles}/>
    </>
  );
}
