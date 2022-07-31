<template>
	<view>
		<!-- 导航区 -->
		<u-navbar title="剧本杀" bgColor="#FFE4B5" @leftClick="leftClick">
		</u-navbar>
		<view class="gamebar">
			<!-- 游戏区 (步骤条)-->
			<u-steps current="2" activeIcon="checkmark" inactiveIcon="arrow-right">
				<u-steps-item title="观看剧本背景,进入角色各自场景" desc="10:20"></u-steps-item>
				<u-steps-item title="进入聊天窗口" desc="10:35"></u-steps-item>
				<u-steps-item title="投票表决出诈骗者" desc="12:20"></u-steps-item>
			</u-steps>

			<!-- 投票区 -->
			<view class="vote">请选择出你认为正确的诈骗者：
				<!--</ad><u-radio-group class="radio" v-model="radiovalue1" placement="column" @change="groupChange">
					<u-radio :customStyle="{marginBottom: '8rpx'}" v-for="(item, index) in radiolist1" :key="index"
						:label="item.name" :name="item.name" @change="radioChange">
					</u-radio>
				</u-radio-group>

				<!-- 选择结果 【弹出框（成功 or失败）】-->
				<u-popup :show="show" :round="10" mode="center" @close="close" @open="open">
					<!--<text class="choose">已选择{{ radiovalue1 }}!</text>-->
					<text class="choose">点击空白处进入到选项阶段</text>
				</u-popup>
				<u-button type="info" shape="circle" @click="show = true">点击跳转选项</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// u-radio-group的 v-model绑定的值如果设置为某个radio的name，就会被默认选中
				radiovalue1: '',
				show: false,
				// 倒计时秒数
				seconds: 60,
				// 定时器的 Id
				timer: null,
				// 基本案列数据
				radiolist1: [{
						name: '危棍',
					},
					{
						name: '危女',
					},
					{
						name: '计棍',
					},
					{
						name: '贾知县',
					}
				],
			}
		},
		// onLoad() {
		// 	this.delayNavigate()
		// },
		methods: {
			leftClick() {
				this.$router.push('/pages/clock/clock');
			},
			open() {
				console.log('open');
				uni.showActionSheet({
					itemList: ['A.危棍', 'B.危女', 'C.计棍', 'D.贾知县'],
					success: function(res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						if ((res.tapIndex + 1) == 1) {
							uni.showToast({
								icon: "success",
								title: '选择正确!',
								duration: 2000
							});
						} else {
							uni.showToast({
								icon: "error",
								title: '选择错误!',
								duration: 2000,
							});
							uni.navigateTo({
								url: '/pages/game/false'
							})
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			close() {
				this.show = false
				console.log('close');
			},
			groupChange(n) {
				console.log('groupChange', n);
			},
			radioChange(n) {
				console.log('radioChange', n);
			},
			//------------------------------------
			// 	this.showTips(this.seconds)
		},
	}
</script>

<style lang="scss">
	.gamebar {
		padding-top: 110rpx;
	}

	.vote {
		//border-style: dotted;
		border-radius: 10rpx;
		margin-top: 90rpx;
		margin-left: 0rpx;
		color: orange;
	}

	.radio {
		margin-top: 40rpx;
		background-color: linear-gradient(45deg, red 0%, green 50%, pink 100%);
	}

	.choose {
		color: lightgreen;
		background: white;
		font-size: 56rpx;
		font-width: 68rpx;
	}
</style>
