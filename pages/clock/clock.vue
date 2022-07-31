<template>
	<view>
		<!-- 搜索模块 -->
		<u-search placeholder="日照香炉生紫烟" v-model="keyword" height="82rpx" :animation="true"></u-search>

		<!-- 宫格布局 -->
		<u-grid class="gridpos" :border="true" col="4">
			<u-grid-item name="答题模块">
				<navigator url="/pages/question/optimized-swiper">
					<u-icon color="orange" name="question-circle-fill" size="65rpx" label="答题模块" labelColor="#FFE4B5"
						labelPos="bottom"></u-icon>
				</navigator>
			</u-grid-item>

			<u-grid-item name="心理咨询">
				<navigator url="/pages/chatBox/chatBox">
					<u-icon color="orange" name="chat-fill" size="65rpx" label="心理咨询" labelColor="#FFE4B5"
						labelPos="bottom"></u-icon>
				</navigator>
			</u-grid-item>

			<u-grid-item name="游戏模块">
				<navigator animation-type="pop-in" animation-duration="300" url="/pages/loader/ring">
					<!-- 动画窗口 -->
					<navigator animation-type="pop-out" animation-duration="300" open-type="navigateBack"></navigator>
					<u-icon color="orange" name="server-fill" size="65rpx" label="游戏模块" labelColor="#FFE4B5"
						labelPos="bottom">
					</u-icon>
				</navigator>
			</u-grid-item>

			<u-grid-item name="视频模块">
				<navigator url="/pages/vedio/vedio">
					<u-icon color="orange" name="play-right-fill" size="65rpx" label="视频模块" labelColor="#FFE4B5"
						labelPos="bottom">
					</u-icon>
				</navigator>
			</u-grid-item>
		</u-grid>
		<u-toast ref="uToast" />

		<!-- 答题模块
		<navigator url="/pages/question/optimized-swiper">
			<u-button class="custom-style" type="success" shape="circle" size="large" text="答题中心" :hairline="true">
			</u-button>
		</navigator>

		<!-- 聊天模块
		<navigator url="/pages/chatBox/chatBox">
			<u-button class="custom-style" type="warning" shape="circle" size="large" text="心理咨询" :hairline="true">
			</u-button>
		</navigator>

		<!-- 游戏模块
		<navigator animation-type="pop-in" animation-duration="300" url="/pages/loader/ring">
			<!-- 动画窗口
			<navigator animation-type="pop-out" animation-duration="300" open-type="navigateBack"></navigator>
			<u-button class="custom-style" type="error" shape="circle" size="large" text="游戏区" :hairline="true">
			</u-button>
		</navigator>

		<!-- 视频模块
		<navigator url="/pages/vedio/vedio">
			<u-button class="custom-style" type="primary" shape="circle" size="large" text="视频推荐" :hairline="true">
			</u-button>
		</navigator>
        -->

		<!-- 分割线 -->
		<u-divider text="推荐区" textColor="#2979ff" lineColor="#ff0000"></u-divider>

		<!-- 卡片模块 -->
		<a-card> :title="title" :sub-title="subTitle" :thumb="thumb">
			<view slot="body">
				<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
					<view class="u-body-item-title u-line-2">瓶身描绘的牡丹一如你初妆，冉冉檀香透过窗心事我了然，宣纸上走笔至此搁一半</view>
					<image
						src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg"
						mode="aspectFill"></image>
				</view>
				<view class="u-body-item u-flex u-row-between u-p-b-0">
					<view class="u-body-item-title u-line-2">釉色渲染仕女图韵味被私藏，而你嫣然的一笑如含苞待放</view>
					<image
						src="https://img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg"
						mode="aspectFill"></image>
				</view>
			</view>
			<view slot="foot">
				<u-icon name="chat-fill" size="34" color="orange" label="30评论"></u-icon>
			</view>
		</a-card>
	</view>
</template>

<script>
	import aCard from "components/u-card/u-card.vue";
	export default {
		components: {
			aCard
		},
		data() {
			return {
				value: 2,
				colors: ['#ffc454', '#ffb409', '#ff9500'],
				icons: ['thumb-down-fill', 'thumb-down-fill', 'thumb-up-fill', 'thumb-up-fill'],
				keyword: '遥看瀑布挂前川',
				title: '素胚勾勒出青花，笔锋浓转淡',
				subTitle: '2022-07-15',
				thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
			}
		},
		methods: {}
	}
</script>

<style lang="scss">
	.info {
		text-align: center;
		color: coral;
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

	.u-card-wrap {
		background-color: $u-bg-color;
		padding: 1px;
	}

	.u-body-item {
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 10rpx;
	}

	.u-body-item image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		border-radius: 8rpx;
		margin-left: 12rpx;
	}

	// button 样式
	.custom-style {
		color: ghostwhite;
		width: 400rpx;
	}

	.gridpos {
		padding-top: 20rpx;
	}
</style>
