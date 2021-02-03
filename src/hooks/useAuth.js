import * as auth from '../utils/auth.js';

export const useAuth = () => {
  
  const handleRegister = async (email, password) => {
    try {
      const res = await auth.register(email, password);

      if (res.data) {
        setUserData({
          email: '',
          password: '',
        });
      } if (res.error) {
        console.log({ message: `${res.error}` });
      }
    } catch (err) {
      console.log({ message: 'Что-то пошло не так' }, err);
    }
  };


}
