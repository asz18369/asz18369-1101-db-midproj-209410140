## 第三部份學習
##### 關於路由(routes)的部分，我看了很久，但還是沒辦法很清楚，希望教授有機會可以從頭慢慢講，什麼連到什麼以及為什麼會這樣連。
```
const Category_40 = require('../../models/crown_40/Category_40');
const Shop_40 = require('../../models/crown_40/Shop_40')

exports.getCategories = async (req, res) => {
  try {
    return await Category_40.fetchAll();
  } catch (err) {
    console.log('getCategories', err);
  }
};

exports.getShop = async(req,res)=> {
  try {
    return await Shop_40.fetchAll();
  } catch (err) {
    console.log('getShop', err);
  }
}

exports.getProductsByCategory = async (category) => {
  console.log('service',category);
  try {
  const cid = await Category_40.fetchCatIdByName(category);
  const results = await Shop_40.fetchByCatId(cid);
  //console.log('service getProductsByCategory',JSON.stringify(results));
  return results;
  } catch(err){
    console.log(err);
  }
}
```
##### 這種我就不是很理解
###參考資料
[Node.js](https://www.youtube.com/watch?v=zW_tZR0Ir3Q)