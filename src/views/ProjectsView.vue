<template>
    <div class="projects">
        <HeaderComponent/>
        <div class="bookmark">
          <img
            src="@/assets/bookmarks/news-articles.jpg"
            class="bookmark__img"
          />
          <div class="head">
            <h1 class="head__name">Our Projects</h1>
            <h3 class="head__description">Home / Blog</h3>
        </div>
        </div>
        <div   class= "filter">
          <span  @click="addFilter" class="filter__item">bathroom</span>
          <span  @click="addFilter" class="filter__item">bed room</span>
          <span  @click="addFilter" class="filter__item">kitchen</span>
          <span  @click="addFilter" class="filter__item">architecture</span>
        </div>
        <div v-if="PROJECTS" class="palette">
          <ProjectComponent v-for="project,index in PROJECTS" :is-time="false" :project="project" :key="index" />
        </div>
      <FooterComponent/>
    </div>
  </template>
  
  <script>
  import ProjectComponent from '@/components/ProjectComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  
  
  export default {
    name: 'ProjectsView',
    components: {
      HeaderComponent,
      FooterComponent,
      ProjectComponent,
  },
  data(){
    return{
      filters:[]
    }
  },
  methods:{
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
    this.$store.dispatch('GET_PROJECTS')

  },
  computed: {
    PROJECTS(){
      const middleware = this.$store.getters.PROJECTS[0];
      if (this.filters.length === 0) {
        return middleware;
      }
      return middleware.filter((elem) => {
        let find = 0;
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
  }
}

  </script>
  <style lang="scss" scoped>
  .filter{
    margin-inline:auto ;
    border: #CDA274 solid 1px;
    border-radius: 18px;
    width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
    text-align: center;
    margin-top: 200px;
    .filter__item{
      text-transform: capitalize;
      padding: 26px 66px;
      &:hover, &.selected{
        background-color: #CDA274;
        border-radius: 18px;
        cursor: pointer;
      }
    }
  }
  
  .projects{
   
    margin-inline: auto;
  }
  @import url('@/assets/scss-modules/_head.scss');
  @import url('@/assets/scss-modules/articles.scss');
  @import url('@/assets/scss-modules/_bookmarks.scss');
 .palette{
  width: 1200px;
  margin-inline: auto;
  
  flex-wrap: wrap;
  margin-top: 61px;
  gap: 30px;
  row-gap: 35px;
  column-count: 2;
  

 }
  </style>
  