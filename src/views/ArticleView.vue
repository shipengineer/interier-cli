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
        <div class="section">
        <BigArticle :article="ARTICLES[6]"/>
        <aside class="cites">
              <div class="cite">
                  <p class="cite__number">„</p>
                  <p class="cite__description">The details are not the details. 
                  They make the design.</p>
              </div>
          </aside>
          <BigArticle :article="ARTICLES[7]"/>
          <div class="tags">
            <span class="tags__name">Tags</span>
            <span v-for="tags,index in ARTICLES[0].tag" class="tags__element" @click="addFilter" :key="index">{{tags}}</span>
          </div>
          <section class="articles">
            <div class="palette">
              <ArticleComponent v-for="post,index in filteredArticles" class="article" 
              :isTime="true"
              :article="post" :key="index"></ArticleComponent>
            </div>
          
          </section>
        </div>
        </main>
      <FooterComponent/>
    </div>
  </template>
  
  <script>
  import ArticleComponent from '@/components/ArticleComponent.vue';
import BigArticle from '@/components/BigArticle.vue';
import FooterComponent from '@/components/FooterComponent.vue';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  
  
  export default {
    name: 'ArticleView',
    components: {
      HeaderComponent,
      FooterComponent,
      ArticleComponent,
      BigArticle,
  },
  data(){
    return{
      
        filters: [],
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
    methods: {
  getDateToString(timestamp) {
    const date = new Date(timestamp * 1000);
    return `${date.getDate()} ${
      this.month[date.getMonth()]
    } ${date.getFullYear()}`;
    },
    addFilter(e) {
      if (this.filters.includes(e.target.textContent)) {
        this.filters = this.filters.filter(
          (elem) => elem != e.target.textContent
        );
        e.target.classList.toggle("selected");
      } else {
        this.filters.push(e.target.textContent);
        e.target.classList.toggle("selected");
      }
    },
    
  },
  mounted(){
  this.$store.dispatch('GET_ARTICLES')
    
  },
  computed: {
   ARTICLES(){
      return  this.$store.getters.ARTICLES[0]
    },
   
    filteredArticles() {
      console.log(this.ARTICLES)
      if (this.filters.length === 0) {
        return this.ARTICLES;
      }
      return this.ARTICLES.filter((elem) => {
        let find = false;
        this.filters.forEach((tag) => {
          if (elem.tag.includes(tag)) {
            find++;
          }
        });
        if (find === this.filters.length) {
          return true;
        } else {
          return false;
        }
      });
    },
  },
  }

  </script>
  <style lang="scss">
 
  .articles{
    margin-top:25px
  }
  @import url('@/assets/scss-modules/articles.scss');
  
  @import url('@/assets/scss-modules/_head.scss');
  @import url('@/assets/scss-modules/_latest-post.scss');
  @import url('@/assets/scss-modules/_bookmarks.scss');
  @import url('@/assets/scss-modules/_pages.scss');
  @import url('@/assets/styles/_article.scss');
  </style>
  