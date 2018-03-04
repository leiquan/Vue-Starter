'use strict';

let mockjs = require('mockjs');

var Random = mockjs.Random

module.exports = {

  // 车辆详情接口
  'GET /v2/mis/car/getCarDetail' (req, res) {

    let data = mockjs.mock({
      errno: 0,
      errmsg: 'success',
      "data": {
        "id": "1234568",
        "plate_no": "京Q517T1",
        "color": "黑",
        "brand_dict_code": "92",//对应车型id
        "brand_name": "日产",
        "company_id": "92",
        "company_name": "中远大昌汽车租赁公司",
        "_modify_time": "2017-03-03 15:43:06",
        "level": "92",
        "level_name": "小型",
        "area_id": "2",
        "city_name": "beijing",//城市名称
        "car_inspection_img": "static/upload/xxx.png",//车检证
        "car_inspection_img_url": "http://home.didichuxing.com/didifile/GiftImg/A3E1D7BB4DB8D6584050F218D2AF3878.jpg",//车检证链接
        "car_out_img": "static/upload/xxx.png",//车辆照片
        "car_out_img_url": "http://home.didichuxing.com/didifile/GiftImg/A3E1D7BB4DB8D6584050F218D2AF3878.jpg"//车辆照片链接
      }
    });

    setTimeout(() => {
      res.json(data);
    }, 500);
  },

  


};