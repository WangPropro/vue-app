<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view>
				<video class="myVideo" id="myVideo" show-fullscreen-btn enable-play-gesture="true" page-gesture="true"
					show-loading
					src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
					@error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
			</view>
			<!-- #ifndef MP-ALIPAY -->
			<view class="uni-list uni-common-mt">
				<view class="uni-list-cell">
					<view>
						<view class="uni-label">弹幕篇</view>
					</view>
					<view class="uni-list-cell-db">
						<input v-model="danmuValue" class="uni-input" type="text" placeholder="此入弹幕篇" />
					</view>
				</view>
			</view>
			<view class="uni-btn-v">
				<button @click="sendDanmu" size="mini" type="primary" class="page-body-button">发弹幕</button>
			</view>
			<!-- #endif -->
			<video class="myVideo" id="myVideo" show-fullscreen-btn enable-play-gesture="true" page-gesture="true"
				show-loading src="https://www.bilibili.com/video/BV1Pf4y1o7x6?t=1.8" @error="videoErrorCallback"
				:danmu-list="danmuList" enable-danmu danmu-btn controls></video>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '',
				danmuList: [{
						text: '第 1s 出现的弹幕',
						color: '#ff0000',
						time: 1
					},
					{
						text: '第 3s 出现的弹幕',
						color: '#ff00ff',
						time: 3
					}
				],
				danmuValue: ''
			}
		},
		onReady: function(res) {
			// #ifndef MP-ALIPAY
			this.videoContext = uni.createVideoContext('myVideo')
			// #endif
		},
		methods: {
			sendDanmu: function() {
				this.videoContext.sendDanmu({
					text: this.danmuValue,
					color: this.getRandomColor()
				});
				this.danmuValue = '';
			},
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			getRandomColor: function() {
				const rgb = []
				for (let i = 0; i < 3; ++i) {
					let color = Math.floor(Math.random() * 256).toString(16)
					color = color.length == 1 ? '0' + color : color
					rgb.push(color)
				}
				return '#' + rgb.join('')
			}
		}
	}
</script>

<style lang="scss">
	.myVideo {
		width: 100%;
		height: 380rpx;
		padding: 15rpx 5rpx 0 0;
	}

	.uni-btn-v {
		text-align: left;
	}
</style>
