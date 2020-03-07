<template>
  <view class="search">
    <SearchBar @query-search="querySearch" />
    <view class="history-search">
      <view class="title">
        <text class="title">历史搜索</text>
        <icon v-if="historyList.length" @click="clearHistory" type="clear" size="18"></icon>
      </view>
      <view>
        <view @click="querySearch(item)" v-for="(item, index) in historyList" :key="index">{{item}}</view>
      </view>
    </view>
  </view>
</template>

<script>
import SearchBar from '../../components/SearchBar'

export default {
  components: {
    SearchBar
  },

  data() {
    return {
      historyList: []
    }
  },

  onShow() {
    this.historyList = uni.getStorageSync('HISTORY_LIST') || []
  },

  methods: {
    querySearch(query) {
      uni.navigateTo({
        url: `/pages/search_list/search_list?query=${query}`
      })
    },

    clearHistory() {
      this.historyList = []
      uni.setStorageSync('HISTORY_LIST', [])
    }
  }
}
</script>

<style lang="less">
.search {
  background-color: #eee;
  padding: 30rpx 15rpx;
  display: flex;
  flex-direction: column;
  font-size: 28rpx;
  position: relative;

  .history-search {
    color: #333;
    font-size: 28rpx;
    padding: 30rpx 30rpx 30rpx 15rpx;
    .title {
      display: flex;
      justify-content: space-between;
    }

    view {
      display: flex;
      flex-wrap: wrap;
      margin-top: 30rpx;
      view {
        height: 64rpx;
        line-height: 64rpx;
        padding: 0 26rpx;
        background-color: #ddd;
        margin: 0 30rpx 16rpx 0;
      }
    }
  }
}
</style>