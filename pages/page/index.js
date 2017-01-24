const App = getApp();
Page({
navigateTo :function(e){
	App.navigateTo(e.currentTarget.dataset.url)
}
})