import {createContext, useContext, useState, useEffect} from 'react';
import * as auth from '../utils/auth.js';
import { token } from '../utils/Token.js';
const CurrentUserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    loading: false,
    user: null,
  })

  const getUser = async (inputToken) => {
    setState(state => ({...state, loading: true}));
    let fetchedUser = null;
    try {
      fetchedUser = await auth.checkToken(inputToken);
      console.log(fetchedUser)
    } catch (err) {
      console.log(err)
    } finally {
      setState({
        user: null,
        loading: false,
      })
    }
  }

  useEffect(() => {
    getUser(token.get('news'));
  }, []);

  return(
    <CurrentUserContext.Provider value={{state, getUser}}>
      {children}
    </CurrentUserContext.Provider>
  )
}

export const useUser = () => {
  const user = useContext(CurrentUserContext);

  if(user === undefined) throw new Error('You need UserProvider');

  return user;
}
