<template>
  <div class="zhuce">
    <el-container>
      <el-header class="logo">
        <h1>注册</h1>
      </el-header>
      <!-- 表单 -->
      <el-main>
        <el-form>
          <el-form-item>
            <el-input
              placeholder="请输入手机号"
              maxlength="11"
              v-model="mobile"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入密码" v-model="password"></el-input>
          </el-form-item>
          <el-form-item class="login-btn">
            <el-button @click="dianjizhuce">注册</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  //组件名字
  name: "zhuce",
  // vue数据集中管理
  data() {
    return {
      mobile: "",
      password: ""
    };
  },
  //方法 函数写这里
  methods: {
    dianjizhuce() {
      axios
        .post("http://localhost:3009/zhuce", {
          mobile: this.mobile,
          password: this.password,
        })
        .then((data) => {
          console.log(data);
          // 成功
          if (data.data.code == 200) {
            // this.$message element的消息提示插件
            this.$message({
              message: data.data.info2,
              type: "success",
            });
            // 成功则跳转到login页面
            this.$router.push("/login");
          } else {
            this.$message({
              message: "警告哦，注册可能有点问题o ",
              type: "warning",
            });
          }
        });
    },
  },
  //组件创建之后
  created() {
    this.eventBus.$emit("footernav", false);
  },
  //页面销毁之后
  destroyed() {
    this.eventBus.$emit("footernav", true);
  },
};
</script>
<style lang="scss" scoped>
.login {
  padding-top: 80px;
  .el-container {
    width: 80%;
    margin-left: 40px;
    .el-header {
      font-size: 23px;
    }
  }
}
.logo {
  margin: 60px auto 40px;
  text-align: center;
  height: 60px;
  line-height: 60px;
}
.logo img {
  height: 100%;
}
.el-button {
  line-height: 26px;
  font-size: 16px;
  margin: 20px 4px 0;
  border-radius: 8px;
  text-align: center;
  background-color: #ff5f16;
  height: 44px;
  color: #fff;
  border: none;
  width: 100%;
}
</style>