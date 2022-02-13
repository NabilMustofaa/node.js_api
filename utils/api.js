const fetch = require('node-fetch')
async function getApi(nama){
    const url=`https://api.elsevier.com/content/search/scopus?APIKey=b14485e1c8fc023b21cd0335f3cc7f47&query=${nama}`
    const response = await fetch(url);
    const data = await response.json();
    return Promise.resolve(data['search-results']['entry'])
}
module.exports = {getApi}
    
