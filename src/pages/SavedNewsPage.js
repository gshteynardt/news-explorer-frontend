import React from 'react';
import { Header } from "../components/Header/Header";
import { SavedNews } from "../components/SavedNews/SavedNews";
import { Navbar } from "../components/Navbar/Navbar";
import { useUser } from "../hooks/useUser";
import { useArticles } from "../hooks/useArticles";
import { countKeywords, getKeywordPhrase, declination, keywordsMap, getKeywords } from "../utils/processorArticles";

export const SavedNewsPage = ({logOut}) => {
  const { user } = useUser();
  const name = user?.name;

  const { savedArticles } = useArticles();
  const keywords = getKeywords(savedArticles);
  const uniqKeywordsArr = countKeywords(keywords);
  const mapKeywords = keywordsMap(uniqKeywordsArr);
  const lengthArticles = savedArticles.length;
  const wordSaved = declination(lengthArticles);
  const keywordsObj = getKeywordPhrase(mapKeywords);

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
      <main className={'saved__wrapper'}>
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
                    `${keywordsObj.num}-м другим`
                  }
                </span>
                </>
              )
            }

          </p>
        </div>
        <SavedNews savedArticles={savedArticles}/>
      </main>
    </>
  );
}
