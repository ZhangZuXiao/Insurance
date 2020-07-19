//index.js
const app = getApp()

Page({
  data: {
    index: null,
    company: '',
    array: ['E代驾石家庄总公司', 'E代驾邯郸总公司', 'E代驾沧州总公司', 'E代驾邢台总公司'],
    list: [{
      title: '保养方案',
      desc: '',
      slot: false,
      src: ''
    }, {
      title: '我的订单',
      desc: '',
      slot: false,
      src: ''
    }, {
      title: '我的红包',
      desc: '',
      slot: false,
      src: ''
    }, {
      title: '激活红包',
      desc: '',
      slot: false,
      src: ''
    }]
  },
  showSelect: function(e) {
    // c
  },
  bindPickerChange: function (e) {
    this.data.index = e.detail.value
    this.setData({company: this.data.array[this.data.index]})
  }
})
