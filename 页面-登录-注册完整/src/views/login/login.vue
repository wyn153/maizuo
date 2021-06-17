<template>
  <div class="login">
    <el-container>
      <el-header class="logo">
        <img
          src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png"
          alt=""
        />
      </el-header>
      <!-- 表单 -->
      <el-main>
        <el-form :rules="rules" :model="formData" ref="formData">
          <!-- :rules='rules' ui框架中需要遵守的规则 验证错误则红色提示-->
          <!-- ref操作DOM元素 -->
          <!-- prop 与下面的数据连为一体，ui框架内部处理的。-->
          <!-- 手机号 -->
          <el-form-item label="手机号" prop="mobile">
            <el-input
              placeholder="请输入手机号"
              maxlength="11"
              v-model="formData.mobile"
              prop="mobile"
            >
            </el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item label="密码" prop="password">
            <el-input
              placeholder="请输入密码"
              type="password"
              v-model="formData.password"
            >
              <!-- type="password" 设置以后，多小眼睛按钮，可设置隐藏 -->
            </el-input>
          </el-form-item>
          <!-- 登录 -->
          <el-form-item class="login-btn">
            <el-button type="danger" @click="submitForm('formData')"
              >登录</el-button
            >
            <h6 @click="loginZhuce" class="loginZhuce">注册新用户</h6>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { userLogin } from "@/api/api";
export default {
  data() {
    return {
      formData: {
        mobile: "",
        password: ""
      },
      rules: {
        mobile: [
          {
            // message 提示内容
            //点击表单后未输入的提示。此步骤表示 要求必须输入
            required: true,
            message: "请输入手机号",
            trigger: "blur",
          },
          {
            pattern: /^1[3-9]\d{9}$/,
            // 输入错误的时候显示
            message: "手机号格式不正确！",
            trigger: "blur",
          }
        ],
        password: [
          {
            // 必须输入
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          }
        ]
      }
    }
  },
  //组件创建之后
  created() {
    this.eventBus.$emit("footernav", false);
  },
  //页面渲染之后
  methods: {
    loginZhuce() {
      this.$router.push("/zhuce");
    },
    submitForm: function (formName) {
      console.log("进入submitForm里面了");
      //这里的async 是因为里面有异步请求
      this.$refs[formName].validate(async (valid) => {
        // valid的意思是  必须rules 那里全是true 全部效验通过 valid才会变为true
        if (valid) {
          // 获取用户名和密码进行提交（API）
          let ret = await userLogin(this.formData);
          console.log(ret);
          if (ret.data.code == 1000) {
            // 登录成功（存储token、跳转）
            //我们往 vuex 总商店触发mutation变异器 去改变里面的mobile.利用vuex 则所有的页面都可以使用这些数据
            this.$store.commit("usermobile", ret.data.mobile);
            // vuex 查看token
            this.$store.commit("tokenadd", ret.data.data._token);
            // 为了持久化存储，我们把token放进去localstorage里面
            localStorage.setItem("_token", ret.data.data._token);
            this.$message({
              message: "success 即将跳转个人中心",
              type: "success",
            });
            // 一秒后跳转
            setTimeout(() => {
              this.$router.push({ path: "/center" });
            }, 1000);
          } else {
            // 登录失败
            console.log("我进入登陆失败了");
            this.$message({
              message: "fail",
              type: "warning",
            });
            alert(ret.data.info);
          }
        }
      });
    },
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
.loginZhuce {
  text-align: center;
  color: #999d9c;
}
</style>