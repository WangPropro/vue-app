<template>
	<view>
		<u-navbar title="评论区" bgColor="#FFE4B5" @leftClick="leftClick" leftText="返回" @rightClick="rightClick"
			rightText="发布">
		</u-navbar>
		<view class="comment" v-for="(res, index) in commentList" :key="res.id">
			<view class="left">
				<image :src="res.url" mode="aspectFill"></image>
			</view>
			<view class="right">
				<view class="top">
					<view class="name">{{ res.name }}</view>
					<view class="like" :class="{ highlight: res.isLike }">
						<view class="num">{{ res.likeNum }}</view>
						<u-icon v-if="!res.isLike" name="thumb-up" :size="30" color="#9a9a9a" @click="getLike(index)">
						</u-icon>
						<u-icon v-if="res.isLike" name="thumb-up-fill" :size="30" @click="getLike(index)"></u-icon>
					</view>
				</view>
				<view class="content">{{ res.contentText }}</view>
				<view class="reply-box">
					<view class="item" v-for="(item, index) in res.replyList" :key="item.index">
						<view class="username">{{ item.name }}</view>
						<view class="text">{{ item.contentStr }}</view>
					</view>
					<view class="all-reply" @tap="toAllReply" v-if="res.replyList != undefined">
						共{{ res.allReply }}条回复
						<u-icon class="more" name="arrow-right" :size="26"></u-icon>
					</view>
				</view>
				<view class="bottom">
					{{ res.date }}
					<view class="reply" @click="clickReply">回复</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				commentList: []
			};
		},
		onLoad() {
			this.getComment();
		},
		methods: {
			clickReply() {
				console.log('已经点击');
				this.$router.push('/pages/comment/reply')
			},
			// 退回到水栈
			leftClick() {
				this.$router.push('/pages/chat/chat')
			},
			// 跳转到发布
			rightClick() {
				this.$router.push('/pages/comment/publish')
			},
			// 跳转到全部回复
			toAllReply() {
				console.log('跳转到全部回复')
				uni.navigateTo({
					url: '/pages/comment/reply'
				})
			},
			// 点赞
			getLike(index) {
				this.commentList[index].isLike = !this.commentList[index].isLike;
				if (this.commentList[index].isLike == true) {
					this.commentList[index].likeNum++;
				} else {
					this.commentList[index].likeNum--;
				}
			},
			// 评论列表
			getComment() {
				this.commentList = [{
						id: 1,
						name: '张奶奶',
						date: '07-20 18:58',
						contentText: '【反诈秘诀“三不一多、六个一律，八个凡是” 】',
						url: 'https://cdn.uviewui.com/uview/template/SmilingDog.jpg',
						allReply: 12,
						likeNum: 33,
						isLike: false,
						replyList: [{
								name: 'teach',
								contentStr: '未知链接不点击，陌生来电不轻信，个人信息不透露，转账汇款多核实',
							},
							{
								name: '李奶奶',
								contentStr: '+1'
							}
						]
					},
					{
						id: 2,
						name: '潘奶奶',
						date: '07-19 13:58',
						contentText: '未知链接不点击，陌生来电不轻信，个人信息不透露，转账汇款多核实',
						allReply: 0,
						likeNum: 11,
						isLike: false,
						url: 'https://cdn.uviewui.com/uview/template/niannian.jpg',
					},
					{
						id: 3,
						name: '王奶奶',
						date: '07-19 13:58',
						contentText: '未知链接不点击，陌生来电不轻信，个人信息不透露，转账汇款多核实',
						allReply: 0,
						likeNum: 21,
						isLike: false,
						allReply: 2,
						url: '../../../static/logo.png',
						replyList: [{
								name: 'teach',
								contentStr: '未知链接不点击，陌生来电不轻信，个人信息不透露，转账汇款多核实'
							},
							{
								name: '吴奶奶',
								contentStr: '+1'
							}
						]
					},
					{
						id: 4,
						name: '李奶奶',
						date: '06-20 13:58',
						contentText: '未知链接不点击，陌生来电不轻信，个人信息不透露，转账汇款多核实',
						url: 'https://cdn.uviewui.com/uview/template/SmilingDog.jpg',
						allReply: 0,
						likeNum: 150,
						isLike: false
					}
				];
			}
		}
	};
</script>

<style lang="scss" scoped>
	.comment {
		display: flex;
		padding-top: 90rpx;

		.left {
			image {
				width: 64rpx;
				height: 64rpx;
				border-radius: 50%;
				background-color: #f2f2f2;
			}
		}

		.right {
			flex: 1;
			padding-left: 20rpx;
			font-size: 30rpx;

			.top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 10rpx;

				.name {
					color: #5677fc;
				}

				.like {
					display: flex;
					align-items: center;
					color: #9a9a9a;
					font-size: 26rpx;

					.num {
						margin-right: 4rpx;
						color: #9a9a9a;
					}
				}

				.highlight {
					color: #5677fc;

					.num {
						color: #5677fc;
					}
				}
			}

			.content {
				margin-bottom: 10rpx;
			}

			.reply-box {
				background-color: rgb(242, 242, 242);
				border-radius: 12rpx;

				.item {
					padding: 20rpx;
					border-bottom: solid 2rpx $u-border-color;

					.username {
						font-size: 24rpx;
						color: #999999;
					}
				}

				.all-reply {
					padding: 20rpx;
					display: flex;
					color: #5677fc;
					align-items: center;

					.more {
						margin-left: 6rpx;
					}
				}
			}

			.bottom {
				margin-top: 20rpx;
				display: flex;
				font-size: 24rpx;
				color: #9a9a9a;

				.reply {
					color: #5677fc;
					margin-left: 10rpx;
				}
			}
		}
	}
</style>
