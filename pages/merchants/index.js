//index.js
const app = getApp()

Page({
  data: {
    list: [{
      title: '商户订单',
      desc: '',
      slot: false,
      src: 'https://s10.mogucdn.com/mlcdn/c45406/170603_7ida8bdc21j18b91aa2ii3lk38b9i_38x38.png'
    },{
      title: '商户车辆',
      desc: '',
      slot: false,
      src: 'https://s10.mogucdn.com/mlcdn/c45406/171226_2kall2je2079dh6ddkgc31d27cce2_38x38.png'
    }, {
      title: '商户消息',
      desc: '您有最新的消息未读',
      slot: false,
      src: 'https://s10.mogucdn.com/mlcdn/c45406/170603_0ea73id6h6926k281cdhia0dg5gdg_38x38.png'
    }]
  }
})
