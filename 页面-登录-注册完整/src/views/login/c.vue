<template>
<swiper :options="swiperOption">
  <swiper-slide>1</swiper-slide>
  <swiper-slide>1</swiper-slide>
  <swiper-slide>1</swiper-slide>
</swiper>
</template>

 <script> 
 export default {
     name: "HeadRotation",
     data () {
         return {
        swiperOption:{
        slidesPerView: 'auto',
        centeredSlides:true,
        spaceBetween: 10,
        loop:true,
        speed:600, //config参数同swiper4,与官网一致
      }
     }
    },
    components: {
    swiper,
    swiperSlide
    },
    mounted() {},
 };
 </script>
 
<style lang="scss" scoped>
.banner {
  width: 100%;
}
.swiper-slide img {
    width: 100%;
    min-width: 1200px;
    height: 100%;
}
</style>


