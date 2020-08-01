// pages/home/pages/position/index.js
const util = require('../../../../utils/util.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        covers: [],
        latitude: 0,
        longitude: 0,
        scale: 4,
        controls: [],
        mapCtx: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.initMap()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#ffffff'
        })
        this.mapCtx = wx.createMapContext('Map')
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        var that = this
        let x = 180;
        wx.getSystemInfo({
            success: (res) => {
                console.log(res)
                if (res.model.indexOf("iPhone X") > -1) {
                    x = 230
                }
                that.setData({
                    controls: [{
                        id: 1,
                        iconPath: '../../../../images/current-position-new.png',
                        position: {
                            left: 10,
                            top: res.screenHeight - x,
                            width: 50,
                            height: 50
                        },
                        clickable: true 
                    }]
                })
            }
        })
    },

    initMap: function() {
        var that = this;
        wx.getLocation({
            type: 'gcj02',
            geocode:true,  
            success: map => {
                console.log(map)
                that.setData({
                    latitude:map.latitude,
                    longitude:map.longitude
                })
                var obj = [{"id":1,"name":"实惠百货商店","longitude":108.98703,"latitude":34.238312},{"id":2,"name":"骏怡连锁酒店","longitude":116.65714,"latitude":39.90998},{"id":3,"name":"平台测试商户","longitude":117.76016,"latitude":41.93846},{"id":4,"name":"西安市高陵区王伟肉夹馍店","longitude":108.988098,"latitude":34.449902},{"id":5,"name":"捌零玖零台球俱乐部","longitude":107.158028,"latitude":34.415699},{"id":6,"name":"军火锅","longitude":118.94635248138,"latitude":42.270097285788},{"id":7,"name":"天涯阁","longitude":117.765259,"latitude":41.922119},{"id":8,"name":"美食山","longitude":117.730637,"latitude":41.322971},{"id":9,"name":"海鲜烧烤大排档","longitude":116.907104,"latitude":39.934948},{"id":11,"name":"双子座蛋糕店","longitude":109.037827,"latitude":34.250259},{"id":12,"name":"威海石岛海鲜","longitude":109.00613,"latitude":34.24987},{"id":13,"name":"小Q衣橱","longitude":109.2313,"latitude":34.666019},{"id":14,"name":"小6菜馆","longitude":108.860992,"latitude":34.286861},{"id":15,"name":"非比美容美发","longitude":116.31172,"latitude":39.43507},{"id":16,"name":"陕北横山羊肉土特产","longitude":108.942657,"latitude":34.202049},{"id":17,"name":"绩溪县胡雪岩纪念馆","longitude":118.595047,"latitude":30.071079},{"id":18,"name":"蜀香王府川菜","longitude":109.008172,"latitude":34.231373},{"id":19,"name":"富来利","longitude":118.960564,"latitude":42.28064},{"id":20,"name":"宠物店","longitude":117.76016,"latitude":41.93846},{"id":21,"name":"欣欣艺剪","longitude":117.758293,"latitude":41.963848},{"id":22,"name":"永兴商店","longitude":117.767303,"latitude":41.955582},{"id":23,"name":"俊杰造型形象工作室","longitude":117.73764,"latitude":41.314083},{"id":24,"name":"裕泰合商务酒店","longitude":117.763924,"latitude":41.923458},{"id":25,"name":"云南映象","longitude":102.7035,"latitude":25.03951},{"id":26,"name":"北尚造型","longitude":108.984497,"latitude":34.39156},{"id":27,"name":"鲸饮屋","longitude":108.977058,"latitude":34.317951},{"id":28,"name":"蒙古人家（每餐馆）","longitude":117.243622,"latitude":42.432331},{"id":29,"name":"聚川宴串串香火锅","longitude":108.969681,"latitude":34.23283},{"id":30,"name":"黑科季创艺馆","longitude":118.13875,"latitude":24.48314},{"id":31,"name":"前任的串串店","longitude":108.952332,"latitude":34.293388},{"id":32,"name":"乌拉火锅四府街店","longitude":108.93591,"latitude":34.25475},{"id":33,"name":"老叶家陕北羊肉面","longitude":108.95637,"latitude":34.22582},{"id":34,"name":"郑百味杂粮米线","longitude":108.98801,"latitude":34.22859},{"id":35,"name":"菜鸟果园","longitude":108.871971,"latitude":34.259281},{"id":36,"name":"巴比酷蟹肉煲","longitude":108.871284,"latitude":34.260265},{"id":37,"name":"钢管厂五味缘小君肝串串香","longitude":108.97496,"latitude":34.2551},{"id":38,"name":"今天啤酒屋","longitude":108.92281,"latitude":34.34745},{"id":39,"name":"渝味李记串串香","longitude":108.871117,"latitude":34.222382},{"id":40,"name":"醉蒙羊酸菜铜锅涮羊肉","longitude":108.942413,"latitude":34.350719},{"id":41,"name":"蜀道老火锅","longitude":109.07566,"latitude":34.27436},{"id":42,"name":"如意经络养生店","longitude":108.99094,"latitude":34.2458},{"id":43,"name":"视界网咖","longitude":108.978271,"latitude":34.289158}];
                obj.forEach(function (item) {
                    item['iconPath'] = '../../../../images/s_b04-new.png';
                    item['width'] = 20;
                    item['height'] = 25;
                    item['callout'] = {
                      content: item.name,
                      borderRadius: 8,
                      padding: 5 };
    
                  });
                  that.setData({
                    covers: obj
                  })
                // that.$request({
                //     url: '/shop/getBusinessToMap',
                //     data: {
                //         latitude: map.latitude,
                //         longitude: map.longitude
                //     },
                //     success: res => {
                //         var list = res.data.data
                //         list.forEach(item => {
                //             item['iconPath'] = '../../../../images/s_b04-new.png'
                //             item['width'] = 20
                //             item['height'] = 25
                //             item['callout'] = {
                //                 content: item.name,
                //                 borderRadius: 8,
                //                 padding: 5
                //             }
                //         })
                //         that.covers = list
                //         that.scale = 12
                //         wx.hideLoading()
                //     },
                //     fail: () => {

                //     },
                //     complete: () => {}
                // })
            },
            fail: () => {
                var storageLL = wx.getStorageSync('coordinate')
                that.setData({
                    latitude: storageLL.latitude,
                    longitude: storageLL.longitude
                })
                // that.$request({
                //     url: '/shop/getBusinessToMap',
                //     data: {
                //         latitude: storageLL.latitude,
                //         longitude: storageLL.longitude
                //     },
                //     success: res => {
                //         var list = res.data.data
                //         list.forEach(item => {
                //             item['iconPath'] = '../../../../images/s_b04-new.png'
                //             item['width'] = 20
                //             item['height'] = 25
                //             item['callout'] = {
                //                 content: item.name,
                //                 borderRadius: 8,
                //                 padding: 5
                //             }
                //         })
                //         that.covers = list
                //         wx.hideLoading()
                //     },
                //     fail: () => {},
                //     complete: () => {}
                // })
            },
            complete: () => {}
        });
    },
    maskerTap: function(e) {
        // 点击商户id
        var markerId = e.markerId
        wx.openLocation({
            latitude: parseFloat(34.238312),
            longitude: parseFloat(108.98703),
            name: "实惠百货商店",
            address: "陕西省西安市雁塔区太白南路地铁口A口",
            scale: 18
        })
        // debugger
        // this.$request({
        //     url: '/shop/getBusinessDetail',
        //     data: {
        //         business_id: markerId
        //     },
        //     success: res => {
        //         if (res.data.status == 1) {
        //             wx.openLocation({
        //                 latitude: parseFloat(res.data.data.latitude),
        //                 longitude: parseFloat(res.data.data.longitude),
        //                 name: res.data.data.name,
        //                 address: res.data.data.address,
        //                 scale: 18
        //             })
        //             wx.hideLoading()
        //         }
        //     },
        //     fail: () => {},
        //     complete: () => {}
        // });
    },
    controltap: function(e) {
        this.mapCtx.moveToLocation();
    }
})