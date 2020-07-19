// components/menu/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toHome: function(e) {
      wx.navigateTo({
        url: `/pages/home/index`
      })
    },
    toUser: function (e) {
      wx.navigateTo({
        url: `/pages/user/index`
      })
    },
    toMerchants: function (e) {
      wx.navigateTo({
        url: `/pages/merchants/index`
      })
    }
  }
})
