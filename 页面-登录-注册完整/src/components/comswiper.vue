<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <!-- 插槽（坑） detail中组件插入 -->
            <slot></slot>
        </div>
    </div>
</template>
<script>
// 安装了第三方包，，引入swiper
import Swiper from "swiper";
// 引入了第三方包中的样式
import "swiper/swiper-bundle.min.css";
export default {
    //因为this.$nextTick 页面才能异步渲染 百分百保证不会白屏
    mounted() {
        this.$nextTick(() => {
            // 获取JS
            new Swiper(".swiper-container", {
                // 页面中显示几张
                slidesPerView: 4,
            });
        });
    },
};
</script>


