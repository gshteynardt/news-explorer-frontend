import './Main.css';
import { Header } from "../Header/Header";
import { SearchForm } from "../SearchForm/SearchForm";

export const Main = ({ loggedIn }) => {
  return (
    <>
      <section className='page__search'>
        <Header loggedIn={loggedIn}/>
        <SearchForm/>
      </section>

      <main className='page__content'>
       {/*<NewsCardList/>*/}
       {/*<About/>*/}
      </main>
      {/*<Footer/>*/}
    </>
  );
}
