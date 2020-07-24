//index.js
const app = getApp()

Page({
  data: {
    notice: '蘑菇街平台将在1月22日0点－9点进行系统升级，升级期间将暂停服务，敬请谅解。',
    list: [{
      title: '保养方案',
      desc: '',
      slot: false,
      url: '/pages/noData/index',
      src: 'https://s10.mogucdn.com/mlcdn/c45406/170603_7ida8bdc21j18b91aa2ii3lk38b9i_38x38.png'
    },{
      title: '我的订单',
      desc: '',
      slot: false,
      url: '/pages/noData/index',
      src: 'https://s10.mogucdn.com/mlcdn/c45406/171226_2kall2je2079dh6ddkgc31d27cce2_38x38.png'
    },{
      title: '我的红包',
      desc: '',
      slot: false,
      url: '/pages/noData/index',
      src: 'https://s10.mogucdn.com/mlcdn/c45406/170603_0ea73id6h6926k281cdhia0dg5gdg_38x38.png'
    },{
      title: '激活红包',
      desc: '',
      slot: false,
      url: '/pages/noData/index',
      src: 'https://s10.mogucdn.com/mlcdn/c45406/170603_0ea73id6h6926k281cdhia0dg5gdg_38x38.png'
    }]
  },
  checkItem: function (e) {
    if (e.currentTarget.dataset.url) {
      wx.navigateTo({
        url: e.currentTarget.dataset.url
      })
    }
  }
})
