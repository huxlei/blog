(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{307:function(t,e,n){},309:function(t,e,n){"use strict";n(307)},311:function(t,e,n){"use strict";n.r(e);n(88),n(89);var i={name:"Layout",components:{},data:function(){return{}},created:function(){},mounted:function(){},methods:{getListItemImg:function(t){return t.frontmatter.image?t.frontmatter.image:t.frontmatter.date?"https://picsum.photos/536/354/?random&date="+t.frontmatter.date:"https://picsum.photos/536/354"},goPage:function(t){window.open(t,"_self")}},computed:{articleList:function(){var t=[];return this.$site.pages.forEach((function(e){e.frontmatter.home||t.push(e)})),t}},watch:{}},s=(n(309),n(42)),a=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"layout"}},[n("div",{staticClass:"banner_zone",style:{"background-image":"url("+t.$site.themeConfig.bannerImg+")"}},[n("div",{staticClass:"title"},[t._v("首页")]),t._v(" "),n("div",{staticClass:"desc"},[t._v("描述")])]),t._v(" "),n("div",[n("div",{staticClass:"content_zone"},t._l(t.articleList,(function(e){return n("div",{key:e.key,staticClass:"item",on:{click:function(n){return t.goPage(e.path)}}},[n("img",{attrs:{loading:"lazy",src:t.getListItemImg(e)}}),t._v(" "),n("div",{staticClass:"text"},[n("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"excerpt",domProps:{innerHTML:t._s(e.excerpt)}})])])})),0)])])}),[],!1,null,"ca8ebbc8",null);e.default=a.exports}}]);