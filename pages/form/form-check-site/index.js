//index.js
const app = getApp()

Page({
  data: {
    longitude:'',
    latitude: '',
    markers:'',
    notice: '您可以在地图上操作查看离您最近的检测点。',
  },
  onLoad: function () {
    var that = this;
    wx.getLocation({
      type: "wgs84",
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        //console.log(res.latitude);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            latitude: res.latitude,
            longitude: res.longitude
          }]
        })
      }
    })
  },
  showSelect: function(e) {
    // c
  }
})
