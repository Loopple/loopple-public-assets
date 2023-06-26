
if (document.querySelector('.table-search')) {
  
  let options = {
  };
  let filterOptions = {
    el:'#table-search',
  };
  
  paginate.init('.table-search tbody',options,filterOptions);
}