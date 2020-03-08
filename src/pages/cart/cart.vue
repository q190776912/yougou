<template>
  <view class="cart">
    <view class="title">
      <text class="iconfont icon-shop"></text>
      <text>优购生活馆</text>
    </view>
    <!-- 商品列表 -->
    <view class="goods-list">
      <view class="goods-item" v-for="(item, index) in goodList" :key="index">
        <text class="iconfont icon-checked"></text>
        <image :src="item.goodsSmallLogo" alt />
        <view class="right">
          <text class="text-line2">{{item.goodsName}}</text>
          <view class="btm">
            <text class="price">
              ￥
              <text>{{item.goodsPrice}}</text>.00
            </text>
            <view class="goods-num">
              <button>-</button>
              <text>{{item.num}}</text>
              <button>+</button>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="account">
      <view class="select-all">
        <text class="iconfont icon-uncheck"></text>
        <text>全选</text>
        <view class="price-wrapper">
          <view class="price">
            <text>
              合计:
              <text class="num">￥100.00</text>
            </text>
            <view class="info">包含运费</view>
          </view>
          <view class="account-btn">结算(3)</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { goodslist } from '../../api/goods'

export default {
  data() {
    return {
      goodList: [],
    }
  },
  async onShow() {
    const CART = uni.getStorageSync('cart') || []
    const GOOD_LIST = await goodslist({
      goods_ids: CART.map((item) => item.goodsId).join(',')
    })
    this.goodList = CART.map((cItem) => {
      const G_ITEM = GOOD_LIST.find((gItem) => gItem.goods_id === cItem.goodsId)
      cItem.goodsName = G_ITEM.goods_name
      cItem.goodsPrice = G_ITEM.goods_price
      cItem.goodsSmallLogo = G_ITEM.goods_small_logo
      return cItem
    })
  },

  methods: {
    
  }
}
</script>

<style lang="less">
.cart {
  .iconfont {
    font-size: 44rpx;
  }

  .title {
    height: 88rpx;
    display: flex;
    align-items: center;

    .iconfont {
      color: #999;
      margin: 6rpx 12rpx 0 32rpx;
    }
  }

  .goods-item {
    height: 206rpx;
    background-color: #fff;
    border-top: 1rpx solid #ddd;
    display: flex;
    box-sizing: border-box;
    align-items: center;

    .iconfont {
      color: #eb4450;
      margin: 0 30rpx;
    }

    image {
      width: 160rpx;
      height: 160rpx;
    }

    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin: 0 20rpx 0 18rpx;
      .text-line2 {
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .btm {
        display: flex;
        margin-top: 40rpx;
        justify-content: space-between;

        .price {
          color: #eb4450;

          > text {
            font-size: 24px;
          }
        }

        .goods-num {
          display: flex;
          align-items: center;

          button {
            width: 60rpx;
            height: 50rpx;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 4rpx solid #666;
          }

          text {
            margin: 0 30rpx;
          }
        }
      }
    }
  }

  .goods-list {
    position: absolute;
    bottom: 98rpx;
    top: 88rpx;
    width: 100%;
    overflow: auto;
    padding-bottom: 60rpx;
    background-color: #f4f4f4;
  }

  .account {
    height: 98rpx;
    border-bottom: 1rpx solid #ddd;
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;

    .iconfont {
      color: #eb4450;
      margin: 0 30rpx;
    }

    .account-btn {
      width: 230rpx;
      height: 98rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background-color: #eb4450;
    }

    .select-all {
      flex: 1;
      display: flex;
      align-items: center;
      .price-wrapper {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        align-items: center;
      }
    }

    .price {
      margin-right: 20rpx;

      .num {
        color: #eb4450;
      }

      .info {
        color: #999;
      }
    }
  }
}
</style>
