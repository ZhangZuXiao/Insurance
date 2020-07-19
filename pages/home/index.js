//index.js
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../image/banner3.png',
      '../../image/banner.jpg',
      '../../image/banner2.png'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 500
  },
  toPage: function(e) {
    console.log(e.currentTarget.dataset.url, '++++')
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
