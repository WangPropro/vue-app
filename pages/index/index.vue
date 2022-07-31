<template>
	<view class="content">
		<image class="logo" src="@/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button type="default" @click="toWS">websoket</button>
		<button type="default" @click="toCB">聊天窗口</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'WebSocket搞不懂就去死'
			}
		},
		onLoad() {

		},
		methods: {
			toWS() {
				uni.navigateTo({
					url: '/pages/ws/ws'
				})
			},
			toCB() {
				uni.navigateTo({
					url: '/pages/chatBox/chatBox'
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	button {
		margin: 20rpx 0;
	}
</style>
