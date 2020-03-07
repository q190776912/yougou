<template>
  <view class="SearchBar">
    <input type="text"
           confirm-type="search"
           v-model.trim="inputVal"
           @confirm="querySearch">
    <icon class="search-icon"
          type="search"
          size="16">
    </icon>
    <icon class="clear-icon"
          type="clear"
          size="16"
          color="#ccc"
          v-show="inputVal"
          @click="inputVal = ''">
    </icon>
  </view>
</template>

<script>

export default {
  props: ['query'],
  data() {
    return {
      inputVal: ''
    }
  },

  methods: {
    querySearch() {
      this.$emit('querySearch', this.inputVal)
      this.setHistoryList(this.inputVal)
    },

    setHistoryList(query) {
      if (query) {
        const HISTORY_LIST = uni.getStorageSync('HISTORY_LIST') || []
        uni.setStorageSync('HISTORY_LIST', [...new Set([query, ...HISTORY_LIST])])
      }
    }
  },

  watch: {
    query(newVal) {
      this.inputVal = newVal
      //  储存分类页面及历史搜索按钮跳转过来的搜索记录
      this.setHistoryList(newVal)
    }
  }
}
</script>

<style lang="less">
.SearchBar {
  height: 120rpx;
  background-color: #eee;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    background-color: #fff;
    height: 60rpx;
    width: 720rpx;
    padding-left: 74rpx;
    box-sizing: border-box;
  }
  .search-icon {
    position: absolute;
    left: 44rpx;
  }

  .clear-icon {
    position: absolute;
    right: 44rpx;
    z-index: 100;
    left: auto;
  }
}
</style>