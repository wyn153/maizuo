// 父nowplaying  给子组件，传值

// comloading  加载动画
<template>
<div class="comfilmlistdivall scroll" :style="{ height: height + 'px' }">
    <!-- 可正常显示数据 -->
    <!-- <h1>{{list1}}</h1> -->
    <!--没数据则 加载动画 -->
    <comloading v-if="watchflag"></comloading>
    <!--有数据则显示 设置样式 -->
    <div v-if="!watchflag">
      <!-- item.filmId 是数据中的准确值 设置跳转对应的详情页-->
      <div v-for="(item, index) in data" @click="godetail(item.filmId)" class="item" :key="index">
        <div class="left">
          <img v-lazy="item.poster"/>
          <!-- v-lazy 表示在图片没有出来之前，会有loding的图标去占位，  图标在main.js中设置 -->
      </div>
      
        <div class="middle">
          <div>{{ item.name }}</div>
        <!-- type == 1的nowplaying页面设置观众评分 -->
          <div v-if="type == 1">
            <span>观众评分 </span>
            <span class="grade">{{ item.grade }}</span>
          </div> 
          <div>主演：{{item.actors | parseActors}}</div>
          <div>{{ item.nation}} | {{ item.runtime}}分钟</div>
        </div>
        <div class="right">
          <span v-if="type == 1">购票</span>
          <span v-else>预购</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import comloading from '@/components/comloading.vue'
