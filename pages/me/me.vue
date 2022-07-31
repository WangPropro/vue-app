<template>
	<view class="vbox">
		<!-- 头栏 -->
		<image class="top_back_img" src="https://naoketong.github.io/Su-Jin/img/timthumb%20(10).jpg" mode="widthFit">
		</image>
		<view class="top">
			<view class="circle">
				<image class="head" src="@/static/img/female.png" mode="widthFix"></image>
			</view>
			<view class="top-texts">
				<text class="name">李奶奶</text>
				<image class="set-top-hr" src="../../static/dulin-setting/set-top-hr.png" mode=""></image>
				<text class="depart">荣誉称号：杜骗专家</text>
				<view class="phoneNumber">
					<text>手机号：</text>
					<text>66666666</text>
				</view>
			</view>
		</view>

		<!-- 积分，等级 -->
		<view class="middle">
			<view class="middle-left">
				<image class="middle-icon" src="../../static/dulin-setting/cust.png"></image>
				<text>积分：</text>
				<text class="middle-num">2302</text>
			</view>
			<view class="middle-line"></view>
			<view class="middle-right">
				<image class="middle-icon" src="../../static/dulin-setting/loan.png"></image>
				<text>等级：</text>
				<text class="middle-num">3</text>
			</view>
		</view>

		<!-- 宫格布局 -->
		<u-grid border="false" col="3">
			<u-grid-item @click="gridClick" v-for="(listItem,listIndex) in list" :key="listIndex">
				<u-icon :customStyle="{paddingTop:5+'rpx'}" :name="listItem.name" :size="32"></u-icon>
				<text class="grid-text">{{listItem.title}}</text>
			</u-grid-item>
		</u-grid>
		<u-toast ref="uToast" />

		<!-- 条形栏 -->
		<view class="index">
			<u-transition :show="show" mode="zoom-in">
				<view class="transition"></view>
			</u-transition>
			<view class="cell" @click="changePass">
				<view class="cell-left">
					<image class="cell_icon" src="../../static/dulin-setting/account.png"></image>
					<text class="cell-text">修改密码</text>
				</view>
				<view class="cell-right">
					<image class="right-arrow" src="../../static/dulin-setting/right-arrow.png"></image>
				</view>
			</view>
			<!-- 检查更新 -->
			<view class="cell" @click="changeGray">
				<view class="cell-left">
					<image class="cell_icon" src="../../static/dulin-setting/account.png"></image>
					<text class="cell-text">检查更新</text>
				</view>
				<view class="cell-right">
					<image class="right-arrow" src="../../static/dulin-setting/right-arrow.png"></image>
				</view>
			</view>

			<view class="cell" @click="changeUs">
				<view class="cell-left">
					<image class="cell_icon" src="../../static/dulin-setting/account.png"></image>
					<text class="cell-text">关于我们</text>
				</view>
				<view class="cell-right">
					<image class="right-arrow" src="../../static/dulin-setting/right-arrow.png"></image>
				</view>
			</view>
		</view>

		<!-- 退出登录 -->
		<view class="logout" style="width:80%;margin-top: 50upx;">
			<button type="warn" @click="logout">退出登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				list: [{
						name: 'photo',
						title: '排行榜'
					},
					{
						name: 'home',
						title: '商城',
					},
					{
						name: 'star',
						title: '收藏'
					}
				],
			}
		},
		methods: {
			// 检查更新
			changeGray() {
				this.$router.push('/pages/version/version')
			},
			// 修改密码
			changePass() {
				this.$router.push('/pages/changepw/changepw')
			},
			// 宫格跳转
			gridClick(name) {
				if (name == 1)
					this.$router.push('/pages/goods-detail/scoreStore')
				if (name == 0)
					this.$router.push('/pages/salary/salary')
			},
			// click(name) {
			// 	this.$refs.uToast.success('点击了第${name}个')
			// },
			changeUs() {
				this.$router.push('/pages/aboutUs/aboutUs')
			},
			logout() {
				uni.showModal({
					title: '提示',
					content: '确认退出登陆？',
					success: function(res) {
						if (res.confirm) {
							uni.removeStorage({
								key: 'token',
								success(res) {
									uni.redirectTo({
										url: '/pages/login/login'
									})
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
		}
	}
</script>

<style scoped>
	.index {
		display: flex;
		flex-direction: column;
		width: 100%;
		background-color: white;
		border-top: 1px solid #cccccc;
	}

	.vbox {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.top_back_img {
		z-index: -1;
		position: absolute;
		top: 0upx;
		width: 100%;
		height: 420upx;
		filter: blur(8px);
		-webkit-filter: blur(8px);
		-moz-filter: blur(8px);
		-ms-filter: blur(8px);
		-o-filter: blur(8px);
	}

	.top {
		display: flex;
		width: 100%;
		height: 420upx;
		align-items: center;
	}

	.circle {
		margin-left: 100upx;
		width: 120upx;
		height: 120upx;
		border: 10upx solid orange;
		border-radius: 250rpx;
		overflow: hidden;
	}

	.head {
		width: 120upx;
		height: 120upx;
		border-radius: 150upx;
	}

	.top-texts {
		display: flex;
		flex-direction: column;
		margin-left: 15upx;
		color: ghostwhite;
		font-size: 24rpx;
		padding-left: 5%;
	}

	.name {
		padding: 20rpx 10rpx;
		font-size: 36upx;
		font-weight: 500;
	}

	.set-top-hr {
		width: 210upx;
		height: 6upx;
	}

	.top-changeInfo {
		margin-top: 250upx;
		width: 120upx;
		height: 28upx;
		line-height: 28upx;
		background-color: #FFFFFF;
		border-radius: 15upx;
		padding: 10rpx;
		color: #33dce8;
	}

	.depart {
		padding: 20rpx 20rpx 0 0;
		font-size: 16rpx;
	}

	.phoneNumber {
		font-size: 16rpx;
		padding: 20rpx 20rpx 0 0;
	}

	.middle {
		display: flex;
		align-items: center;
		position: relative;
		top: -50upx;
		width: 80%;
		height: 100rpx;
		background-color: white;
		border-radius: 15upx;
	}

	.middle-line {
		width: 2rpx;
		height: 40rpx;
		background-color: #eeeeee;
	}

	.middle-left {
		flex-grow: 1;
		color: #666666;
		display: flex;
		align-items: center;
		text-align: center;
	}

	.middle-right {
		flex-grow: 1;
		color: #666666;
		display: flex;
		align-items: center;
		text-align: center;
	}

	.middle-icon {
		width: 40upx;
		height: 40upx;
		margin-left: 20upx;
	}

	.middle-num {
		color: #fcac45;
		-webkit-font-smoothing: antialiased;
	}

	.cell {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #ccc;
		height: 90upx;
		align-items: center;
		justify-content: space-between;
	}

	.cell:active {
		background-color: #333;
		color: white;
		box-shadow: 1upx 1upx 35upx #ccc;
	}

	.cell-left {
		display: flex;
		align-items: center;
		margin-left: 65upx;
	}

	.cell-text {
		margin-left: 25upx;
	}

	.cell-right {
		margin-right: 45upx;
		height: 28upx;
	}

	.cell_icon {
		width: 40upx;
		height: 40upx;
		height: 40upx;
	}

	.right-arrow {
		color: #aaa;
		width: 15upx;
		height: 28upx;
	}

	.grid-text {
		font-size: 38rpx;
		color: orange;
		padding: 0rpx 70rpx 20rpx 70rpx;
		/* #ifndef APP-PLUS */
		box-sizing: border-box;
		/* #endif */
		word-break: keep-all;
		/* 不换行 */
	}
</style>
