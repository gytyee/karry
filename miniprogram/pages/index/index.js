// miniprogram/pages/index/index.js
Page({
  data: {

  },

  jump: function () {
    wx.navigateTo({
      url: '../set/set',
      success: function (res) {

      },
      fail: function (res) {

      },
      complete: function (res) {

      },
    })
  },

  jumpa: function () {
    wx.navigateTo({
      url: '../information/information',
      success: function (res) {

      },
      fail: function (res) {

      },
      complete: function (res) {

      },
    })
  },  jumpb: function () {
    wx.navigateTo({
      url: '../story/story',
      success: function (res) {

      },
      fail: function (res) {

      },
      complete: function (res) {

      },
    })
  }
})