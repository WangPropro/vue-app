<template>
	<view>
		<!-- 布局 -->
		<view class="u-flex u-row-between u-m-l-30 u-m-r-30 u-text-center">
			<text class="shadow title u-font-30 ">
				<view class="score">您当前拥有：{{score}}积分</view>
				<view class="u-flex u-row-between"></view>
			</text>
		</view>
		<u-row gutter="16" class="u-skeleton">
			<u-col span="6" v-for="item in goods.length!==0?goods:[{},{}]">
				<scores-card :item="item"></scores-card>
			</u-col>

		</u-row>
		<!-- 骨架屏幕 -->
		<u-skeleton :loading="loading" :animation="true" bgColor='#FFF'></u-skeleton>
	</view>
</template>

<script>
	import scoreCard from '@/components/scores-card/scores-card.vue';
	export default {
		data() {
			return {
				// 	imgList: [

				// 		'https://cdn.uviewui.com/uview/swiper/1.jpg',
				// 		'https://cdn.uviewui.com/uview/swiper/2.jpg'
				// 	],
				sortList: [{
						name: '默认'
					},
					{
						name: '销量'
					},
					{
						name: '推荐'
					},
					{
						name: '最新'
					}
				],
				currentSort: 0,
				slides: [],
				goods: [],
				page: 1,
				loading: false,
				score: 90
			}
		},
		onLoad() {
			// this.$u.utils.isLogin()
			this.getData()
		},
		methods: {
			changeSort(index) {
				console.log(index)
				this.currentSort = index
				//商品制空，然后切换数据
				this.goods = []
				this.page = 1
				this.getData()
				//判断筛选条件
			},
			async getData() {
				this.loading = true
				const params = {
					page: this.page
				}
				if (this.currentSort == 1) params.sales = 1
				if (this.currentSort == 2) params.recommend = 1
				if (this.currentSort == 3) params.news = 1
				const res = await this.$u.api.index(params)
				console.log(res)
				this.loading = false
				this.slides = res.slides
				this.goods = [...this.goods, ...res.goods.data]
			}
		},
		onReachBottom() {
			this.page = this.page + 1
			this.getData()
		}
	}
</script>

<style lang="scss" scoped>
	.shadow {
		box-shadow: 0 10rpx 20rpx 0 rgba(#000000, .3);
	}
</style>
