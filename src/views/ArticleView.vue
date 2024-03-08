<template>
    <div class="article">
        <HeaderComponent/>
        <main>
        <div class="bookmark">
          <img
            src="@/assets/article/head.png"
            class="bookmark__img"
          />
        </div>
          <div v-if="ARTICLES" class="section">
            <div class="rightSide">
            <BigArticle :article="ARTICLES[6]"/>
            <aside class="cites">
                  <div class="cite">
                      <p class="cite__number">„</p>
                      <p class="cite__description">The details are not the details. 
                      They make the design.</p>
                  </div>
            </aside>
            <BigArticle :article="ARTICLES[7]"/>
          </div>
            <TagFilter/>
          </div>
        </main>
      <FooterComponent/>
    </div>
  </template>
  <script>
  
import BigArticle from '@/components/BigArticle.vue';
import FooterComponent from '@/components/FooterComponent.vue';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import TagFilter from '@/components/UI/TagFilter.vue'
  
  export default {
    name: 'ArticleView',
    components: {
      HeaderComponent,
      FooterComponent,
      BigArticle,
      TagFilter,
  },
  data(){
    return{
      
 month: [
      'December',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'January',
    ],
  }},
  mounted(){
  this.$store.dispatch('GET_ARTICLES')
      },
  computed:{
     ARTICLES(){
      return   this.$store.getters.ARTICLES[0]
    },
  }
}
  </script>
  <style lang="scss">
  .articles{
    margin-top:25px
  }
  .section{
    margin-top: 200px;
    display: grid;
    gap:52px;
  }
  .rigthSide{
    grid-column: 1
  }
  @import url('@/assets/scss-modules/articles.scss');
  @import url('@/assets/scss-modules/_head.scss');
  @import url('@/assets/scss-modules/_latest-post.scss');
  @import url('@/assets/scss-modules/_bookmarks.scss');
  @import url('@/assets/scss-modules/_pages.scss');
  @import url('@/assets/styles/_article.scss');
  </style>
  