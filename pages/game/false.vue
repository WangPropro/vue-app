<template>
	<view>
		<u-notify type="warning" ref="uNotify"></u-notify>
		<u-image :showLoading="true" :src="src" shape="circle" radius="10" width="750rpx" height="520rpx" :fade="true"
			duration="450">
		</u-image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/6f061d950a7b02087a732bf662d9f2d3572cc86a.jpg'
			}
		},
		methods: {},
		onReady() {
			this.$refs.uNotify.show({
				top: 284,
				type: 'error',
				//color: 'white',
				//bgColor: 'red',
				message: '胜败乃兵家常事, 大侠请重新来过!',
				duration: 1000 * 3,
				fontSize: 20,
				safeAreaInsetTop: true
			})
		}
	}
</script>

<style lang="scss" scoped>
</style>
