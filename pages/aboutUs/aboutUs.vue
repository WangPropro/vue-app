<template>
	<view class="aboutUs">
		<image class="img" src="https://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="phone">联系电话：666666（点击拨打）</view>
			<view>地址：浙江万里学院钱湖校区</view>
			<map enable-3D=true style="height: 500rpx;width: 100%;" :latitude="latitude" :longitude="longitude"></map>
			<view class="rating">对我们的满意度：
				<!-- 评分模块 -->
				<u-rate size="28" abled inactive-icon="thumb-up"></u-rate>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//地图定位配置
				scale: 10,
				longitude: 117.562884,
				latitude: 29.817118,
			}
		},
		methods: {
			phone() {
				uni.makePhoneCall({
					phoneNumber: '666666' //仅为示例
				});
			}
		}

	}
</script>

<style lang="scss">
	.aboutUs {
		.img {
			height: 320rpx;
			width: 750rpx;
		}
	}

	.info {
		padding: 10rpx 20rpx;
		font-size: 30rpx;

		view {
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
		}
	}

	.map {
		height: 750rpx;
		width: 750rpx;
	}
</style>
