<template>
	<view class="content">
		<text class="txt">正在匹配附近玩家</text>
		<view class="ring">匹配中...
			<text></text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//倒计时秒数
				seconds: 6,
				// 定时器的 Id
				timer: null,
			}
		},
		onLoad() {
			this.delayNavigate()
		},
		methods: {
			delayNavigate() {
				// 把 data 中的秒数重置成 60 秒
				this.seconds = 6
				this.timer = setInterval(() => {
					this.seconds--
					if (this.seconds <= 0) {
						clearInterval(this.timer)
						uni.redirectTo({
							url: '/pages/game/drama'
						})
						return 0
					}
				}, 1000)
			},
		},
	}
</script>

<style lang="less">
	.txt {
		padding-left: 27%;
		color: #fff000;
		font-size: 36rpx;
	}

	page {
		margin: 0;
		padding: 0;
		background: #262626;
	}

	.ring {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 150px;
		height: 150px;
		background: transparent;
		border: 3px solid #3c3c3c;
		border-radius: 50%;
		text-align: center;
		line-height: 150px;
		font-family: sans-serif;
		font-size: 20px;
		color: #fff000;
		letter-spacing: 4px;
		text-transform: uppercase;
		text-shadow: 0 0 10px #fff000;
		box-shadow: 0 0 20px rgba(0, 0, 0, .5);

		text {
			display: block;
			position: absolute;
			top: calc(50% - 2px);
			left: 50%;
			width: 50%;
			height: 4px;
			background: transparent;
			transform-origin: left;
			animation: animate 2s ease infinite;
		}

		text:before {
			content: '';
			position: absolute;
			width: 16px;
			height: 16px;
			border-radius: 50%;
			background: #fff000;
			top: -6px;
			right: -8px;
			box-shadow: 0 0 20px #fff000;
		}
	}

	.ring:before {
		content: '';
		position: absolute;
		top: -3px;
		left: -3px;
		width: 100%;
		height: 100%;
		border: 3px solid transparent;
		border-top: 3px solid #fff000;
		border-right: 3px solid #fff000;
		border-radius: 50%;
		animation: animateC 2s linear infinite;
	}



	@keyframes animateC {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes animate {
		0% {
			transform: rotate(45deg);
		}

		100% {
			transform: rotate(405deg);
		}
	}
</style>
