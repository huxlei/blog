<!--  -->
<template>
  <div class="main_zone">
    <!-- 导航 -->
    <div class="nav_zone">
      <!-- logo -->
      <div></div>
      <!-- 名称 -->
      <div class="title">{{$site.title}}</div>
    </div>
    <!-- banner -->
    <div class="banner_zone" :style="{'background-image': 'url(' + $site.themeConfig.bannerImg + ')'}">
      <div class="title">首页</div>
      <div class="desc">描述</div>
    </div>
  </div>
</template>

<script>
export default {

  name:'',

  components: {},

  props: {},

  data () {
    return {
    };
  },

  computed: {},

  created() {
    console.info('site 对象');
    console.info(this.$site);
  },

  mounted() {},

  methods: {},

  watch: {}
}

</script>
<style lang="less" scoped>
.main_zone {
  width: 100%;
  .nav_zone {
    width: 100%;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    position: fixed;
    .title {
      font-size: 24px;
      color: #fff;
      margin-left: 10px;
    }
  }
  .banner_zone {
    height: 440px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    .title {
      font-size: 40px;
    
    }
    .desc {
      font-size: 18px;
      margin-top: 10px;
    }
  }
}
</style>