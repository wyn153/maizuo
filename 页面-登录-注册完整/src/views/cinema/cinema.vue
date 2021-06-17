<template>
  <div>
    <comtop></comtop>
    <div class="cinemalist">
      <ul>
        <li v-for="(item, index) in cinemalist" :key="index">
          <div class="info">
            <p class="cinemaname">{{ item.name }}</p>
            <p class="address">{{ item.address }}</p>
          </div>
          <div class="price">
            <span class="lowprice"
              ><span style="font-size: 11px">￥</span>
              <span class="rmb" style="font-size: 15px">{{
                item.lowPrice | price
              }}</span>
              <span class="upon">起</span>
            </span>
            <span class="postiton">{{ item.Distance | distance }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { cinemaListData } from "@/api/api";
import comtop from "@/components/comtop";
export default {
  name: "cinema",
  props: [],
  components: {
    comtop,
  },
  data() {
    return {
      cinemalist: [],
    };
  },
  //过滤器
  filters: {
    price(value) {
      return parseFloat(value / 100);
    },
    distance(va) {
      return va.toFixed(2) + "KM";
    }
  },

  //组件创建之后
  async created() {
    let ret = await cinemaListData(this.$store.state.cinemaid);
    this.cinemalist = ret.data.data.cinemas;
    // console.log(this.cinemalist);
  },

  mounted() {
    //  解决bug  vue是单页面，点击大城市的时候，页面比较多，跳转到另一个页面，滚动条还是原先的数
    window.scroll(0, 0);
  },
};
</script>
  
<style lang="scss" scoped>
.cinemalist {
  margin-top: 44px;
  li {
    position: relative;
    background-color: #fff;
    padding: 15px;
  }
  .info {
    width: calc(100% - 65px);
    text-align: left;
    padding-right: 15px;
    p {
      display: block;
      max-width: 80%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .cinemaname {
      color: #191a1b;
      font-size: 15px;
    }
    .address {
      color: #797d82;
      font-size: 12px;
      margin-top: 5px;
    }
  }
  .price {
    font-size: 15px;
    color: #ff5f16;
    float: right;
    margin-top: -40px;
    .rmb {
      margin-right: 5px;
    }
    .upon {
      font-size: 10px;
    }
    .postiton {
      font-weight: 400;
      display: block;
      margin-top: 5px;
      font-size: 11px;
      color: #797d82;
      text-align: center;
    }
  }
}
</style> 
