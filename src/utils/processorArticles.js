/* склоняем слова **/
const declination = (number) => {
  number = String(number);
  const lastDigit = +number[number.length - 1];
  let string = "сохраненных статей";

  if ((lastDigit === 1) && (lastDigit !== 11)) {
    string = "сохраненная статья";
  }

  if (((lastDigit === 2) && (lastDigit !== 12)) ||
    ((lastDigit === 3) && (lastDigit !== 13)) ||
    ((lastDigit === 4) && (lastDigit !== 14))) {
    string = "сохраненные статьи";
  }
  return string;
}

/* фильтр статей **/
const filterArticles = inputArr => {
  return inputArr.filter((item, index, arr) => {
    if(index + 1 >= arr.length - 1) return;

    if((item.title !== arr[index + 1].title) && (item.source !== arr[index + 1].source)) return item;
  })
}

/* получаем уникальные keywords **/
const getKeywords = arr => [...new Set(arr.map(item => item.keyword).reverse())];

/* обработчики keywords для формирования фразы **/
const capitalize = inputArr => inputArr.map(str => str.charAt(0).toUpperCase() + str.slice(1));

const getKeywordPhrase = arr => (arr.length <= 2)
  ? capitalize(arr).join(', ')
  : `${capitalize(arr.slice(0, 2)).join(', ')} и ${arr.slice(2).length}-м другим`;


/* трансформируем статью **/
const transformArticle = (article, keyword) => ({
  keyword: keyword.keyword,
  title: article.title,
  text: article.description,
  date: article.publishedAt,
  source: article.source.name,
  link: article.url,
  image: article.urlToImage || `https://klondike-studio.ru/images/wiki/development/error-404-page.jpg`,
})

export {
  declination,
  getKeywords,
  getKeywordPhrase,
  filterArticles,
  transformArticle,
}
