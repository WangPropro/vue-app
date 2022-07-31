<template>
	<view>
		<!-- 自定义导航栏 -->
		<u-navbar title="发布区" @leftClick="leftClick" bgColor="#FFE4B5">
		</u-navbar>
		<view class="container">
			<view class="status-bar"></view>
			<view class="header flex-row">
				<view class="left">
					<uni-icons type="closeempty" size="24" color="#777"></uni-icons>
				</view>
			</view>
			<view class="body">
				<textarea v-model="content" placeholder="请输入内容" class="content" />
				<view class="images">
					<!-- 原先采用的模块 -->
					<view class="item" v-for="(item, index) in 9" :key="index">

						<!-- 文件选择上传 -->
						<uni-file-picker v-model="imageValue" :image-styles="imageStyles" disable-preview
							fileMediatype="image" mode="grid" @select="select" @progress="progress" @success="success"
							@fail="fail" />
						<!-- end -->
					</view>
					<!-- 原先的模块
					<view class="item upload-btn flex-row">
						<uni-icons type="plusempty" size="30" color="#ccc" class="add"></uni-icons>
					</view>
					-->
				</view>
				<view class="items">
					<view class="item flex-row">
						<view class="flex-row">
							<uni-icons type="settings" color="#666" size="18"></uni-icons>
							<text class="label" @click="location">获取当前定位</text>
						</view>
						<view class="flex-row" @tap="showModule">
							<text class="value">点击选择</text>
							<uni-icons type="arrowright" color="#999" size="18"></uni-icons>
						</view>
					</view>
				</view>
				<view class="protocol flex-row">
					<uni-icons type="checkbox" size="20" class="checkbox"></uni-icons>
					<view class="text">如果填写，请你知悉并同意：你的联系方式会展现给有兴趣的同学</view>
				</view>
				<!--选择模块-->
				<uni-popup type="middle" ref="module">
					<view class="module">
						<view class="item flex-row" v-for="(item, index) in 10" :key="index">
							<uni-icons type="checkbox" size="20" color="#666"></uni-icons>
							<view class="text">选项名称001</view>
						</view>
					</view>
				</uni-popup>
				<u-button text="提交" @tap="sbmitFeedback" type="primary" shape="circle" padding-left="60rpx"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				imageStyles: {
					width: 125.66,
					height: 125.66,
					border: {
						color: "yellow",
						width: 2,
						style: 'dashed',
						radius: '2rpx'
					}
				},
				imageValue: [],
				content: ''
			}
		},
		onLoad() {
			console.log('app is loading...')
		},
		methods: {
			location() {
				uni.getLocation({
					type: 'wgs84',
					success: function(res) {
						console.log('详细地址' + res.address);
						console.log('当前位置的经度' + res.longitude);
						console.log('当前位置的纬度' + res.latitude);
					}
				})
			},
			// 获取上传状态
			select(e) {
				console.log('选择文件：', e)
			},
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},

			// 上传成功
			success(e) {
				console.log('上传成功')
			},

			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			},
			// 发布区的回退
			leftClick() {
				uni.navigateTo({
					url: '/pages/comment/search'
				})
			},
			// 提交按钮发送请求
			sbmitFeedback: function(e) {
				let that = this;
				if (that.content == '') {
					util.toast('请输入要发布的内容');
					return false;
				}
				//util.request('api',{
				//	content: that.content
				//},'POST').then(function(res){})
				else {
					uni.showModal({
						content: '发布成功！',
						showCancel: false,
						success: function(res) {
							if (res.confirm) {
								uni.switchTab({
									url: '/pages/comment/search'
								})
							}
						}
					})
				}
			}
		},
		showModule() {
			this.$refs.module.open()
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: 100vh;
		overflow: hidden;
	}

	.module {
		width: 80vw;
		height: 600rpx;
		padding: 30rpx;
		overflow-y: auto;
		margin: 25vh auto 0;
		background-color: #FFF;

		.item {
			height: 80rpx;
			justify-content: flex-start;

			.text {
				margin-left: 20rpx;
			}
		}
	}

	.body {
		padding: 30rpx;
		overflow-y: auto;
		height: calc(100vh - 88rpx - var(--status-bar-height));

		.protocol {
			align-items: flex-start;

			.text {
				color: #999;
				font-size: 28rpx;
				width: calc(100% - 60rpx);
			}
		}

		.items {
			padding: 20rpx 0;

			.item {
				height: 100rpx;
				border-bottom: 2rpx solid #F2F2F2;

				.label {
					color: #666;
					font-size: 30rpx;
					margin-left: 20rpx;
				}

				.value {
					color: #999;
					font-size: 28rpx;
				}
			}
		}

		.content {
			height: 200rpx;
			font-size: 28rpx;
			padding: 20rpx 30rpx;
			border-radius: 10rpx;
			width: calc(100% - 60rpx);
			background-color: #F9F9F9;
		}

		.images {
			overflow: hidden;

			.item {
				float: left;
				margin: 20rpx 20rpx 0 0;
				width: calc((100vw - 100rpx) / 3);
				height: calc((100vw - 100rpx) / 3);
				position: relative;

				&:nth-child(3n) {
					margin-right: 0;
				}

				&.upload-btn {
					cursor: pointer;
					flex-direction: column;
					justify-content: center;
					border: 2rpx solid #ededed;
				}

				.image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}

	.header {
		height: 88rpx;
		padding: 0 30rpx 0 20rpx;
		border-bottom: 2rpx solid #F2F2F2;

		.left,
		.right {
			width: 100rpx;
		}

		.center {
			text-align: center;
			width: calc(100% - 200rpx);
		}

		.right {
			text-align: right;
		}
	}
</style>
