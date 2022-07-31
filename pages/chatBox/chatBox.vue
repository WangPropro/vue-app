<template>
	<view>
		<u-navbar :isBack="true" title="某人"></u-navbar>
		<cola-u-chat
		  userId="101"
		  IDType="msgId"
		  :dataKeys="dataKeys"
		  :messageData="msgData"
		  :updateMsg="updateData"
		  :historyMsg="historyMsg"
		  :moreFunction="moreFunction"
		  :isUseRefresh="true"
		   @sendMsg="send"
		   @moreClick="clickMore"
		   @refresh="refreshNow"
		   />
	</view>
	
</template>

<script>
	import colaUChat from '@/uni_modules/cola-u-chat/components/cola-u-chat/cola-u-chat.vue'
	export default {
		components: {
			colaUChat,
		},
		data(){
			return{
				dataKeys: {
				    userId:'selfUserId',
				    msgId:'selfMsgId',
				    name:'userName',
				    message:'msg',
				    img:'myImg',
				    avator:'myAvator',
					// read:'read'
				},
				msgData: [
					{
						selfUserId: '101',
						selfMsgId: '',
						userName: '我的大聪明啊',
						msg: 'WebSocket 没有解决',
						avator: ''
					},
					{
						selfUserId: '202',
						selfMsgId: '',
						userName: 'xixixi',
						msg: 'hhh',
						avator: ''
					}
				],
				historyMsg: {},
				updateData: {},
				moreFunction: [
					{
						name: '照片',
						icon: 'photo',
						img: ''
					},
					{
						name: '拍摄',
						icon: 'camera',
						img: ''
					},
					{
						name: '语音通话',
						icon: 'phone-fill',
						img: ''
					},
					{
						name: '位置',
						icon: 'map-fill',
						img: ''
					},
					{
						name: '群工具',
						icon: 'grid-fill',
						img: ''
					}
				]
			}
		},
		methods: {
			send(e) {
				this.updateData = {
					selfUserId: '101',
					selfMsgId: Math.random().toFixed(4) * 10000,
					userName: '我的大聪明啊',
					msg: e,
					img:'',
					avator: '',
					read:false
				};
				console.log(this.updateData);
			},
			clickMore(e) {
				console.log(e);
			},
			refreshNow(e) {
				this.historyMsg = [
					{
						selfUserId: '101',
						selfMsgId: Math.random().toFixed(4) * 10000,
						userName: '我的大聪明啊',
						msg: '123',
						img:'',
						// img: 'https://wx1.sinaimg.cn/bmiddle/007mrOHlly1gt28ies4q8j31b20s0thj.jpg',
						avator: '',
						read:true
					},
					{
						selfUserId: '444',
						selfMsgId: Math.random().toFixed(4) * 10000,
						userName: '小a',
						msg: '',
						img: 'https://wx1.sinaimg.cn/bmiddle/007mrOHlly1gt28ies4q8j31b20s0thj.jpg',
						avator: '',
						read:true
					}
				];
				
			}
		},
		mounted() {
			setTimeout(() => {
				this.historyMsg = [
					{
						selfUserId: '101',
						selfMsgId: Math.random().toFixed(4) * 10000,
						userName: '我的大聪明啊',
						msg: '',
						img: 'https://wx1.sinaimg.cn/bmiddle/007mrOHlly1gt28ies4q8j31b20s0thj.jpg',
						avator: '',
						read:true
					}
				];
				this.updateData = {
					selfUserId: '101',
					selfMsgId: '',
					userName: '我的大聪明啊',
					msg: '新消息',
					avator: '',
					img: 'https://wx1.sinaimg.cn/bmiddle/007mrOHlly1gt28ies4q8j31b20s0thj.jpg',
					read:false
				};
			}, 1000);
		},
		beforeDestroy() {
			// console.log('准备销毁了')
		},
		onBackPress(options) {
			console.log(options);
		}
	}
</script>

<style lang="scss">
	
</style>