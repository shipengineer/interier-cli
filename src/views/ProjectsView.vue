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
        <div class="palette">
          <ProjectComponent v-for="project,index in projects" :is-time="false" :project="project" :key="index"/>

        </div>
      <FooterComponent/>
    </div>
  </template>
  
  <script>
  import ProjectComponent from '@/components/Project/ProjectComponent.vue';
  import FooterComponent from '@/components/Footer/FooterComponent.vue';
  import HeaderComponent from '@/components/Header/HeaderComponent.vue';
  
  
  export default {
    name: 'ProjectsView',
    components: {
      HeaderComponent,
      FooterComponent,
      ProjectComponent
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
  computed: {
    filteredArticles() {
      if (this.filters.length === 0) {
        return this.articles;
      }
      return this.articles.filter((elem) => {
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
  data(){
    return{
      projects: [
      {
        id: 0,
        img: './projects-view/project2-1.png',
        name: 'Classic bedroom',
        date: 1735171200,
        tag: [
          "kitchen",
          "bedroom",
          "building",
          "architecture",
          "kitchen design",
          "bedroom",
        ],
      },
      {
        id: 1,
        img: './projects-view/project2-3.png',
        name: 'classic kithcen',
        date: 1734825600,
        tag: [
          "kitchen",
          "bedroom",
          "kitchen design",
          "bedroom",
        ],
      },
      {
        id: 2,
        img: './projects-view/project2-5.png',
        name: 'classsic office',
        date: 1735171200,
        tag: [
          "architecture",
          "kitchen",
          "bedroom",
          "building",
          
        ],
      },
      {
        id: 3,
        img: './projects-view/project2-7.png',
        name: 'Classic bedroom',
        date: 1735084800,
        tag: [
          "kitchen",
          "bedroom",
          "building",
          "architecture",
        ],
      },
      {
        id: 4,
        img: './projects-view/project2-2.png',
        name: 'classic kithcen',
        date: 1734825600,
        tag: [
          "architecture",
          "kitchen",
          "bedroom",
          "building",
          
        ],
      },
      {
        id: 5,
        img: './projects-view/project2-4.png',
        name: 'classsic office',
        date: 1735084800,
        tag: ["bedroom",
          "kitchen",
          "building",
          "architecture",
        ],
      },{
        id: 5,
        img: './projects-view/project2-6.png',
        name: 'classsic office',
        date: 1735084800,
        tag: ["bedroom",
          "kitchen",
          "building",
          "architecture",
        ],
      },{
        id: 5,
        img: './projects-view/project2-8.png',
        name: 'classsic office',
        date: 1735084800,
        tag: ["bedroom",
          "kitchen",
          "building",
          "architecture",
        ],
      },
    ],
  }},
   
  }

  </script>
  <style lang="scss" scoped>
  
  @import url('@/assets/scss-modules/_head.scss');
  @import url('@/assets/scss-modules/_bookmarks.scss');
 .palette{
  width: 1200px;
  margin-inline: auto;
 display: flex;
 flex-direction: column;;
  height: 3200px;
  flex-wrap: wrap;
  gap: 35px;



 }



  </style>
  