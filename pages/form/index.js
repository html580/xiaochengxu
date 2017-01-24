const App = getApp();
Page({
data:{
	date1: "2017-01-24",
	selectItems2:['选项一','选项二','选项三'],
valueIndex2:0,
	radioItems3:[{"value":"1","label":"选项一","checked":false},{"value":"2","label":"选项二","checked":true},{"value":"3","label":"选项三","checked":false}],
	checkboxItems4:[{"value":"1","label":"选项一","checked":true},{"value":"2","label":"选项二","checked":true},{"value":"3","label":"选项三","checked":false}]
},

bindDateChange:function (e) {
    this.setData({
        date1: e.detail.value
	});
},

selectChange2: function (e) {
   this.setData({
        valueIndex2: e.detail.value
   });
},

radioChange3: function (e) {
    var radioItems3 = this.data.radioItems3;
    for (var i = 0, len = radioItems3.length; i < len; ++i) {
        radioItems3[i].checked = radioItems3[i].value == e.detail.value;
    }
    this.setData({
        radioItems3: radioItems3
    });
},

checkboxChange4: function (e) {
    var checkboxItems4 = this.data.checkboxItems4, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems4.length; i < lenI; ++i) {
        checkboxItems4[i].checked = false;

        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
            if(checkboxItems4[i].value == values[j]){
                checkboxItems4[i].checked = true;
                break;
            }
        }
    }
    this.setData({
        checkboxItems4: checkboxItems4
    });
},
onLoad:function(){
},
navigateTo :function(e){
	App.navigateTo(e.currentTarget.dataset.url)
}
})