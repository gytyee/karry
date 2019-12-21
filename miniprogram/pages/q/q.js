const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onReady: function () {
    wx.playBackgroundAudio({
      dataUrl: 'http://music.163.com/song/media/outer/url?id=853708.mp3',
      title: 'yayaya',
      coverImgUrl: '',
    })
  },
})