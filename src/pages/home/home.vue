<template>
	<view class="home">
		<SearchLink/>
    <!-- 轮播图 -->
    <swiper indicator-dots circular autoplay indicator-color="rgba(255,255,255,0.3)" indicator-active-color="#fff">
      <block v-for="(item, index) in swiperdata" :key="index">
        <swiper-item>
          <image :src="item.image_src"></image>
        </swiper-item>
      </block>
    </swiper>
    <!-- 导航 -->
    <view class="nav">
      <image v-for="(item, index) in catitems" :key="index" :src="item.image_src" alt=""></image>
    </view>
    <!-- 楼层 -->
    <view>
      <view class="floor"  v-for="(floor, i) in floordata" :key="i">
        <image :src="floor.floor_title.image_src" alt=""></image>
        <view class="product_list">
          <image :src="floor.product_list[0].image_src" alt=""></image>
          <view class="right">
            <block v-for="(item, index) in floor.product_list" :key="index">
               <image v-if="index" :src="item.image_src" alt=""></image>
            </block>
          </view>
        </view>
      </view>
    </view>
	</view>
</template>

<script>
import { swiperdata, catitems, floordata } from '../../api/home'
import SearchLink from '../../components/SearchLink'

export default {
	data() {
		return {
      swiperdata: [],
      catitems: [],
      floordata: []
		}
  },
  components: {
    SearchLink
  },
  async onLoad() {
    try {
      this.swiperdata = await swiperdata()
    } catch {
      uni.showToast({
        title: '获取swiperdata有误！',
        icon: 'none'
      })
    }
    try {
      this.catitems = await catitems()
    } catch {
      uni.showToast({
        title: '获取catitems有误！',
        icon: 'none'
      })
    }
    try {
      this.floordata = await floordata()
    } catch {
      uni.showToast({
        title: '获取floordata有误！',
        icon: 'none'
      })
    }
  }
}
</script>

<style lang="less">
.home {
  swiper {
    height: 340rpx;
    image {
      width: 100%;
      height: 340rpx;
    }
  }

  .nav {
    display: flex;
    height: 194rpx;
    justify-content: space-around;
    align-items: center;
    image {
      width: 128rpx;
      height: 140rpx;
    }
  }
  .floor {
    padding:20rpx 17rpx 0;
    > image {
      height: 88rpx;
      width: 100%;
    }
  }

  .product_list {
    display: flex;
    > image {
      width: 232rpx;
      height: 386rpx;
    }
    .right {
      flex:1;
      font-size: 0;
      > image {
        width: 232rpx;
        height: 188rpx;
        margin:0 0 10rpx 10rpx;
      }
    }
  }
}
</style>
