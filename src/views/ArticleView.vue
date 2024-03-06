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
        <section class="big-article">
          <div class="content">
            <p class="content__name">let's get solution for building construction work</p>
            <div class="img-container">
            <img src="@/assets/article/1.png"  class="img-container__img">
            <time class="img-container__date">26 December, 2022</time>
            <p class="img-container__tags">Interior / Home / Decore</p>
          </div>
            <p class="content__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
          <aside class="cites">
              <div class="cite">
                  <p class="cite__number">„</p>
                  <p class="cite__description">The details are not the details. 
                  They make the design.</p>
              </div>
          </aside>
            <p class="content__name">design sprints are great</p>
            <p class="content__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <ol class="list">
              <li class="list__element">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
              <li class="list__element">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
              <li class="list__element">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
            </ol>
            <img src="@/assets/article/1.png"  class="content__img">
            <p class="content__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>

          </div>
          <div class="tags">
            <span class="tags__name">Tags</span>
            <span v-for="tags,index in articles[0].tag" class="tags__element" @click="addFilter" :key="index">{{tags}}</span>
          </div>
          <section class="articles">
            <div class="palette">
              <div v-for="article,index in filteredArticles" class="article" :id="article.id" :key="index">
                <img :src="article.img" class="article__img" />
                <span class="article__tag">{{article.tag[0]}}</span>
                <h2 class="article__name">{{article.name}}</h2>
                <time class="article__date"
                  >{{getDateToString(article.date)}}</time
                >
                <a class="article__link">
                  <svg
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.77144 14.9527L7.71429 8.267L1.77144 1.58128"
                      stroke="#292F36"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            
          </section>
        </section>
        </main>
      <FooterComponent/>
    </div>
  </template>
  
  <script>
  import FooterComponent from '@/components/Footer/FooterComponent.vue';
  import HeaderComponent from '@/components/Header/HeaderComponent.vue';
  
  
  export default {
    name: 'ArticleView',
    components: {
      HeaderComponent,
      FooterComponent
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
    articles: [
      {
        id: 0,
        img: './news-image/1.png',
        name: 'let’s get solution for building construction work',
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
        img: './news-image/2.png',
        name: ' low cost latest invented interior designing ideas.',
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
        img: './news-image/3.png',
        name: 'best for any office & business interior solution',
        date: 1735171200,
        tag: 'interior design',
      },
      {
        id: 3,
        img: './news-image/4.png',
        name: 'let’s get solution for building construction work',
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
        img: './news-image/5.png',
        name: ' low cost latest invented interior designing ideas.',
        date: 1734825600,
        tag: 'living design',
      },
      {
        id: 5,
        img: './news-image/6.png',
        name: 'best for any office & business interior solution',
        date: 1735084800,
        tag: 'interior design',
      },
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
  }

  </script>
  <style lang="scss">
  
  @import url('@/assets/scss-modules/_head.scss');
  @import url('@/assets/scss-modules/_latest-post.scss');
  @import url('@/assets/scss-modules/_bookmarks.scss');
  @import url('@/assets/scss-modules/_pages.scss');
  @import url('@/assets/scss-modules/articles.scss');
  @import url('@/assets/styles/_article.scss');
  </style>
  