// better-scroll 列表的加载更多
import BScroll from "better-scroll";
import { nowPlayingListData, comingSoonListData } from '@/api/api'
export default {
    name: 'comfilmlist',
    props:["list1", "type"],
   
    data() {
      return {
        height: 0,
        flag:true, //控制是否可以加载更多
        watchflag: true,
        data:[], //拼接数据使用
        pageNum: 1, //给第二页传递数据使用
        bs: null, //保存better-scroll 的实例结果
      };
    },
     components: {
      comloading
    },
       //侦听器
    watch: {
      list1: function(newval) {
      console.log("comingSoonListData-进来watch了");
      this.watchflag = false;
      //   console.log(newVal);
      this.data = this.list1

      console.log(this.data);
      },
    },
    //方法 函数写这里
    methods: {
        godetail(filmId){
          // console.log('我进来了godetail里面了  filmId')
          console.log(filmId)
          // 跳转页面，，携带了参数，每个页面对应的filmid值 设置跳转对应的详情页
        this.$router.push({ name:'detail',params:{filmId}})
      },

    async getData () {
      console.log('进入comingSoonListData--getData里面了');
      // flag 为true 的时候进入
      if (this.flag) {
        this.flag = false
      // 给第二页获取数据使用
        this.pageNum++
        // console.log(this.pageNum);
        //获取数据
      if (this.type == 1) {
          //type == 1 这是正在上映的电影数据请求
          console.log('进来this.type =1里面了')
        var ret = await nowPlayingListData(this.pageNum)
          console.log('ret这是上映的电影新数据请求',ret)
        } else {
          // 这是即将上映的电影数据
          console.log('进来comingSoonListData里面了')
        var ret = await comingSoonListData(this.pageNum)
          // console.log(this.data);
        }
        this.flag =true
        // 数据小于1 就不在获取了。节约性能
        if(ret.data.data.films.length < 1) {
                this.flag = false
            }
        // this.data.concat 将数据拼接在一起
        this.data = this.data.concat(ret.data.data.films)
      }
      console.log(this.data);
    },},
    //计算属性
    computed: {
// loding中得缺陷解决： 
// 数据没获取到，则显示loding，如果服务器数据比较慢，一直不来，而这时mounted 已经执行完了，
// 如果当这时  数据获取的到的时候，而这时mounted 已经执行完了，下方mounted中检测数据的步骤走不进去，则loding便一直在、当数据过来时，loding则占位，数据渲染不上  

// 如果数据来的比较快，则这时不会有这个缺陷 
        isflag(){
            // console.log('comfilmlist-isflag -computed里面');
            // false
            return this.data[0]
        }
    },
 
    //过滤器
    filters: {
    // 处理演员的数据，将主演的数据从数组形式转化成字符串形式以便输出
    parseActors: function (value) {
      let actors = "";
      if (value) {
        value.forEach((element) => {
          actors += element.name + " ";
        });
      } else {
        actors = "暂无主演";
      }
      return actors;
      },
    },

    //以下是生命周期
    //组件创建之前
    beforeCreate() {},
    //组件创建之后
    created() {},
    //页面渲染之前
    beforeMount() {},
    //页面渲染之后
    mounted() {
        // console.log('components的comfilmlist mounted里面');
        console.log(this.data);
// 有缺陷 则更改为isflag方法
        // 如果检测到有数据过来，则为false，loding则不显示，此步骤为不显示，
        // if(this.list1.length >0 ){
        //     this.flag=false
        // }

// 获取可视高度  ---设置列表懒加载
      this.height = document.documentElement.clientHeight - 100 
    },

    //页面视图数据更新之前
    beforeUpdate() {},
    //页面视图数据更新之后
    updated() {

      // ------> 1  有点小bug   
      //new 得到better scroll的全部能力 
    //   this.bs = new BScroll(".scroll", {
    //     pullUpLoad: true,
    //     // 激活下滑的事件监听
    //     pullDownRefresh: true,
    //     // 禁止一些浏览器的事件
    //     click: true,
    //   });
    //   //如果已经有了 new BScroll给的全部能力 我就不继续 new 新的了 以防止重新渲染容器
    //   //this.bs.refresh()意思是  正常运转 已有的容器
    //   this.bs.on("pullingUp", () => {
    //   // 获取数据
    //   this.getData();
    //   // 这一步是 下拉刷新,刷新一次就可以了，不然服务器受不了
    //   this.bs.finishPullUp();
    // });
    // //本次pullup动作已经完成，继续准备下一次pullup
    // this.bs.on("pullingDown", () => {
    //   // 获取数据
    //   this.getData();
    //   //本次pulldown动作已经完成，继续准备下一次pulldown
    //   this.bs.finishPullDown();
    // });


      // ------> 2   
      //new 得到better scroll的全部能力 
      // 如果this.bs 为false 表示没有new bscroll给的全部能力，就执行一次，如果有了，则正常执行，不在new新的了
    if (!this.bs) {
      // 每一次更新的时候都要bscroll
      this.bs = new BScroll(".scroll", {
        pullUpLoad: true,
        // 激活下滑的事件监听
        pullDownRefresh: true,
        mouseWheel:true, // 鼠标可下滑
        // 禁止一些浏览器的事件
        click: true,
        pullUpLoad: {
        threshold: -20,
        },
      });
      }else{
      //this.bs.refresh()意思是  正常运转 已有的容器
        this.bs.refresh();
      }
      //如果已经有了 new BScroll给的全部能力 我就不继续 new 新的了 以防止重新渲染容器
      //this.bs.refresh()意思是  正常运转 已有的容器
    this.bs.on("pullingUp", () => {
      // 获取数据
      this.getData();
      // 这一步是 下拉刷新,刷新一次就可以了，不然服务器受不了
      this.bs.finishPullUp();
    });
    //本次pullup动作已经完成，继续准备下一次pullup
    this.bs.on("pullingDown", () => {
      // 获取数据

      this.getData();
      //本次pulldown动作已经完成，继续准备下一次pulldown
      this.bs.finishPullDown();
    });
  },

     //页面销毁之前
    beforeDestroy(){
      
    },
    //页面销毁之后
    destroyed() {
      // 节约资源 
      // this.bs = null},
    }
}
  </script>
  
  
<style lang="scss" scoped>
.item {
  margin-top: 15px;
  padding-bottom: 15px;
  display: flex;
  color: #797d82;
  font-size: 13px;
  border-bottom: 1px solid #ededed;

  .left {
    width: 77px;
    height: 100px;
    margin-left: 20px;
    img {
      width: 66px;
      height: 100%;
    }
  }

  .middle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;

    div:nth-of-type(1) {
      color: #191a1b;
      font-size: 16px;
    }

    div:nth-of-type(3) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .right {
    width: 15%;
    display: flex;
    align-items: center;
    margin-right: 20px;

    span {
      border: 1px solid #ff5f16;
      background: white;
      color: #ff5f16;
      border-radius: 2px;
      height: 25px;
      line-height: 25px;
      font-size: 13px;
      width: 50px;
      text-align: center;
    }
  }
}

.pingfen {
  color: red;
}
.comfilmlistdivall {
  margin-bottom: 80px;
}
.scroll {
  overflow: hidden;
}
</style>
