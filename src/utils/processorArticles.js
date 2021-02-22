/* склоняем слова **/
const declination = (number) => {
  number = String(number);

  const lastDigit = number.length <= 2 ? +number[number.length - 1] : +number.slice(-2);
  let string = "сохраненных статей"

  if ((lastDigit === 1) && (lastDigit !== 11) && (+number !== 11)) {
    string = "сохраненная статья"
  }

  if (((lastDigit === 2) && (lastDigit !== 12) && (+number !== 12)) ||
    ((lastDigit === 3) && (lastDigit !== 13) && (+number !== 13)) ||
    ((lastDigit === 4) && (lastDigit !== 14) && (+number !== 14))) {
    string = "сохраненные статьи"
  }
  return string;
}

//форматирование даты
const formaterDate = (locale, dateICO) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateICO);
  const dateArray = date.toLocaleString(locale, options).split(' ');
  return `${dateArray[0]} ${dateArray[1]}, ${dateArray[2]}`;
};

/* фильтр статей **/
const filterArticles = inputArr => {
  return inputArr.filter((item, index, arr) => {
    if(index + 1 >= arr.length - 1) return;

    if((item.title !== arr[index + 1].title) && (item.source !== arr[index + 1].source)) return item;
  })
}

/* получаем уникальные keywords из массива статей**/
const getKeywords = arr => arr.map(item => item.keyword).reverse();

/* считем количество повторяющихся keywords**/
const countKeywords = arr => arr.reduce( (total, keyword) => {
  total[keyword] = (total[keyword] || 0) + 1 ;
  return total;
} , {})

//формируем двухмерный массив из пар key value
const keywordsMap = arr =>  Object.entries(arr).sort((a, b) =>  b[1] - a[1]).map(item => item[0]);

/* обработчики keywords для формирования фразы **/
const capitalize = inputArr => inputArr.map(str => str.charAt(0).toUpperCase() + str.slice(1));

const getKeywordPhrase = arr => (arr.length <= 3)
  ? capitalize(arr).join(', ')
  : { words: capitalize(arr.slice(0, 2)).join(', '), num: arr.slice(2).length };

/* трансформируем статью **/
const transformArticle = (article, keyword) => ({
  keyword: keyword.keyword,
  title: article.title,
  text: article.description,
  date: article.publishedAt,
  source: article.source.name,
  link: article.url,
  image: article.urlToImage || `https://i.postimg.cc/fRLcspdk/image-not-found.jpg`,
})

export {
  declination,
  countKeywords,
  getKeywordPhrase,
  filterArticles,
  transformArticle,
  keywordsMap,
  getKeywords,
  formaterDate,
}
