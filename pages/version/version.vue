<template>
	<view class="ver">
		<u-modal :show="show" @confirm="confirm" ref="uModal" :asyncClose="true">当前版本已经是最新版本</u-modal>
		<u-button type="primary" shape="circle" size="large" @click="showModal">检查更新</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
			}
		},
		onLoad: function(opt) {

		},
		methods: {
			showModal() {
				this.show = true;
			},
			confirm() {
				setTimeout(() => {
					// 2秒后自动关闭
					this.show = false;
					this.$router.push('/pages/me/me')
				}, 2000)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ver {
		background: whitesmoke;
		padding-top: 680rpx;
	}
</style>
