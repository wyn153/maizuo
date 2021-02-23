// 电影列表 pageNum=数字（在api.js中）

// 此 数据跟film.vue中数据相同。。从https://m.maizuo.com/中获取。network -> XHR ->  Request URL:

// 正在热映
export const nowPlayingListUri =
    "/gateway?cityId=110100&pageSize=10&type=1&k=5155219&pageNum=";
// 即将上映
export const comingSoonListUri =
    "gateway?cityId=110100&pageSize=10&type=2&k=7957247&pageNum=";
// 后续需要可以再添加...

// 电影详情
export const moiveDetailUrl = "gateway?k=9357632&filmId=";

// 城市列表
export const cityListUrl = "gateway?k=8737254";

// 影院
export const cinemaListUrl = "gateway?ticketFlag=1&k=8975302&cityId=";

//login 登陆逻辑的使用
export const loginUrl = "http://127.0.0.1:3009/api/v1/login";
