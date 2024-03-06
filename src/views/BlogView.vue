<template>
    <div class="blog">
        <HeaderComponent/>
        <main>
        <div class="bookmark">
          <img
            src="@/assets/bookmarks/news-articles.jpg"
            class="bookmark__img"
          />
          <div class="head">
            <h1 class="head__name">articles & news</h1>
            <h3 class="head__description">Home / Blog</h3>
          </div>
        </div>
        <span class="head">latest post</span>
        <section class="latest-post">
          <img
            src="@/assets/last-article.png"
            alt=""
            class="latest-post__img"
          />
          <div class="description">
            <span class="description__name"
              >Low Cost Latest Invented Interior Designing Ideas</span
            >
            <span class="description__description"
              >Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpis dignissim maximus.posuere in.Contrary to popular belief.<br /><br />
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classica.</span
            >
            <time class="description__date">26 December,2022</time>
            <a class="description__link">
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
        </section>
        <span class="head">articles & news</span>

        <section class="articles">
          <div class="palette">
            <div v-for="article, index in articles" class="article" id="article.id" :key="index">
              <img :src="article.img" class="article__img" />
              <span class="article__tag">{{article.tag}}</span>
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
          <div class="page">
            <button class="page__selector">01</button>
            <button class="page__selector">02</button>
            <button class="page__selector">03</button>
            <button class="page__selector">></button>
          </div>
        </section>
      </main>
      <FooterComponent/>
    </div>
  </template>
  
  <script>
  import FooterComponent from '@/components/FooterComponent.vue';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  
  
  export default {
    name: 'BlogView',
    components: {
      HeaderComponent,
      FooterComponent
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
    articles: [
      {
        id: 0,
        img: './news-image/1.png',
        name: 'let’s get solution for building construction work',
        date: 1735171200,
        tag: 'kitchan design',
      },
      {
        id: 1,
        img: './news-image/2.png',
        name: ' low cost latest invented interior designing ideas.',
        date: 1734825600,
        tag: 'living design',
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
        tag: 'kitchan design',
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
    },
  }

  </script>
  <style lang="scss" scoped>
  .articles{
    margin: 0
  }
  @import url('@/assets/scss-modules/_head.scss');
  @import url('@/assets/scss-modules/_latest-post.scss');
  @import url('@/assets/scss-modules/_bookmarks.scss');
  @import url('@/assets/scss-modules/_pages.scss');
  @import url('@/assets/scss-modules/articles.scss');
  @import url('@/assets/styles/_blog.scss');
  </style>
  