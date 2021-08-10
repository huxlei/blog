<!-- 主页 -->
<template>
  <div id="layout">
    <!-- banner -->
    <div class="banner_zone" :style="{'background-image': 'url(' + $site.themeConfig.bannerImg + ')'}">
      <div class="title">首页</div>
      <div class="desc">{{$site.description}}</div>
    </div>
    <!-- 文章列表 -->
    <div>
      <div class="content_zone">
        <div 
          v-for="(item) in articleList" 
          :key="item.key" 
          class="item" 
          @click='goPage(item.path)'
        >
          <div class="item_img">
            <img loading="lazy" :src="getListItemImg(item)">
          </div>
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

  name:'Layout',

  methods: {
    /**
     * 获取列表封面图
     */
    getListItemImg(item) {
      if(item.frontmatter.image) return item.frontmatter.image;
      if(item.frontmatter.date) return 'https://picsum.photos/536/354/?random&date=' + item.frontmatter.date + '.webp';
      return 'https://picsum.photos/536/354.webp'
    },
    /**
     * 跳转到文章详情页
     */
    goPage(url) {
      let pageUrl = url.indexOf('/') == 0 ? url.replace('/', '') : url;
      if (this.$site.base) {
        pageUrl = this.$site.base + pageUrl;
      }
      window.open(pageUrl, '_self');
    }
  },

  computed: {
    articleList() {
      let artList = [];
      this.$site.pages.forEach(item => {
        if (!item.frontmatter.notShow) {
          artList.push(item);
        }
      })
      return artList;
    }
  },
}

</script>
<style lang="stylus" scoped>
#layout 
  width 100%
  .banner_zone 
    height 440px
    width 100%
    background-repeat no-repeat
    background-size cover
    display flex
    justify-content center
    align-items center
    flex-direction column
    color #fff
    background-image url('/blog/assets/img/banner2.webp')
    .title 
      font-size 40px
    .desc 
      font-size 18px
      margin-top 10px
  .content_zone 
    max-width 1200px
    margin -30px auto 0
    .item 
      min-height 310px
      box-shadow 0 1px 8px rgb(0 0 0 / 30%)
      border-radius 10px
      background #fff
      display flex
      flex-wrap wrap
      margin-bottom 20px
      overflow hidden
      cursor pointer
      .item_img
        width 536px
        height 354px
        overflow hidden
      .text 
        padding 20px
        overflow hidden
        .title 
          font-size 20px
          font-weight bold
          width 100%
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
        .excerpt
          margin-top 10px
          line-height 2
          > p
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
@media (max-width $phoneWidth)
  .banner_zone
    height 300px !important
  .content_zone 
    padding 0 10px
    .item
      .item_img
        height 200px !important

</style>
