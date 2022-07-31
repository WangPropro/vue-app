<template>
	<!-- #ifndef APP-NVUE || MP-TOUTIAO -->
	<!-- 导航栏 (未实现)
	<u-navbar :isback="true" :background="background"></u-navbar>
	-->
	<view class="u-demo-block">
		<!-- 消息滚动通知 -->
		<u-notice-bar :text="text1" mode="closable" fontSize="26rpx" speed="10"></u-notice-bar>
		<!-- 3D轮播图 -->
		<u-swiper :list="list3" previousMargin="30" nextMargin="30" circular :autoplay="true" radius="5"
			bgColor="#ffffff"></u-swiper>
		<!-- Tab 标签 -->
		<u-tabs :list="tabList" @click="click" :activeStyle="{
            color: '#ffaa7f',
            fontWeight: 'bold',
            transform: 'scale(1.05)'
        }" :inactiveStyle="{
            color: '#606266',
            transform: 'scale(1)'
        }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"></u-tabs>
		<!-- 数据可视化 -->
		<view v-if="currentTabIndex == 0">
			<navigator url="/pages/slectCity/selectCity">
				<u-button class="custom-style" text="进入城市选择"></u-button>
			</navigator>
			<!-- 通过按键获取 map (失败)-->
			<emap></emap>
		</view>
		<!-- 社区 -->
		<view v-if="currentTabIndex == 1">
			<navigator url="/pages/comment/search">
				<u-button class="search-style" text="进入评论区"></u-button>
			</navigator>
			<u-divider text="推 荐" textColor="#2979ff" lineColor="#ff0000"></u-divider>
			<!-- 直接加塞页面 （失败）
			<ecomment></ecomment>  -->
			<!--<reply></reply>-->

			<!-- #ifndef ABULM || 相册 -->
			<view class="u-page">
				<view class="u-demo-block">
					<text class="u-demo-block__title">Tops</text>
					<view class="u-demo-block__content">
						<view class="album">
							<view class="album__avatar">
								<image src="/static/uview/common/logo.png" mode="" style="width: 32px;height: 32px;">
								</image>
							</view>
							<view class="album__content">
								<u--text text="李奶奶" type="primary" bold size="17"></u--text>
								<u--text margin="0 0 8px 0" text="暂无数据..."></u--text>
								<u-album :urls="urls2"></u-album>
							</view>
						</view>
					</view>
				</view>
			</view>
			<u-loadmore :status="status" :loading-text="loadingText" :loadmore-text="loadmoreText"
				:nomore-text="nomoreText" />
		</view>
		<!--  #endif -->

		<!-- 评审团 -->
		<view v-if="currentTabIndex == 2">
			never give up！
			<!-- 进入评审团 -->
			<navigator url="/pages/jury/jury">
				<u-button class="search-style" text="进入评审团"></u-button>
			</navigator>
			<!-- 分割线 -->
			<u-divider text="分割线" textColor="#2979ff" lineColor="#ff0000"></u-divider>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import reply from "@/pages/comment/reply.vue";
	import emap from "@/components/emap/emap.vue";
	export default {
		components: {
			//reply,
			emap
		},
		data() {
			return {
				status: 'loadmore',
				loadingText: '努力加载中',
				loadmoreText: '轻轻上拉',
				nomoreText: '实在没有了',
				albumWidth: 0,
				urls2: [
					'https://cdn.uviewui.com/uview/album/1.jpg',
					'https://cdn.uviewui.com/uview/album/2.jpg',
					'https://cdn.uviewui.com/uview/album/3.jpg',
					'https://cdn.uviewui.com/uview/album/4.jpg',
					'https://cdn.uviewui.com/uview/album/5.jpg',
					'https://cdn.uviewui.com/uview/album/6.jpg',
					'https://cdn.uviewui.com/uview/album/7.jpg',
					'https://cdn.uviewui.com/uview/album/8.jpg',
					'https://cdn.uviewui.com/uview/album/9.jpg',
					'https://cdn.uviewui.com/uview/album/10.jpg',
				],
				currentTabIndex: 0,
				text1: '寒雨连江夜入吴, 平明送客楚山孤, 洛阳亲友如相问, 一片冰心在玉壶 ',
				background: {
					backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
				},
				list3: [
					"/static/img/swiper.jpg",
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				tabList: [{
					name: '数据可视化地图',
				}, {
					name: '互助社区',
					badge: {
						value: 5,
					}
				}, {
					name: '评审团',
					badge: {
						isDot: true
					}
				}]
			}
		},
		methods: {
			click(item) {
				console.log('item', item);
				//console.log('currentTabIndex', this.currentTabIndex);
				if (this.currentTabIndex != item.index) {
					this.currentTabIndex = item.index;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo-block {
		padding-top: 74rpx;
	}

	.custom-style {
		color: orange;
		width: 400rpx;
	}

	.search-style {
		color: orange;
		width: 400rpx;
	}

	.album {
		@include flex;
		align-items: flex-start;

		&__avatar {
			background-color: $u-bg-color;
			padding: 10px;
			border-radius: 10px;
		}

		&__content {
			margin-left: 20px;
			flex: 1;
		}
	}
</style>
