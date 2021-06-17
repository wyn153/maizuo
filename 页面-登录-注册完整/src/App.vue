// 组件 comfooternav 代表着底边栏

<template>
  <div id="app">
    <router-view></router-view>
    <!-- 下面 -->
    <comfooternav v-if="is_show"></comfooternav>
  </div>
</template>
<script>
import axios from "axios";
import comfooternav from "@/components/comfooternav.vue";
export default {
  name: "app",
  components: {
    comfooternav
  },
  data() {
    return {
      is_show: true
    }
  },
  created() {
    this.$nextTick(() => {
      // 接受了detail发送的 footernav 以及参数 false参数  并且赋值给了is_show  ， 此时的is_show  为false，则隐藏
      this.eventBus.$on("footernav", (flag) => {
        this.is_show = flag;
      })
    })
  },
  mounted() {
    // 所有的页面设置_token 则设置在APP页面中，则可以全局去获取数据
    if (this.$store.state.token) {
      axios({
        method: "get",
        url: "http://localhost:3009/api/v1/user_info",
        headers: { Authorization: "Bearer " + this.$store.state.token },
      }).then((res) => {
        // 接下来把res返回来的用户信息  利用变异器 存入vuex  让其他  所有的小页面想用 可以持久化用
        //先根据状态码处理失败情况
        if (res.data.code === "888") {
          localStorage.removeItem("_token");
        }
        this.$store.commit("usermobile", res.data.info2.mobile);
      })
    }
  }
}
</script>
<style lang="scss" >
* {
  margin: 0;
  padding: 0;
}

html,
body {
  // 把他关掉则鼠标滚轮都可以使用
  // touch-action:none;
  height: 100%;
  ul,
  li {
    list-style: none;
  }
}
</style> 