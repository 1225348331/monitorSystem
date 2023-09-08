<template>
	<div class="content">
		<div class="login-wrapper">
			<div class="left-img">
			</div>
			<div class="right-login-form">
				<h1>同感云结构物健康监测管理平台</h1>
				<div class="form-wrapper">
					<div class="input-items">
						<span class="input-tips">
							账号
						</span>
						<input type="text" class="inputs" placeholder="请输入你的邮箱">
					</div>
					<div class="input-items">
						<span class="input-tips">
							密码
						</span>
						<input type="password" class="inputs" placeholder="请输入你的密码">
						<span class="forgot">忘记密码？</span>
					</div>
					<button @click="login" class="btn">登录</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'

let router = useRouter()

function login() {
	router.push({
		name: 'home'
	})
}

onMounted(() => {
	// router.push({
	// 	name: 'home'
	// })
})

</script>

<style lang="scss" scoped>
.content {
	width: 100vw;
	height: 100vh;
	background-color: rgb(186, 175, 221);
	position: relative;

	.login-wrapper {
		width: 70vw;
		height: 80vh;
		background-color: #fff;
		border-radius: 40px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		display: flex;

		.left-img {
			border-radius: 40px;
			flex: 1;
			background: url('@/assets/image/login/qybc.png') no-repeat;
			background-size: cover;
			background-position: -85px 0px;
			position: relative;

			.glass {
				width: 60%;
				padding: 20px;
				color: #fff;
				position: absolute;
				top: 20%;
				left: 50%;
				transform: translate(-50%, -20%);
				background: rgba(255, 255, 255, 0.1);
				box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
				backdrop-filter: blur(10px);
				-webkit-backdrop-filter: blur(10px);
				border-radius: 15px;
				border: 1px solid rgba(255, 255, 255, 0.48);

				.tips {
					.title {
						width: 25%;
						font-weight: 600;
						font-size: 15px;
						text-align: center;
						padding: 10px;
						overflow: hidden;
						background: rgba(255, 255, 255, 0.1);
						box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
						backdrop-filter: blur(10px);
						-webkit-backdrop-filter: blur(10px);
						border-radius: 15px;
						border: 1px solid rgba(255, 255, 255, 0.48);
					}

					h1 {
						margin: 15px 0;
					}

					span {
						margin: 5px 0;
						display: block;
						font-weight: 100;

					}
				}
			}
		}

		.right-login-form {
			flex: 1;
			position: relative;

			h1 {
				font-size: 30px;
				text-align: center;
				margin-top: 20%;
			}

			.form-wrapper {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);

				.input-items {
					margin: 20px 0;

					.input-tips {
						display: inline-block;
						font-weight: 600;
						font-size: 18px;
						margin: 10px 0;
					}

					.inputs {
						width: 100%;
						height: 50px;
						border-radius: 10px;
						border: 1px solid rgb(227, 227, 227);
						padding: 20px;
						box-sizing: border-box;
						outline: none;
						transition: .5s;

						&:focus {
							border: 1px solid rgb(128, 106, 196);
						}
					}

					.forgot {
						float: right;
						font-weight: 600;
						text-align: right;
						margin: 5px 0;
						font-size: 13px;
						cursor: pointer;
					}
				}

				.btn {
					width: 100%;
					height: 50px;
					background-color: rgb(128, 106, 196);
					border: 0;
					border-radius: 10px;
					color: #fff;
					font-size: 25px;
					margin: 20px 0;
					cursor: pointer;
				}

				.siginup-tips {
					text-align: center;
					font-weight: 600;
					margin: 10px 0;

					span:last-child {
						color: rgb(110, 87, 179);
						cursor: pointer;
					}
				}

				.other-login {
					.divider {
						width: 100%;
						margin: 20px 0;
						text-align: center;
						display: flex;
						align-items: center;
						justify-content: space-between;

						.line {
							display: inline-block;
							max-width: 35%;
							width: 35%;
							flex: 1;
							height: 1px;
							background-color: rgb(162, 172, 185);
						}

						.divider-text {
							vertical-align: middle;
							margin: 0 20px;
							display: inline-block;
							width: 50px;
							color: rgb(162, 172, 185);
							white-space: normal;
						}
					}

					.other-login-wrapper {
						width: 100%;
						display: flex;
						justify-content: center;
						align-items: center;

						.other-login-item {
							width: 70px;
							padding: 10px;
							text-align: center;
							border-radius: 10px;
							cursor: pointer;
							font-weight: 600;
							color: rgb(51, 49, 116);
							margin: 0 10px;
							transition: .4s;

							img {
								width: 40px;
								height: 40px;
								vertical-align: middle;
							}

							span {
								vertical-align: middle;
							}

							&:hover {
								width: 80px;
								height: 50%;
								background-color: #fff;
								border: 0;
								box-shadow: 1px 10px 32px 1px rgba(186, 175, 221, 0.37);
							}
						}
					}
				}
			}
		}
	}
}
</style>