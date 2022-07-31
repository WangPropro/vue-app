<template>
	<view class="wrap u-p-t-80">
		<u--input v-model="humanName" label="昵称" placeholder="请输入您的真实姓名" focus required></u--input>
		<u--input v-model="phoneNumber" label="手机号码" placeholder="请输入手机号码"></u--input>
		<u--input v-model="homeAddress" label="家庭住址" placeholder="请输入家庭住址"></u--input>
		<!-- <u-field v-model="password_confirmation" label="确认密码"  placeholder="请确认密码" required password :error-message="errorMessage"></u-field> -->
		<!-- <button @tap="submit" :loading="submitBtn" :disabled="submitBtn" :style="[inputStyle]" class="getCaptcha">注册</button> -->
		<u-button type="primary" @tap="submit" :style="" class="getCaptcha">确认收货信息</u-button>
		<view class="buttom">
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				humanName: '',
				phoneNumber: '',
				homeAddress: '',

			}
		},
		methods: {
			async submit() {

				const params = {
					humanName: this.humanName,
					phoneNumber: this.phoneNumber,
					homeAddress: this.homeAddress
				}

				// 请求API,执行登录
				// const loginRes =  await this.$u.api.authLogin(params)
				// console.log(loginRes)
				//缓存token
				// this.$u.vuex('vuex_token',loginRes.access_token)
				// this.$u.toast('登陆成功')
				// //请求用户信息
				// const userInfo = await this.$u.api.userInfo()

				//缓存用户信息
				// this.$u.vuex('vuex_user',userInfo)
				//登录之后，跳转到来源页
				// const backUrl = uni.getStorageSync('back_url')||'pages/index/index'
				setTimeout(() => {
					this.$u.route({
						type: 'reLaunch',
						url: 'pages/center/scoreStore'
					})
				}, 1500)
			},
		}
	}
</script>

<style>

</style>
