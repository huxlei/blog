<!-- 文章详情页 -->
<template>
  <div id='page'>
    <div class=content_zone>
      <div class="title">{{$page.title}}</div>
      <Content class="content"/>
    </div>
  </div>
</template>

<script>
export default {
  name:'Page',
}

</script>
<style lang='stylus' scoped>
#page
  background-image url("https://picsum.photos/536/354?random&date=2021-06-26")
  width 100%
  background-repeat no-repeat
  background-size cover
  background-attachment fixed
  padding-top 100px
  padding-bottom 50px
  .content_zone
    max-width 1200px
    min-height 600px
    margin 0 auto
    border-radius 10px
    box-shadow 0 0 8px rgb(0 0 1 / 30%)
    background-color #fff
    .title
      display flex
      justify-content center
      font-size 40px
      text-shadow 0 1px 5px rgb(0 0 1 / 30%)
      padding-top 20px
</style>