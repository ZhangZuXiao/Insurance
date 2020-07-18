//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png'
  },

  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
  }
})
