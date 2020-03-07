<template>
  <view class="SearchBar">
    <input type="text"
           confirm-type="search"
           v-model.trim="inputVal"
           @confirm="$emit('querySearch', inputVal)">
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
  watch: {
    query: function (newVal) {
      this.inputVal = newVal
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