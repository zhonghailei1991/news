const util = require('../../../../utils/util.js');
var WxParse = require('../../../../vendor/wxParse/wxParse.js');

//获取应用实例
var app = getApp()

Page({
    data: {
        motto: 'Hello World',
        shopDetail: {}
    },
    onLoad: function () {
        var that = this;
        // var shopDetail = wx.getStorageSync('shopDetail');
        // // 店铺详情
        // that.setData({
        //     shopDetail: shopDetail
        // });
        // WxParse.wxParse('article', 'html', shopDetail.content, that, 5);
    },
    onShow: function() {
        var that = this;
        util.AJAX("/page/detail?id=1", function(res) {
            var shopDetail = res.data.data;
            console.log(shopDetail,'***shopDetail')
            // 重新写入数据
            wx.setStorageSync('shopDetail', shopDetail);
            app.globalData.shopDetail = shopDetail;
            that.setData({
                shopDetail: shopDetail,
            });

            //位置坐标
            that.setData({
                latitude: shopDetail.point_lat,
                longitude: shopDetail.point_lng,
                markers: [{
                    latitude: shopDetail.point_lat,
                    longitude: shopDetail.point_lng,
                    title: shopDetail.company_name
                }],
            });
            WxParse.wxParse('article', 'html', shopDetail.content, that, 5);
            // 动态修改页面标题
            // wx.setNavigationBarTitle({
            //     title: shopDetail.company_name
            // })
        });
    }
})