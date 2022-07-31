import App from './App'
import * as echarts from 'echarts' // 全部导入
// 引入中国地图json文件
import china from './public/china.json'
// 挂载echart
Vue.prototype.$echarts = echarts
// 统计图注册中国地图
echarts.registerMap('china', china)

//添加 uview 插件
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

import 'babel-polyfill'
require("babel-polyfill");
//用于使用webpack构建的项目,加入到webpack配置文件(webpack.config.js)entry项中重新执行构建        
//命令，在低版本的浏览器中就可以正常打开页面了。
module.exports = {
	entry: ["babel-polyfill", "./app/js"]
};

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
