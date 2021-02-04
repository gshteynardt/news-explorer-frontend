const NewsApiUrl = `https://newsapi.org/v2/`;
const apiKey = `8fa29a8750fd4c7a82906a72eb94a49b`;

const config = {
  baseURL: NewsApiUrl,
  endpoint: 'everything',
  sources: '',
  sortBy: 'popularity',
  pageSize: 100,
  intervalInDays: 7,
  country: 'ru',
}

class NewsApi {
  constructor(config) {
    const { baseURL, endpoint, sortBy, intervalInDays } = config;
    this._baseUrl = baseURL;
    this._endpoint = endpoint;
    this._sortBy = sortBy;
    this._interval = intervalInDays;
    this._today = new Date();
    this._convertedToday = this._getTodayDate();
    this._convertedStartDay = this._getStartDate();
  }

  /* Получить текущий день**/
  _getTodayDate(){
    const date = this._today
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }

  _getStartDate(){
    const date = this._today;
    const startDay = new Date(date - this._interval * 24 * 60 * 60 * 1000).toISOString().substr(0, 10);
    return startDay;
  }

  getArticles(keyword){
    return fetch(`${this._baseUrl}${this._endpoint}?q=${keyword}&from=${this._convertedStartDay}&to=${this._convertedToday}&sort=${this._sortBy}&apiKey=${apiKey}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
  }
}

export const newsApi = new NewsApi(config);
