import React from 'react';
import { Header } from "../components/Header/Header";
import { SavedNews } from "../components/SavedNews/SavedNews";

export const SavedNewsPage = ({loggedIn, cards }) => {

  return (
    <>
      <Header
        theme={'black'}
        className={`header_theme_white`}
        loggedIn={loggedIn}
      />
      <SavedNews
        cards={cards}
      />
    </>
  );
}
