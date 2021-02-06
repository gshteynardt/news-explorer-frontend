export const transformArticle = (article, keyword) => ({
  keyword: keyword.keyword,
  title: article.title,
  text: article.description,
  date: article.publishedAt,
  source: article.source.name,
  link: article.url,
  image: article.urlToImage,
})
