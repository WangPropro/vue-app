<template>
	<view class="password">
		<image class="img" style="width: 100%; height: 360rpx; background-color: #eeeeee;" :src="src"></image>
		<!-- #ifndef APP-NVUE -->
		<view class="put">
			<u--input placeholder="请输入您的手机号" border="surround" v-model="value" @change="change"></u--input>
			<u-toast ref="uToast"></u-toast>
			<u-code :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange"></u-code>
			<u-button type="primary" @tap="getCode">{{tips}}</u-button>
			<u--input placeholder="请输入验证码" clearable border="surround" v-model="value1" @change="change1"></u--input>
			<u--input placeholder="请输入新的密码" clearable border="surround" v-model="value2" @change="change2"></u--input>
			<u--input placeholder="请再次输入新密码" border="surround" v-model="value3" @change="change3"></u--input>
			<u-button type="warning" @tap="alterCode">确认修改</u-button>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
				value: '',
				value1: '',
				value2: '',
				value3: '',
				tips: '',
				// refCode: null,
				seconds: 10,
			}
		},
		methods: {
			alterCode() {
				uni.showModal({
					title: '修改成功',
					success: function(res) {
						if (res.confirm) {
							console.log("用户点击确定");
							uni.navigateTo({
								url: "../chat/chat"
							})
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				})
			},
			change(e) {
				console.log('change', e);
			},
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						uni.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			end() {
				uni.$u.toast('倒计时结束');
			},
			start() {
				uni.$u.toast('倒计时开始');
			}
		}
	}
</script>

<style lang="scss">
	.password {
		padding-top: 0rpx;
	}

	.put {
		padding-top: 50rpx;
	}

	.img {
		filter: blur(10px);
		-webkit-filter: blur(10px);
		-moz-filter: blur(10px);
		-ms-filter: blur(10px);
		-o-filter: blur(10px);
	}

	.wrap {
		padding: 24rpx;
	}
</style>
