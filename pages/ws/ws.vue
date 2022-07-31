<template>
	<view class="content">
		<input type="text" v-model="msg" placeholder="请输入发送内容">
		<button @click="sendSocketMessage">发送</button>
	</view>
</template>

<script>
	import Ws from "@/utils/ws.js"
	export default {
		data() {
			return {
				wS: '', //websoket实例
				dataType: { //数据格式
					username: '李奶奶',
					avatar: 'none',
					id: '1571476959767947449',
					content: '',
					toid: '1571476959767947441',
					type: 'friend'
				},
				socketOpen: false, //连接是否成功
				msg: '', //消息
				socketMsgQueue: [], //消息发送队列
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			init() {
				let _this = this;
				this.wS = uni.connectSocket({
					url: 'ws://117.33.234.27:8082/websocket/1571476959767947449',
					success: (res) => {
						console.log(res);
					}
				});
				this.wS.onOpen((res) => {
					console.log('WebSocket连接成功！');
					_this.socketOpen = true;
				});
				// uni.onSocketOpen(function (res) {
				//   console.log('WebSocket连接成功！');
				//   _this.socketOpen = true;
				//   for (var i = 0; i < _this.socketMsgQueue.length; i++) { //连接成功重新发送消息队列内的消息
				//     _this.sendSocketMessage(_this.socketMsgQueue[i]);
				//   }
				//   _this.socketMsgQueue = [];
				// });
				this.wS.onMessage((res) => {
					console.log(res);
				})
				this.wS.uni.onError((res) => {
					console.log('WebSocket连接失败，请检查！');
				});
			},
			sendSocketMessage() {
				let _this = this;

				this.dataType.content = this.msg;
				if (this.socketOpen) {
					console.log(this.dataType);
					this.wS.send({
						data: JSON.stringify(_this.dataType),
						success: (res) => {
							console.log(res);
						}
					});
				} else { //发送失败，进入消息队列
					console.log('WebSocket连接失败，请检查！00');
					this.socketMsgQueue.push(this.dataType);
				}
			}

		}
	}
</script>

<style>
	input {
		border: 1px solid red;
		height: 80rpx;
		width: 100%;
	}
</style>
