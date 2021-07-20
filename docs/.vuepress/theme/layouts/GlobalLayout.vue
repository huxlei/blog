<!-- 全局模板 -->
<template>
  <div id="global_layout">
    <!-- 导航 -->
    <div class="nav_zone">
      <!-- logo -->
      <div></div>
      <!-- 名称 -->
      <div class="title">{{$site.title}}</div>
    </div>
    <component :is="layoutType" :key="$page.path"/>
  </div>
</template>

<script>
export default {

  name:'',

  components: {},

  props: {},

  data() {
    return {
    };
  },

  computed: {
    layoutType() {
      const layout = this.$frontmatter.layout;
      if (layout) return layout;
      return 'Layout';
    }
  },

  created() {},

  mounted() {},

  methods: {},

  watch: {}
}

</script>
<style lang="stylus">
@require '../styles/public.styl'
@require '../styles/content.styl'
@require '../styles/code.styl'

body {
  margin: 0px;
}
</style>
<style lang='stylus' scoped>
#global_layout
  .nav_zone
    width 100%
    height 60px
    background-color rgba(0, 0, 0, 0.2)
    display: flex
    align-items center
    position fixed
    .title 
      font-size 24px
      color #fff
      margin-left 10px
</style>
