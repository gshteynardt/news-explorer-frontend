export const filterArticles = inputArr => {
  return inputArr.filter((item, index, arr) => {
    if(index + 1 >= arr.length - 1) return;

    if((item.title !== arr[index + 1].title) && (item.source !== arr[index + 1].source)) return item;
  })
}
