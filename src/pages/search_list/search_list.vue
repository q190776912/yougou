<template>
  <view class="search_list">
    <!-- 头部 -->
    <view class="header">
      <icon type="search" size="16" color="#bbb"></icon>
      <input type="text" v-model="keyword" confirm-type="search" @confirm="querySearch" />
    </view>

    <!-- 过滤菜单 -->
    <view class="filter-menu">
      <view
        :class="{ active:activeIndex === index}"
        @click="changeIndex(index)"
        v-for="(item, index) in menuList"
        :key="index"
      >{{item}}</view>
    </view>

    <!-- 商品列表 -->
    <view class="goods-list">
      <view class="goods" v-for="(item, index) in searchList" :key="index">
        <image v-if="item.goods_big_logo" :src="item.goods_big_logo" />
        <view class="right">
          <view class="goods-name">{{item.goods_name}}</view>
          <view class="price">
            ￥
            <text>{{item.goods_price}}</text>.00
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { search } from '../../api/goods'
const PAGE_SIZE = 6

export default {
  data() {
    return {
      menuList: ['综合','销量','价格'],
      searchList: [],
      activeIndex: 0,
      keyword: '',
      query: '',
      page: 1,
      isFinish: false,
      isRequesting: false
    }
  },

  methods: {
    changeIndex(index) {
      this.activeIndex = index
    },

    async getSearchList() {
      if (this.isFinish || this.isRequesting) {
        return
      }
      this.isRequesting = true
      const DATA = await search({
        query: this.query,
        pagenum: this.page++,
        pagesize: PAGE_SIZE
      })
      this.searchList = [...this.searchList, ...DATA.goods]
      this.isRequesting = false
      if (this.searchList.length === DATA.total) {
        this.isFinish = true
      }
    },

    querySearch() {
      this.page = 1
      this.query = this.keyword
      this.isFinish = false
      this.searchList = []
      this.getSearchList()
    }
  },

  async onLoad() {
    uni.startPullDownRefresh()
    this.getSearchList()
  },

  async onPullDownRefresh() {
    uni.stopPullDownRefresh()
    this.getSearchList()
  },

  async onReachBottom() {
    this.getSearchList()
  }
};
</script>

<style lang="less">
.header {
  height: 120rpx;
  padding: 30rpx 16rpx;
  box-sizing: border-box;
  background-color: #eee;
  position: relative;

  icon {
    position: absolute;
    top: 48rpx;
    left: 44rpx;
  }

  input {
    height: 60rpx;
    width: 100%;
    border-radius: 4rpx;
    background-color: #fff;
    padding-left: 80rpx;
    box-sizing: border-box;
  }
}

.top-header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
}

.header {
  height: 120rpx;
  padding: 30rpx 16rpx;
  box-sizing: border-box;
  background-color: #eee;
  position: relative;

  icon {
    position: absolute;
    top: 48rpx;
    left: 44rpx;
  }

  input {
    height: 60rpx;
    width: 100%;
    border-radius: 4rpx;
    background-color: #fff;
    padding-left: 80rpx;
    box-sizing: border-box;
  }
}

.filter-menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100rpx;

  view.active {
    color: #eb4450;
  }
}

.goods {
  border-top: 1rpx solid #ddd;
  height: 260rpx;
  box-sizing: border-box;
  padding: 0 20rpx;
  display: flex;
  align-items: center;

  image {
    width: 200rpx;
    height: 200rpx;
  }

  .right {
    flex: 1;
    margin-left: 26rpx;
    height: 100%;
    position: relative;
    .goods-name { 
      margin-top: 20rpx;
    }
    .price {
      position: absolute;
      color: #eb4450;
      font-size: 24rpx;
      bottom: 30rpx;

      text {
        font-size: 36rpx;
      }
    }
  }
}

.btm-line {
  text-align: center;
}
</style>