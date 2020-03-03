<template>
  <view class="SearchLink">
		<view class="inner">
			<icon type="search" color="#bbb" size="16"></icon>
			<text>搜索</text>
		</view>
	</view>
</template>

<script>
export default {

}
</script>

<style lang="less">
.SearchLink {
  height: 100rpx;
		padding: 20rpx 16rpx;
		box-sizing: border-box;
		background-color: #eb4450;

		.inner {
			height: 60rpx;
			width: 100%;
			background-color: #fff;
			border-radius: 4rpx;
			display: flex;
			justify-content: center;
			align-items: center;

			text {
				color: #bbb;
				margin-left: 16rpx;
			}

			icon {
				margin-top: 4rpx;
			}
		}
}
</style>