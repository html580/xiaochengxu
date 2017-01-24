const App = getApp();
Page({
data:{
	tabs0:['选项一','选项二','选项三'],
	activeIndex0:0,
	sliderWidth0:96,
	sliderOffset0:0,
	sliderLeft0: 0
},

onLoad0: function () {
    var that = this;
    wx.getSystemInfo({
        success: function(res) {
       		var sliderWidth =96; 
            that.setData({
                sliderLeft0: (res.windowWidth / that.data.tabs0.length - that.sliderWidth0) / 2
            });
        }
    });
},
tabClick0: function (e) {
    this.setData({
        sliderOffset0: e.currentTarget.offsetLeft,
        activeIndex0: e.currentTarget.id
    });
},
onLoad:function(){
	this.onLoad0();
},
navigateTo :function(e){
	App.navigateTo(e.currentTarget.dataset.url)
}
})