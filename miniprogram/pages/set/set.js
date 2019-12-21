// miniprogram/pages/set/set.js
var util = require('../../utils/utils.js'); 
const app = getApp()
Page({
  data: {
  inputValue1:' ',
    inputValue2: ' ',
   currenTime:'0'

  },
  input1:function(e){
    var value1=e.detail.value
    this.setData({
      inputValue1:value1
    })
  },
  input2: function (e) {
    var value2 = e.detail.value
    this.setData({
      inputValue2: value2
    })
  },
  jump1: function () {
    wx.navigateTo({
      url: '../index/index',//跳转到index页面
      success: function (res) {

      },
      fail: function (res) {

      },
      complete: function (res) {

      },
    })
  },
  
 
  
  onLoad: function () {

    console.log(1)
    // 调用函数时，传入new Date()参数，返回值是时间
    var currenTime = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      currenTime: currenTime
    });
  
    var va1 = this.data.inputValue1
    var va2 = this.data.inputValue2
    var time = va1 *100 + va2;
    if (this.data.currenTime <time ) {
      console.log(2)
      wx.navigateTo({
        url: '../misic/misic',
        success: function (res) {

        },
        fail: function (res) {

        },
        complete: function (res) {

        },
      })

    }
    },




  })

  
  

