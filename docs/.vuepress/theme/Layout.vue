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
    <!-- 内容主体 -->
    <div>
      <div class="content_zone">
        <div v-for="(item) in $site.pages" :key="item.key" class="item">
          <img loading="lazy" src="https://picsum.photos/536/354?random&date=2021-06-26">
          <div class="text">
            <!-- 标题 -->
            <div class="title">{{item.title}}</div>
            <!-- 摘要 -->
            <div class="excerpt" v-html="item.excerpt"></div>
          </div>
        </div>
      </div>
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
    console.info(this.$site.pages);
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
  .content_zone {
    max-width: 1200px;
    margin: -30px auto 0;
    .item {
      min-height: 310px;
      box-shadow: 0 1px 8px rgb(0 0 0 / 30%);
      border-radius: 10px;
      background: #fff;
      display: flex;
      margin-bottom: 20px;
      overflow: hidden;
      .text {
        padding: 20px;
        .title {
        font-size: 20px;
        font-weight: bold;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      }
      
    }
  }
}
</style>
<style>
body {
  margin: 0px;
}
</style>