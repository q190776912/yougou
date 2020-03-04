<template>
  <view class="category">
    <SearchLink />
    <view class="content">
      <view class="left">
        <view
          :class="{ active: activeIndex === index }"
          class="li"
          v-for="(item, index) in categories"
          :key="index"
          @click="changeIndex(index)"
        >{{item.cat_name}}</view>
      </view>
      <view v-if="categories.length" class="right">
        <image src="../../static/images/titleImage.png" />>
        <!-- 二级分类 -->
        <view class="cate2" v-for="(cate2, index) in categories[activeIndex].children" :key="index">
          <view class="title">
            /
            <text>{{cate2.cat_name}}</text>/
          </view>
          <view class="cate3">
            <view v-for="(cate3, index) in cate2.children" :key="index">
              <image :src="cate3.cat_icon" />>
              <view>{{cate3.cat_name}}</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import SearchLink from "../../components/SearchLink";
import { categories } from "../../api/categories";

export default {
  data() {
    return {
      activeIndex: 0,
      categories: []
    }
  },

  components: {
    SearchLink
  },

  methods: {
    changeIndex(index) {
      this.activeIndex = index;
    }
  },

  async onLoad() {
    try {
      this.categories = await categories();
    } catch {
      uni.showToast({
        title: "获取categories数据有误",
        icon: "none"
      });
    }
  }
};
</script>

<style lang="less">
.category {
  .content {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 100rpx;
  }

  .left {
    width: 198rpx;
    overflow: scroll;
    .li {
      height: 100rpx;
      line-height: 100rpx;
      text-align: center;
      border: 1rpx solid #eee;
      background-color: #f4f4f4;
      color: #333;
    }
    .active {
      color: #eb4450;
      background-color: #fff;
      position: relative;
      &::before {
        position: absolute;
        content: "";
        height: 60rpx;
        width: 8rpx;
        background-color: #eb4450;
        left: 0;
        top: 20rpx;
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .right {
    flex: 1;
    overflow: scroll;
    > image {
      width: 520rpx;
      height: 180rpx;
      padding: 20rpx 16rpx;
    }
    .cate2 {
      margin-bottom: 60rpx;
      .title {
        height: 110rpx;
        text-align: center;
        line-height: 110rpx;
        color: #e0e0e0;
        text {
          margin: 0 30rpx;
          color: #333;
        }
      }
      .cate3 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        text-align: center;
        image {
          width: 120rpx;
          height: 120rpx;
        }
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
