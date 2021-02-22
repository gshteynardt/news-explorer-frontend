export const ApiKey = `8fa29a8750fd4c7a82906a72eb94a49b`;
export const NewsApiUrl = `https://nomoreparties.co/news/v2/`;
export const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://api.shtey.students.nomoredomains.monster'
  : 'http://localhost:3000';

export default {
  NewsApiUrl,
  ApiKey,
  BASE_URL,
}
