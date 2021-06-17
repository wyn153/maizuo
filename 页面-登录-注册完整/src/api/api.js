//实际上引入过来的就是axios
import http from "./http";
import {
  // 是url.js中的数据
  nowPlayingListUri,moiveDetailUrl,comingSoonListUri,cityListUrl,cinemaListUrl,loginUrl
} from "@/config/url";

// 暴露出  nowpalying中引入 
export const nowPlayingListData = (page = 1) => {
  http.defaults.headers.info =''
  // 封装好的数据等待请求
  return http.get(nowPlayingListUri + page);
};

export const comingSoonListData = (pageNum) => {
  http.defaults.headers.info = ''
  return http.get(comingSoonListUri + pageNum);
}

// api.js 和 url.js 是film.vue中的封装。二选一即可

// 封装电影详情
// 电影详情
export const moiveDetail = (filmId)=>{
  // 破解秘钥  ----用别的网站数据，使用
    http.defaults.headers.info ='info'
    return http.get(moiveDetailUrl + filmId)

// moiveDetail=http.get(moiveDetailUrl + filmId)
}

// 影院
export const cinemaListData = (id) => {
  http.defaults.headers.info = 'cinema';
  return http.get(cinemaListUrl + id)
}

// 城市列表  也可以写死，写死更安全，性能更好，写死不需要axios请求，下方也是双层过滤算法，耗性能
export const cityListData = async () => {
  // 秘钥为 city
  http.defaults.headers.info = "city";
  // 获取数据
  let ret = await http.get(cityListUrl);
  let cities = ret.data.data.cities;
  // 设置
  let codeList = []; //'A','B','C'....（完整26个字母）
  let dataList = []; // 城市信息
  let indexList = []; //'A','B','C'....（经过筛选的字母）
  // 此步骤可直接写死
  for(let i = 65;i <= 90;i++){
      // fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。
      // 根据 Unicode 输出‘A-D’
      codeList.push(String.fromCharCode(i))
      // console.log(String.fromCharCode(i))   // A-Z 完整的26个字母
  }
  // element 字母  字母要和全国的城市做对比，不符合的扔掉，符合的返回tempArr。
  codeList.forEach((element) => {
    // substr(下标开始,数值) 方法可在字符串中抽取从 
    // 将每一个字母相对应的内容筛选出来
    // filter 过滤挑选  遍历数组filter返回数组
      let tempArr = cities.filter((item) => element.toLowerCase() == item.pinyin.substr(0,1))
    // console.log(tempArr);
    // 排除空数组 字母对应数值为空的排除
      if(tempArr.length > 0) {
        // 将符合要求的添加到indexList 中
          indexList.push(element)
          dataList.push({
            // 字母
              index: element,
            // 内容
              data: tempArr,
          });
      }
  })
  // 也可以 return [dataList, indexList];  返回结果是相同的 
  // promise 是本地的，不需要引入  跟async await结合使用  带着成功的返回去
  return Promise.resolve([dataList, indexList]);
};

// 登录注册
//登录
export const userLogin = (data) => {
  //loginurl在上面引入了
  return http.post(loginUrl,data)
}