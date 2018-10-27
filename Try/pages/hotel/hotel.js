// pages/hotel/hotel.js
Page({

  /*地图*/
  map: function() {
    wx.openLocation({
			latitude: 37.4226,
			longitude: 112.5855,
      scale: 18,
			name: '农大7号宿舍楼',
			adress:'219',
    })
  },
  /*拨号*/
  makePhone: function() {
    wx.makePhoneCall({
      phoneNumber: '6289110'
    });
  }
})