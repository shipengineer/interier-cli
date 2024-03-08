<template>
  <div class="home">

    <HeaderComponent/>
    <main>
        <section class="intro">
            <h1 class="intro__name">let your home be unique</h1>
            <h3 class="intro__description">
                There are many variations of the passages of lorem Ipsum fromavailable,
                majority.
            </h3>
            <router-link to="/blog">get started
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                        stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                </svg>
              </router-link>
           
        </section>
        
        <section class="our-projects">
            <div class="head">
                <h1 class="head__name">follow our projects</h1>
                <h3 class="head__description">
                    It is a long established fact that a reader will be distracted by the
                    of readable content of page lookings at its layouts points.
                </h3>
            </div>
            <div class="palette">
                <div class="project">
                    <img src="@/assets/project/project1.png" alt="" class="project__img" />
                    <div class="description">
                        <h2 class="description__name">modern kitchan</h2>
                        <h3 class="description__type">Decor / Artchitecture</h3>
                    </div>
                    <a class="description__link">
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
                <div class="project">
                    <img src="@/assets/project/project2.png" alt="" class="project__img" />
                    <div class="description">
                        <h2 class="description__name">modern kitchan</h2>
                        <h3 class="description__type">Decor / Artchitecture</h3>
                    </div>
                    <a class="description__link">
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
                <div class="project">
                    <img src="@/assets/project/project3.png" alt="" class="project__img" />
                    <div class="description">
                        <h2 class="description__name">modern kitchan</h2>
                        <h3 class="description__type">Decor / Artchitecture</h3>
                    </div>
                    <a class="description__link">
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
                <div class="project">
                    <img src="@/assets/project/project4.png" alt="" class="project__img" />
                    <div class="description">
                        <h2 class="description__name">modern kitchan</h2>
                        <h3 class="description__type">Decor / Artchitecture</h3>
                    </div>
                    <a class="description__link">
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
        <aside class="achivments">
            <div class="achivment">
                <span class="achive__number">12</span>
                <span class="achive__description">years of experiance</span>
            </div>
            <div class="achivment">
                <span class="achive__number">85</span>
                <span class="achive__description">succsess projects</span>
            </div>
            <div class="achivment">
                <span class="achive__number">15</span>
                <span class="achive__description">active projects</span>
            </div>
            <div class="achivment">
                <span class="achive__number">95</span>
                <span class="achive__description">happy customers</span>
            </div>
        </aside>
        <section class="articles">
            <div class="head">
                <h1 class="head__name">articles & news</h1>
                <h3 class="head__description">
                    It is a long established fact that a reader will be distracted by the
                    of readable content of a page when lookings at its layouts the points
                    of using.
                </h3>
            </div>
            <div class="palette">
                <ArticleComponent v-for="post,index in ARTICLES.slice(0,6)" class="article" 
              :isTime="true"
              :article="post" :key="index"></ArticleComponent>
            
            </div>
        </section>
    </main>
    <FooterComponent/>
  </div>
</template>

<script>
import ArticleComponent from '@/components/ArticleComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';


export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    FooterComponent,
    ArticleComponent,
},
mounted(){
    this.$store.dispatch('GET_ARTICLES')
    
  },
  computed: {
    ARTICLES(){
        
      return   this.$store.getters.ARTICLES[0]
    },
}
}
</script>
<style lang="scss" scoped>
.head{
    align-items: center ;
    margin-top: 96px;
    margin-bottom: 52px;
    &__name{
        margin-top: 0;
        margin-bottom: 0;
    }
   
}
.articles{
    margin-top: 96px;
    >*{
        margin-top: 0
    }
}
.achivments{
    width: 100vw
}

@import url('@/assets/scss-modules/_head.scss');
  @import url('@/assets/scss-modules/articles.scss');
    @import url('@/assets/styles/_index.scss');

</style>
