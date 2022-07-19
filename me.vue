<template>
	<view>
		<u-alert :title="title" type="warning"></u-alert>
		<view>{{msg + ' world ' + '李奶奶'}}</view>
		<view>{{flag?'李奶奶':'李爷爷'}}</view>
		<button class="button" type="primary" size="mini" plain="false" open-type="getPhoneNumber"
			@getphonenumber="decryptPhoneNumber">获取手机号</button>
		<view>
			<button type="warn" @tap="undo">撤销</button>
			<u-grid :col="3">
				<u-grid-item>
					<u-badge count="9" :offset="[20, 20]"></u-badge>
					<u-icon name="photo" :size="46"></u-icon>
					<view class="grid-text">收藏</view>
				</u-grid-item>
				<u-grid-item>
					<image src="/static/image/icon/hot5.png" class="badge-icon"></image>
					<u-icon name="lock" :size="46"></u-icon>
					<view class="grid-text">历史记录</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="hourglass" :size="46"></u-icon>
					<view class="grid-text">积分商城</view>
				</u-grid-item>
			</u-grid>

			<view class="phnum" @click="phone">联系电话：123456789（点击拨打）</view>
		</view>
		<view v-for="(item,index) in arr" :key="item.id">
			序号:{{item.id}}, 姓名:{{item.name}}, 年龄:{{item.age}}
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '用户注册及登录，收藏，历史浏览记录，等级',
				msg: "hello",
				flag: true,
				text: "一键三连！！！",
				arr: [{
						name: '老诗',
						age: 12,
						id: 1
					},
					{
						name: '老妖怪',
						age: 11,
						id: 2
					},
					{
						name: '恩施',
						age: 4,
						id: 3
					},
					{
						name: '老六',
						age: 99,
						id: 4
					}
				]

			}
		},
		onShow() {
			uni.showToast({
				title: "加载中...",
				icon: "loading",
				duration: "100"
			})
		},
		methods: {
			click() {
				console.log(this.text)
				// var time = setTimeout(() => {
				// 	console.log(this.text)
				// }, 2000)
				var timer = setInterval(() => {
					console.log(this.text)
				}, 1000)
				//console.log("记得关注！");

			},
			phone() {
				uni.makePhoneCall({
					phoneNumber: '123456789'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.phnum {
		text {
			color: blue;
			font-size: larger;
			font-weight: 800;
		}
	}

	.badge-icon {
		position: absolute;
		top: 14rpx;
		right: 40rpx;
		width: 30rpx;
		height: 30rpx;
	}

	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: plum;
	}
</style>
